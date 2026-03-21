import "dotenv/config";
import express from "express";
import cors from "cors";
import crypto from "crypto";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

// ── Config ──────────────────────────────────────────────
const LINKEDIN = {
  clientId: process.env.LINKEDIN_CLIENT_ID,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  redirectUri: process.env.LINKEDIN_REDIRECT_URI,
  scopes: ["openid", "profile", "email", "w_member_social"],
  authUrl: "https://www.linkedin.com/oauth/v2/authorization",
  tokenUrl: "https://www.linkedin.com/oauth/v2/accessToken",
  apiBase: "https://api.linkedin.com/v2",
  restBase: "https://api.linkedin.com/rest",
};

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
const TOKEN_CACHE_PATH = path.join(__dirname, "token-cache.json");
const POSTS_CACHE_PATH = path.join(__dirname, "posts-cache.json");
const POSTS_CACHE_TTL = 15 * 60 * 1000; // 15 minutes

// ── Middleware ───────────────────────────────────────────
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(express.json());

// ── Token Cache (Tier 3) ────────────────────────────────
async function loadTokenCache() {
  try {
    const data = await fs.readFile(TOKEN_CACHE_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return null;
  }
}

async function saveTokenCache(tokenData) {
  await fs.writeFile(TOKEN_CACHE_PATH, JSON.stringify(tokenData, null, 2));
}

async function loadPostsCache() {
  try {
    const data = await fs.readFile(POSTS_CACHE_PATH, "utf-8");
    const cache = JSON.parse(data);
    if (Date.now() - cache.timestamp < POSTS_CACHE_TTL) {
      return cache.posts;
    }
  } catch {
    // No cache or expired
  }
  return null;
}

async function savePostsCache(posts) {
  await fs.writeFile(
    POSTS_CACHE_PATH,
    JSON.stringify({ timestamp: Date.now(), posts }, null, 2)
  );
}

async function getValidToken() {
  const cache = await loadTokenCache();
  if (!cache) return null;

  // Check if token is expired
  if (cache.expires_at && Date.now() >= cache.expires_at) {
    // Try refresh if we have a refresh token
    if (cache.refresh_token) {
      try {
        return await refreshAccessToken(cache.refresh_token);
      } catch (err) {
        console.error("Token refresh failed:", err.message);
        return null;
      }
    }
    return null;
  }

  return cache.access_token;
}

async function refreshAccessToken(refreshToken) {
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: LINKEDIN.clientId,
    client_secret: LINKEDIN.clientSecret,
  });

  const res = await fetch(LINKEDIN.tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!res.ok) throw new Error(`Refresh failed: ${res.status}`);

  const data = await res.json();
  const tokenData = {
    access_token: data.access_token,
    refresh_token: data.refresh_token || refreshToken,
    expires_at: Date.now() + data.expires_in * 1000,
    scope: data.scope,
  };

  await saveTokenCache(tokenData);
  return tokenData.access_token;
}

// ── Helper: LinkedIn API fetch ──────────────────────────
async function linkedinFetch(endpoint, token, options = {}) {
  const baseUrl = options.rest ? LINKEDIN.restBase : LINKEDIN.apiBase;
  const headers = {
    Authorization: `Bearer ${token}`,
    "X-Restli-Protocol-Version": "2.0.0",
    "LinkedIn-Version": "202401",
    ...options.headers,
  };

  const res = await fetch(`${baseUrl}${endpoint}`, { headers });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`LinkedIn API ${res.status}: ${errorText}`);
  }

  return res.json();
}

// ── TIER 1: OAuth Routes ────────────────────────────────

// State storage for CSRF protection
const oauthStates = new Map();

