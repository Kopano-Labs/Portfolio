import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATE_PATH = path.join(__dirname, "cv-template.html");
const OUTPUT_DIR = path.join(__dirname, "..", "api", "cv-files");

const cvVariants = {
  "computer-eng-student": {
    roleTitle: "Computer Engineering Student",
    summary:
      "BEng Tech Computer Engineering student at CPUT with production delivery experience across " +
      "full-stack web systems, embedded protocol design, and multi-agent orchestration. " +
      "Grounded in hardware-software co-design, systems thinking, and real infrastructure constraints " +
      "including load-shedding resilience and offline-first architectures.",
    skills: [
      { label: "Git / CI/CD / Vercel", pct: 86 },
      { label: "Docker / Linux", pct: 68 },
      { label: "Node.js / Express", pct: 88 },
      { label: "MongoDB / REST APIs", pct: 85 },
      { label: "Python / FastAPI", pct: 72 },
      { label: "Auth / NextAuth / JWT", pct: 80 },
      { label: "MCP SDK / Protocol Eng.", pct: 75 },
      { label: "LangChain / Agentic AI", pct: 70 },
      { label: "React / TypeScript", pct: 92 },
      { label: "Tailwind CSS / Design Systems", pct: 90 },
    ],
    techTags: ["Python", "C/C++", "TypeScript", "Node.js", "MongoDB", "Docker", "Linux", "Git", "MCP SDK", "React", "REST APIs", "FastAPI", "Vite", "HTML5", "CSS3"],
    projects: ["Kopano Context (KC)", "Harvest 4 All", "KasiLink", "Bookit — 5's Arena"],
    certs: ["AI Fluency: Framework & Foundations", "Introduction to Model Context Protocol", "Azure Cloud Fundamentals", "Java (Basic)"],
  },
  "fullstack-developer": {
    roleTitle: "Full-Stack Engineer",
    summary:
      "Full-stack engineer delivering production systems across frontend, backend, auth, and deployment. " +
      "Proven delivery of booking platforms, community marketplaces, and multi-agent control planes " +
      "using React, TypeScript, Node.js, MongoDB, and Vercel. " +
      "Operates with a bias toward shipped products over slide decks.",
    skills: [
      { label: "React / TypeScript", pct: 92 },
      { label: "Tailwind CSS / Design Systems", pct: 90 },
      { label: "Node.js / Express", pct: 88 },
      { label: "MongoDB / REST APIs", pct: 85 },
      { label: "Python / FastAPI", pct: 72 },
      { label: "Auth / NextAuth / JWT", pct: 80 },
      { label: "Next.js / Vite", pct: 88 },
      { label: "Framer Motion / Animation", pct: 82 },
      { label: "Git / CI/CD / Vercel", pct: 86 },
      { label: "Docker / Linux", pct: 68 },
    ],
    techTags: ["React", "TypeScript", "Next.js 15", "Node.js", "Express", "MongoDB Atlas", "Tailwind CSS", "Vite", "Turborepo", "Framer Motion", "Python", "FastAPI", "MCP SDK", "REST APIs", "Git", "Docker", "Vercel"],
    projects: ["Bookit — 5's Arena", "KasiLink", "Kopano Context (KC)", "Portfolio Website", "Harvest 4 All"],
    certs: ["Frontend Developer (React)", "Node.js (Basic)", "Introduction to Model Context Protocol", "Azure Cloud Fundamentals", "React (Basic)"],
  },
  "web-developer": {
    roleTitle: "Product Web Developer",
    summary:
      "Product web developer building modern, accessible web applications with strong UX sensibility " +
      "and operational thinking. Ships responsive, performant interfaces backed by clean APIs " +
      "and real deployment pipelines. Focused on delivering value through products people actually use.",
    skills: [
      { label: "React / TypeScript", pct: 92 },
      { label: "Tailwind CSS / Design Systems", pct: 90 },
      { label: "Next.js / Vite", pct: 88 },
      { label: "Framer Motion / Animation", pct: 82 },
      { label: "Node.js / Express", pct: 88 },
      { label: "MongoDB / REST APIs", pct: 85 },
      { label: "Git / CI/CD / Vercel", pct: 86 },
    ],
    techTags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vite", "Node.js", "REST APIs", "MongoDB", "Git", "Vercel", "HTML5", "CSS3", "Responsive Design", "Accessibility"],
    projects: ["Portfolio Website", "Bookit — 5's Arena", "KasiLink", "Harvest 4 All"],
    certs: ["Frontend Developer (React)", "React (Basic)", "CSS (Basic)", "Node.js (Basic)"],
  },
  "frontend-developer": {
    roleTitle: "Frontend Engineer",
    summary:
      "Frontend engineer specializing in React, TypeScript, animation systems, and resilient UI architecture. " +
      "Delivers pixel-perfect, accessible interfaces with Tailwind CSS and Framer Motion, " +
      "backed by design-system discipline and real production deployment experience on Vercel.",
    skills: [
      { label: "React / TypeScript", pct: 92 },
      { label: "Tailwind CSS / Design Systems", pct: 90 },
      { label: "Next.js / Vite", pct: 88 },
      { label: "Framer Motion / Animation", pct: 82 },
      { label: "Git / CI/CD / Vercel", pct: 86 },
      { label: "Node.js / Express", pct: 88 },
    ],
    techTags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vite", "HTML5", "CSS3", "Responsive Design", "Accessibility", "Git", "Vercel", "Figma"],
    projects: ["Portfolio Website", "Bookit — 5's Arena", "KasiLink", "Ama-Phu Entertainment"],
    certs: ["Frontend Developer (React)", "React (Basic)", "CSS (Basic)"],
  },
  "software-developer": {
    roleTitle: "Software Engineer",
    summary:
      "Software engineer building scalable, well-architected systems with clean separation of concerns " +
      "and production-grade delivery habits. Experience spans full-stack web products, " +
      "multi-agent control planes, and protocol-level infrastructure — " +
      "all shipped with Git discipline, CI/CD pipelines, and documented evidence.",
    skills: [
      { label: "Node.js / Express", pct: 88 },
      { label: "MongoDB / REST APIs", pct: 85 },
      { label: "Python / FastAPI", pct: 72 },
      { label: "Auth / NextAuth / JWT", pct: 80 },
      { label: "Git / CI/CD / Vercel", pct: 86 },
      { label: "Docker / Linux", pct: 68 },
      { label: "React / TypeScript", pct: 92 },
      { label: "Tailwind CSS / Design Systems", pct: 90 },
      { label: "MCP SDK / Protocol Eng.", pct: 75 },
      { label: "LangChain / Agentic AI", pct: 70 },
    ],
    techTags: ["React", "TypeScript", "Next.js 15", "Node.js", "Express", "MongoDB Atlas", "Tailwind CSS", "Vite", "Turborepo", "Framer Motion", "Python", "FastAPI", "MCP SDK", "REST APIs", "Git", "Docker", "Vercel"],
    projects: ["Kopano Context (KC)", "Bookit — 5's Arena", "KasiLink", "Harvest 4 All", "Portfolio Website"],
    certs: ["Introduction to Model Context Protocol", "AI Fluency: Framework & Foundations", "Node.js (Basic)", "Java (Basic)", "Azure Cloud Fundamentals"],
  },
  "frontend-backend-developer": {
    roleTitle: "Frontend + Backend Engineer",
    summary:
      "End-to-end engineer delivering across UI, APIs, databases, and supporting infrastructure. " +
      "Builds responsive React frontends wired to Node.js/Express backends with MongoDB, " +
      "auth flows, and automated deployment. " +
      "Ships complete product surfaces — not just isolated layers.",
    skills: [
      { label: "React / TypeScript", pct: 92 },
      { label: "Tailwind CSS / Design Systems", pct: 90 },
      { label: "Node.js / Express", pct: 88 },
      { label: "MongoDB / REST APIs", pct: 85 },
      { label: "Next.js / Vite", pct: 88 },
      { label: "Framer Motion / Animation", pct: 82 },
      { label: "Python / FastAPI", pct: 72 },
      { label: "Auth / NextAuth / JWT", pct: 80 },
      { label: "Git / CI/CD / Vercel", pct: 86 },
      { label: "Docker / Linux", pct: 68 },
    ],
    techTags: ["React", "TypeScript", "Next.js 15", "Node.js", "Express", "MongoDB Atlas", "Tailwind CSS", "Vite", "Turborepo", "Framer Motion", "Python", "FastAPI", "MCP SDK", "REST APIs", "Git", "Docker", "Vercel"],
    projects: ["Bookit — 5's Arena", "KasiLink", "Kopano Context (KC)", "Portfolio Website", "Harvest 4 All"],
    certs: ["Frontend Developer (React)", "Node.js (Basic)", "React (Basic)", "Introduction to Model Context Protocol", "Azure Cloud Fundamentals"],
  },
};

