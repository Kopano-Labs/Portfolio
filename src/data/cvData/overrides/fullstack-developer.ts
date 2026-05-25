import { masterCV, type CVData } from "../master";

export const fullstackDeveloperCV: CVData = {
  ...masterCV,
  roleTitle: "Full-Stack Engineer",
  summary:
    "Full-stack engineer delivering production systems across frontend, backend, auth, and deployment. " +
    "Proven delivery of booking platforms, community marketplaces, and multi-agent control planes " +
    "using React, TypeScript, Node.js, MongoDB, and Vercel. " +
    "Operates with a bias toward shipped products over slide decks.",
  skills: [
    ...masterCV.skills.filter((s) => s.group === "frontend").slice(0, 2),
    ...masterCV.skills.filter((s) => s.group === "backend"),
    ...masterCV.skills.filter((s) => s.group === "frontend").slice(2),
    ...masterCV.skills.filter((s) => s.group === "infrastructure"),
    ...masterCV.skills.filter((s) => s.group === "ai"),
  ],
  projects: masterCV.projects.filter((p) =>
    ["Bookit — 5's Arena", "KasiLink", "Kopano Context (KC)", "Portfolio Website", "Harvest 4 All"].includes(p.title)
  ),
  certs: masterCV.certs.filter((c) =>
    [
      "Frontend Developer (React)",
      "Node.js (Basic)",
      "Introduction to Model Context Protocol",
      "Azure Cloud Fundamentals",
      "React (Basic)",
    ].includes(c.title)
  ),
};