// GET /api/linkedin/auth — Start OAuth flow
app.get("/api/linkedin/auth", (req, res) => {
  const state = crypto.randomBytes(16).toString("hex");
  oauthStates.set(state, Date.now());

  // Clean old states (older than 10 minutes)
  for (const [key, time] of oauthStates) {
    if (Date.now() - time > 600000) oauthStates.delete(key);
  }

  const params = new URLSearchParams({
    response_type: "code",
    client_id: LINKEDIN.clientId,
    redirect_uri: LINKEDIN.redirectUri,
    state,
    scope: LINKEDIN.scopes.join(" "),
  });

  res.redirect(`${LINKEDIN.authUrl}?${params}`);
});

// GET /api/linkedin/callback — Handle OAuth callback
app.get("/api/linkedin/callback", async (req, res) => {
  const { code, state, error } = req.query;

  if (error) {
    console.error("OAuth error:", error, req.query.error_description);
    return res.redirect(`${FRONTEND_URL}?linkedin_error=${error}`);
  }

  if (!state || !oauthStates.has(state)) {
    return res.redirect(`${FRONTEND_URL}?linkedin_error=invalid_state`);
  }
  oauthStates.delete(state);

  try {
    // Exchange code for access token
    const params = new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: LINKEDIN.redirectUri,
      client_id: LINKEDIN.clientId,
      client_secret: LINKEDIN.clientSecret,
    });

    const tokenRes = await fetch(LINKEDIN.tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    if (!tokenRes.ok) {
      const errText = await tokenRes.text();
      throw new Error(`Token exchange failed: ${tokenRes.status} — ${errText}`);
    }

    const tokenData = await tokenRes.json();

    // Get user profile to store the person URN
    const profileRes = await fetch("https://api.linkedin.com/v2/userinfo", {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });

    let personUrn = null;
    if (profileRes.ok) {
      const profile = await profileRes.json();
      personUrn = profile.sub; // OpenID subject = person ID
    }

    // Save token to cache
    await saveTokenCache({
      access_token: tokenData.access_token,
      refresh_token: tokenData.refresh_token || null,
      expires_at: Date.now() + tokenData.expires_in * 1000,
      scope: tokenData.scope,
      person_id: personUrn,
    });

    // Clear posts cache so next fetch gets fresh data
    try {
      await fs.unlink(POSTS_CACHE_PATH);
    } catch {
      // No cache file to delete
    }

    console.log("LinkedIn OAuth successful! Token cached.");
    res.redirect(`${FRONTEND_URL}?linkedin_connected=true`);
  } catch (err) {
    console.error("OAuth callback error:", err.message);
    res.redirect(`${FRONTEND_URL}?linkedin_error=token_exchange_failed`);
  }
});

// GET /api/linkedin/status — Check if connected
app.get("/api/linkedin/status", async (req, res) => {
  const token = await getValidToken();
  if (!token) {
    return res.json({ connected: false });
  }

  try {
    const profileRes = await fetch("https://api.linkedin.com/v2/userinfo", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!profileRes.ok) {
      return res.json({ connected: false });
    }

    const profile = await profileRes.json();
    res.json({
      connected: true,
      name: profile.name,
      picture: profile.picture,
    });
  } catch {
    res.json({ connected: false });
  }
});

// POST /api/linkedin/disconnect — Remove stored token
app.post("/api/linkedin/disconnect", async (req, res) => {
  try {
    await fs.unlink(TOKEN_CACHE_PATH);
  } catch {
    // Already disconnected
  }
  try {
    await fs.unlink(POSTS_CACHE_PATH);
  } catch {
    // No cache
  }
  res.json({ disconnected: true });
});

// ── TIER 2 & 3: Posts API ───────────────────────────────