const masterExperience = [
  {
    role: "Chief Architect",
    company: "Kopano Labs",
    period: "2026 — Present",
    bullets: [
      "Architected product systems across Bookit 5s Arena, KasiLink, and Kopano Context (KC) with Next.js 15, TypeScript, and MongoDB Atlas (SA region)",
      "Defined resilient delivery patterns for mobile-first products shaped by load-shedding and POPIA data-residency constraints",
      "Built multi-agent orchestration (Cassy swarm console, bracket protocol, kc_guard proof bar) with bounded rollout and JSONL evidence",
      "Set platform direction across Turborepo monorepo, MCP-based systems, and edge/offline-first PWA runtimes",
    ],
  },
  {
    role: "Freelance Software Developer",
    company: "Ama-Phu Entertainment / Ama_Phu Enterprises / 5's Arena",
    period: "2023 — Present",
    bullets: [
      "Delivered the Bookit 5's Arena booking platform as a production product surface — not a brochure site",
      "Shipped web properties including the 5's Arena blog, public portfolio builds, and entertainment profile surfaces",
      "Worked across the wider Ama-Phu client ecosystem connecting venue logistics with web product delivery",
      "Handled design, frontend, backend integration, deployment, and documentation across live client-facing work",
    ],
  },
  {
    role: "Director",
    company: "AMAPHU (Pty) Ltd",
    period: "2021 — Present",
    bullets: [
      "Registered and operate an entertainment and technology company bridging African art with engineering",
      "Managed production logistics for live events, stage coordination, and digital asset pipelines",
    ],
  },
];

