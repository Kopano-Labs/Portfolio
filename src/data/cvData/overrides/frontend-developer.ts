import { masterCV, type CVData } from "../master";

export const frontendDeveloperCV: CVData = {
  ...masterCV,
  roleTitle: "Frontend Engineer",
  summary:
    "Frontend engineer specializing in React, TypeScript, animation systems, and resilient UI architecture. " +
    "Delivers pixel-perfect, accessible interfaces with Tailwind CSS and Framer Motion, " +
    "backed by design-system discipline and real production deployment experience on Vercel.",
  skills: [
    ...masterCV.skills.filter((s) => s.group === "frontend"),
    ...masterCV.skills.filter((s) => s.group === "infrastructure").slice(0, 1),
    ...masterCV.skills.filter((s) => s.group === "backend").slice(0, 1),
  ],
  techTags: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Vite",
    "HTML5",
    "CSS3",
    "Responsive Design",
    "Accessibility",
    "Git",
    "Vercel",
    "Figma",
  ],
  projects: masterCV.projects.filter((p) =>
    ["Portfolio Website", "Bookit — 5's Arena", "KasiLink", "Ama-Phu Entertainment"].includes(p.title)
  ),
  certs: masterCV.certs.filter((c) =>
    ["Frontend Developer (React)", "React (Basic)", "CSS (Basic)"].includes(c.title)
  ),
};
