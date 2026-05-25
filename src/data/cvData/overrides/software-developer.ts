import { masterCV, type CVData } from "../master";

export const softwareDeveloperCV: CVData = {
  ...masterCV,
  roleTitle: "Software Engineer",
  summary:
    "Software engineer building scalable, well-architected systems with clean separation of concerns " +
    "and production-grade delivery habits. Experience spans full-stack web products, " +
    "multi-agent control planes, and protocol-level infrastructure — " +
    "all shipped with Git discipline, CI/CD pipelines, and documented evidence.",
  skills: [
    ...masterCV.skills.filter((s) => s.group === "backend"),
    ...masterCV.skills.filter((s) => s.group === "infrastructure"),
    ...masterCV.skills.filter((s) => s.group === "frontend").slice(0, 2),
    ...masterCV.skills.filter((s) => s.group === "ai"),
  ],
  projects: masterCV.projects.filter((p) =>
    ["Kopano Context (KC)", "Bookit — 5's Arena", "KasiLink", "Harvest 4 All", "Portfolio Website"].includes(p.title)
  ),
  certs: masterCV.certs.filter((c) =>
    [
      "Introduction to Model Context Protocol",
      "AI Fluency: Framework & Foundations",
      "Node.js (Basic)",
      "Java (Basic)",
      "Azure Cloud Fundamentals",
    ].includes(c.title)
  ),
};