const masterEducation = [
  {
    degree: "Bachelor of Engineering Technology — Computer Engineering",
    institution: "Cape Peninsula University of Technology (CPUT)",
    period: "2025 — Present",
    note: "Deep foundations in software, hardware, and systems engineering",
  },
  {
    degree: "Certificate in Agentic AI, Machine Learning",
    institution: "The Johns Hopkins University",
    period: "May 2026",
    note: "Python, generative AI, prompt engineering, protocol engineering, LangChain, and LangGraph",
  },
  {
    degree: "MSc in Artificial Intelligence, Machine Learning",
    institution: "Robert Kennedy College",
    period: "May 2026",
    note: "Graduate AI research pathway reflected across portfolio and roadmap surfaces",
  },
];

const masterProjects = [
  { title: "Bookit — 5's Arena", url: "https://fivesarena.com", github: "https://github.com/RobynAwesome/Bookit-5s-Arena", description: "Production booking platform for a five-a-side arena" },
  { title: "KasiLink", url: undefined, github: "https://github.com/RobynAwesome/KasiLink", description: "Community marketplace routing realism over brittle APIs" },
  { title: "Kopano Context (KC)", url: undefined, github: "https://github.com/RobynAwesome", description: "Monorepo control plane with swarm console and proof bar" },
  { title: "Portfolio Website", url: "https://KRRababalela.com", github: "https://github.com/RobynAwesome/Portfolio", description: "React + TypeScript + Tailwind + Framer Motion" },
  { title: "Harvest 4 All", url: "https://www.cxia4irhack.co.za", github: "https://github.com/RobynAwesome/Harvest-4-All", description: "Hackathon finalist — food security platform" },
  { title: "Ama-Phu Entertainment", url: undefined, github: "https://github.com/RobynAwesome", description: "Cultural provenance — live art + stage logistics" },
];

const masterCerts = [
  { title: "AI Fluency: Framework & Foundations", issuer: "Anthropic", date: "Mar 2026" },
  { title: "Introduction to Model Context Protocol", issuer: "Anthropic", date: "Mar 2026" },
  { title: "Frontend Developer (React)", issuer: "HackerRank", date: "Mar 2026" },
  { title: "AI for Cybersecurity", issuer: "LinkedIn Learning", date: "Mar 2026" },
  { title: "Azure Cloud Fundamentals", issuer: "LinkedIn Learning", date: "Mar 2026" },
  { title: "Generative AI in Cloud Computing", issuer: "LinkedIn Learning", date: "Mar 2026" },
  { title: "React (Basic)", issuer: "HackerRank", date: "Mar 2026" },
  { title: "Node.js (Basic)", issuer: "HackerRank", date: "Mar 2026" },
  { title: "Java (Basic)", issuer: "HackerRank", date: "Mar 2026" },
  { title: "CSS (Basic)", issuer: "HackerRank", date: "Mar 2026" },
];