// GET /api/linkedin/posts — Fetch real LinkedIn posts
app.get("/api/linkedin/posts", async (req, res) => {
  // Check posts cache first (Tier 3)
  const cachedPosts = await loadPostsCache();
  if (cachedPosts) {
    return res.json({ posts: cachedPosts, cached: true });
  }

  const token = await getValidToken();
  if (!token) {
    return res.status(401).json({
      error: "Not connected to LinkedIn",
      authUrl: "/api/linkedin/auth",
    });
  }

  try {
    const cache = await loadTokenCache();
    const personId = cache?.person_id;

    if (!personId) {
      throw new Error("No person ID found. Please reconnect LinkedIn.");
    }

    const authorUrn = `urn:li:person:${personId}`;

    // Fetch posts using the UGC Posts API
    const postsData = await linkedinFetch(
      `/ugcPosts?q=authors&authors=List(${encodeURIComponent(authorUrn)})&sortBy=LAST_MODIFIED&count=10`,
      token
    );

    const posts = [];

    if (postsData.elements) {
      for (const post of postsData.elements) {
        const parsed = parseLinkedInPost(post);
        if (parsed) posts.push(parsed);
      }
    }

    // If UGC doesn't return results, try the shares API
    if (posts.length === 0) {
      try {
        const sharesData = await linkedinFetch(
          `/shares?q=owners&owners=${encodeURIComponent(authorUrn)}&sortBy=LAST_MODIFIED&count=10`,
          token
        );

        if (sharesData.elements) {
          for (const share of sharesData.elements) {
            const parsed = parseLinkedInShare(share);
            if (parsed) posts.push(parsed);
          }
        }
      } catch (shareErr) {
        console.log("Shares API fallback:", shareErr.message);
      }
    }

    // Try the REST API as another fallback
    if (posts.length === 0) {
      try {
        const restPosts = await linkedinFetch(
          `/posts?author=${encodeURIComponent(authorUrn)}&q=author&count=10`,
          token,
          { rest: true }
        );

        if (restPosts.elements) {
          for (const post of restPosts.elements) {
            const parsed = parseRestPost(post);
            if (parsed) posts.push(parsed);
          }
        }
      } catch (restErr) {
        console.log("REST API fallback:", restErr.message);
      }
    }

    // Resolve media URLs for posts with images/videos (Tier 3)
    for (const post of posts) {
      if (post.mediaId) {
        try {
          post.mediaUrl = await resolveMediaUrl(post.mediaId, token);
        } catch {
          // Media resolution failed, continue without
        }
      }
    }

    // Cache the results (Tier 3)
    await savePostsCache(posts);

    res.json({ posts, cached: false });
  } catch (err) {
    console.error("Posts fetch error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ── Post Parsers ────────────────────────────────────────

function parseLinkedInPost(post) {
  try {
    const specificContent = post.specificContent?.["com.linkedin.ugc.ShareContent"];
    if (!specificContent) return null;

    const text = specificContent.shareCommentary?.text || "";
    const media = specificContent.media || [];
    const created = post.created?.time || Date.now();

    let mediaType = "NONE";
    let mediaUrl = null;
    let mediaId = null;
    let thumbnailUrl = null;

    if (media.length > 0) {
      const firstMedia = media[0];
      mediaType = firstMedia.status === "READY" ? (firstMedia.mediaType || "IMAGE") : "NONE";
      mediaId = firstMedia.media;
      thumbnailUrl = firstMedia.thumbnails?.[0]?.url || null;

      // Direct URL if available
      if (firstMedia.originalUrl) mediaUrl = firstMedia.originalUrl;
    }

    return {
      id: post.id,
      text,
      createdAt: new Date(created).toISOString(),
      mediaType,
      mediaUrl,
      mediaId,
      thumbnailUrl,
      likes: post.socialDetail?.totalSocialActivityCounts?.numLikes || 0,
      comments: post.socialDetail?.totalSocialActivityCounts?.numComments || 0,
    };
  } catch {
    return null;
  }
}

function parseLinkedInShare(share) {
  try {
    const text = share.text?.text || "";
    const content = share.content;
    const created = share.created?.time || Date.now();

    let mediaType = "NONE";
    let mediaUrl = null;
    let thumbnailUrl = null;

    if (content?.contentEntities?.length > 0) {
      const entity = content.contentEntities[0];
      mediaType = content.contentType || "IMAGE";
      thumbnailUrl = entity.thumbnails?.[0]?.resolvedUrl || null;
      mediaUrl = entity.entityLocation || null;
    }

    return {
      id: share.id,
      text,
      createdAt: new Date(created).toISOString(),
      mediaType,
      mediaUrl,
      thumbnailUrl,
      likes: 0,
      comments: 0,
    };
  } catch {
    return null;
  }
}

function parseRestPost(post) {
  try {
    const text = post.commentary || post.content?.article?.description || "";
    const created = post.createdAt || post.publishedAt || Date.now();

    let mediaType = "NONE";
    let mediaUrl = null;
    let thumbnailUrl = null;

    if (post.content) {
      if (post.content.media) {
        mediaType = post.content.media.type || "IMAGE";
        mediaUrl = post.content.media.id;
      }
      if (post.content.article) {
        mediaType = "ARTICLE";
        thumbnailUrl = post.content.article.thumbnail;
        mediaUrl = post.content.article.source;
      }
      if (post.content.images?.length > 0) {
        mediaType = "IMAGE";
        mediaUrl = post.content.images[0].id;
      }
    }

    return {
      id: post.id,
      text,
      createdAt: new Date(created).toISOString(),
      mediaType,
      mediaUrl,
      thumbnailUrl,
      likes: post.likesSummary?.totalLikes || 0,
      comments: post.commentsSummary?.totalComments || 0,
    };
  } catch {
    return null;
  }
}

// Resolve media URN to downloadable URL (Tier 3)
async function resolveMediaUrl(mediaUrn, token) {
  if (!mediaUrn || !mediaUrn.startsWith("urn:li:")) return null;

  // Try image resolution
  if (mediaUrn.includes("image") || mediaUrn.includes("digitalmedia")) {
    const encoded = encodeURIComponent(mediaUrn);
    const data = await linkedinFetch(
      `/images/${encoded}`,
      token,
      { rest: true }
    );
    return data.downloadUrl || null;
  }

  // Try video resolution
  if (mediaUrn.includes("video")) {
    const encoded = encodeURIComponent(mediaUrn);
    const data = await linkedinFetch(
      `/videos/${encoded}`,
      token,
      { rest: true }
    );
    return data.downloadUrl || null;
  }

  return null;
}

// ── Health Check ────────────────────────────────────────
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    linkedin: {
      configured: !!(LINKEDIN.clientId && LINKEDIN.clientId !== "your_client_id_here"),
    },
  });
});

