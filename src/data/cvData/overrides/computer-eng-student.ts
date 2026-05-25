import { masterCV, type CVData } from "../master";

export const computerEngStudentCV: CVData = {
  ...masterCV,
  roleTitle: "Computer Engineering Student",
  summary:
    "BEng Tech Computer Engineering student at CPUT with production delivery experience across " +
    "full-stack web systems, embedded protocol design, and multi-agent orchestration. " +
    "Grounded in hardware-software co-design, systems thinking, and real infrastructure constraints " +
    "including load-shedding resilience and offline-first architectures.",
  skills: [
    ...masterCV.skills.filter((s) => s.group === "infrastructure"),
    ...masterCV.skills.filter((s) => s.group === "backend"),
    ...masterCV.skills.filter((s) => s.group === "ai"),
    ...masterCV.skills.filter((s) => s.group === "frontend"),
  ],
  techTags: [
    "Python",
    "C/C++",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Docker",
    "Linux",
    "Git",
    "MCP SDK",
    "React",
    "REST APIs",
    "FastAPI",
    "Vite",
    "HTML5",
    "CSS3",
  ],
  projects: masterCV.projects.filter((p) =>
    ["Kopano Context (KC)", "Harvest 4 All", "KasiLink", "Bookit — 5's Arena"].includes(p.title)
  ),
  certs: masterCV.certs.filter((c) =>
    ["AI Fluency: Framework & Foundations", "Introduction to Model Context Protocol", "Azure Cloud Fundamentals", "Java (Basic)"].includes(c.title)
  ),
};