function renderExperience(items) {
  return items
    .map(
      (exp) => `
      <div class="exp-item">
        <div class="exp-header">
          <span class="exp-role">${exp.role}</span>
          <span class="exp-period">${exp.period}</span>
        </div>
        <div class="exp-company">${exp.company}</div>
        <ul class="exp-bullets">
          ${exp.bullets.map((b) => `<li>${b}</li>`).join("\n          ")}
        </ul>
      </div>`
    )
    .join("\n");
}

function renderEducation(items) {
  return items
    .map(
      (edu) => `
      <div class="edu-item">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <span class="edu-degree">${edu.degree}</span>
          <span class="edu-period">${edu.period}</span>
        </div>
        <div class="edu-institution">${edu.institution}</div>
        <div class="edu-note">${edu.note}</div>
      </div>`
    )
    .join("\n");
}

function renderSkills(skills) {
  return skills
    .map(
      (s) => `
      <div class="skill-row">
        <div class="skill-label"><span>${s.label}</span><span>${s.pct}%</span></div>
        <div class="skill-bar"><div class="skill-bar-fill" style="width:${s.pct}%"></div></div>
      </div>`
    )
    .join("\n");
}

function renderTechTags(tags) {
  return tags.map((t) => `<span class="tech-tag">${t}</span>`).join("\n        ");
}

function renderCerts(certTitles) {
  const filtered = masterCerts.filter((c) => certTitles.includes(c.title));
  return filtered
    .map(
      (c) => `
      <div class="cert-item">
        <div><div class="cert-title">${c.title}</div><div class="cert-issuer">${c.issuer}</div></div>
        <div class="cert-date">${c.date}</div>
      </div>`
    )
    .join("\n");
}

function renderProjects(projectTitles) {
  const filtered = masterProjects.filter((p) => projectTitles.includes(p.title));
  return filtered
    .map(
      (p) => `
      <div class="project-item">
        <div>
          <div class="project-title">${p.title}</div>
          <div class="project-desc">${p.description}</div>
        </div>
        <div class="project-links">${p.url ? `<a href="${p.url}">Live</a> · ` : ""}<a href="${p.github}">Code</a></div>
      </div>`
    )
    .join("\n");
}

function buildHTML(template, variant) {
  let html = template;
  html = html.replace(/\{\{NAME\}\}/g, "Kholofelo Robyn Rababalela");
  html = html.replace(/\{\{ROLE_TITLE\}\}/g, variant.roleTitle);
  html = html.replace(/\{\{LOCATION\}\}/g, "Cape Town, Western Cape, South Africa");
  html = html.replace(/\{\{EMAIL\}\}/g, "rkholofelo@gmail.com");
  html = html.replace(/\{\{LINKEDIN\}\}/g, "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/");
  html = html.replace(/\{\{GITHUB\}\}/g, "https://github.com/RobynAwesome");
  html = html.replace(/\{\{WEBSITE\}\}/g, "https://KRRababalela.com");
  html = html.replace(/\{\{WEBSITE_DISPLAY\}\}/g, "KRRababalela.com");
  html = html.replace(/\{\{SUMMARY\}\}/g, variant.summary);
  html = html.replace(/\{\{EXPERIENCE_ITEMS\}\}/g, renderExperience(masterExperience));
  html = html.replace(/\{\{EDUCATION_ITEMS\}\}/g, renderEducation(masterEducation));
  html = html.replace(/\{\{SKILL_BARS\}\}/g, renderSkills(variant.skills));
  html = html.replace(/\{\{TECH_TAGS\}\}/g, renderTechTags(variant.techTags));
  html = html.replace(/\{\{CERT_ITEMS\}\}/g, renderCerts(variant.certs));
  html = html.replace(/\{\{PROJECT_ITEMS\}\}/g, renderProjects(variant.projects));
  return html;
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const template = fs.readFileSync(TEMPLATE_PATH, "utf-8");

  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const [roleId, variant] of Object.entries(cvVariants)) {
    console.log(`  Rendering: ${roleId}...`);
    const html = buildHTML(template, variant);
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });
    const pdfPath = path.join(OUTPUT_DIR, `${roleId}.pdf`);
    await page.pdf({
      path: pdfPath,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });
    await page.close();
    console.log(`    → ${pdfPath}`);
  }

  await browser.close();
  console.log(`\nDone. ${Object.keys(cvVariants).length} PDFs generated in ${OUTPUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
