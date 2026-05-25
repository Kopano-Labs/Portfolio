import puppeteer from "puppeteer";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT = path.join(__dirname, "..", "public", "og-image.png");

const html = `<!DOCTYPE html>
<html>
<head>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  width: 1200px;
  height: 630px;
  background: #060d18;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  overflow: hidden;
  position: relative;
}
.bg-glow {
  position: absolute;
  top: -120px;
  right: -80px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0,232,157,0.12) 0%, transparent 70%);
  border-radius: 50%;
}
.bg-glow-2 {
  position: absolute;
  bottom: -100px;
  left: -60px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%);
  border-radius: 50%;
}
.card {
  position: relative;
  width: 1080px;
  height: 510px;
  background: rgba(8, 14, 28, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 32px;
  padding: 64px 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #00e89d, #0ea5e9, transparent);
  border-radius: 32px 32px 0 0;
}
.kicker {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #00e89d;
  margin-bottom: 16px;
}
.name {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 64px;
  color: #ffffff;
  line-height: 1.05;
}
.name .accent {
  background: linear-gradient(135deg, #00e89d, #0ea5e9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.role {
  font-size: 22px;
  font-weight: 600;
  color: #00e89d;
  margin-top: 16px;
}
.desc {
  font-size: 18px;
  color: #94a3b8;
  margin-top: 12px;
  max-width: 700px;
  line-height: 1.5;
}
.footer {
  position: absolute;
  bottom: 48px;
  left: 72px;
  right: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.url {
  font-family: 'JetBrains Mono', monospace;
  font-size: 15px;
  color: #64748b;
  letter-spacing: 0.05em;
}
.tags {
  display: flex;
  gap: 8px;
}
.tag {
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 6px;
  background: rgba(0, 232, 157, 0.08);
  border: 1px solid rgba(0, 232, 157, 0.2);
  color: rgba(0, 232, 157, 0.8);
}
</style>
</head>
<body>
<div class="bg-glow"></div>
<div class="bg-glow-2"></div>
<div class="card">
  <div class="kicker">Chief Architect · Kopano Labs</div>
  <div class="name">Kholofelo <span class="accent">Robyn</span> Rababalela</div>
  <div class="role">Sovereign System Engineer</div>
  <div class="desc">Resilient product systems, multi-agent orchestration, and offline-first infrastructure shaped by real constraints.</div>
  <div class="footer">
    <div class="url">krrababalela.com</div>
    <div class="tags">
      <span class="tag">React</span>
      <span class="tag">TypeScript</span>
      <span class="tag">Node.js</span>
      <span class="tag">MCP</span>
      <span class="tag">AI</span>
    </div>
  </div>
</div>
</body>
</html>`;

async function main() {
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.screenshot({ path: OUTPUT, type: "png" });
  await browser.close();
  console.log(`OG image generated: ${OUTPUT}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