// ── Start Server ────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Portfolio API server running on http://localhost:${PORT}`);
  console.log(`\n📋 LinkedIn OAuth Setup:`);

  if (!LINKEDIN.clientId || LINKEDIN.clientId === "your_client_id_here") {
    console.log(`   ⚠️  LinkedIn credentials not configured!`);
    console.log(`   1. Go to https://www.linkedin.com/developers/apps`);
    console.log(`   2. Create an app (or use existing)`);
    console.log(`   3. Under "Auth" tab, add redirect URL: ${LINKEDIN.redirectUri}`);
    console.log(`   4. Request these products: "Sign In with LinkedIn using OpenID Connect" & "Share on LinkedIn"`);
    console.log(`   5. Copy Client ID and Client Secret to server/.env`);
  } else {
    console.log(`   ✅ Credentials configured`);
    console.log(`   🔗 Auth URL: http://localhost:${PORT}/api/linkedin/auth`);
  }

  console.log(`\n📡 Endpoints:`);
  console.log(`   GET  /api/linkedin/auth       — Start OAuth`);
  console.log(`   GET  /api/linkedin/callback    — OAuth callback`);
  console.log(`   GET  /api/linkedin/status      — Connection status`);
  console.log(`   GET  /api/linkedin/posts       — Fetch posts`);
  console.log(`   POST /api/linkedin/disconnect  — Disconnect\n`);
});
