import { masterCV, type CVData } from "../master";

export const frontendBackendDeveloperCV: CVData = {
  ...masterCV,
  roleTitle: "Frontend + Backend Engineer",
  summary:
    "End-to-end engineer delivering across UI, APIs, databases, and supporting infrastructure. " +
    "Builds responsive React frontends wired to Node.js/Express backends with MongoDB, " +
    "auth flows, and automated deployment. " +
    "Ships complete product surfaces — not just isolated layers.",
  skills: [
    ...masterCV.skills.filter((s) => s.group === "frontend").slice(0, 2),
    ...masterCV.skills.filter((s) => s.group === "backend").slice(0, 2),
    ...masterCV.skills.filter((s) => s.group === "frontend").slice(2),
    ...masterCV.skills.filter((s) => s.group === "backend").slice(2),
    ...masterCV.skills.filter((s) => s.group === "infrastructure"),
  ],
  projects: masterCV.projects.filter((p) =>
    ["Bookit — 5's Arena", "KasiLink", "Kopano Context (KC)", "Portfolio Website", "Harvest 4 All"].includes(p.title)
  ),
  certs: masterCV.certs.filter((c) =>
    [
      "Frontend Developer (React)",
      "Node.js (Basic)",
      "React (Basic)",
      "Introduction to Model Context Protocol",
      "Azure Cloud Fundamentals",
    ].includes(c.title)
  ),
};
