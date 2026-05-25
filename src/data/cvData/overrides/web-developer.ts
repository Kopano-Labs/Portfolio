import { masterCV, type CVData } from "../master";

export const webDeveloperCV: CVData = {
  ...masterCV,
  roleTitle: "Product Web Developer",
  summary:
    "Product web developer building modern, accessible web applications with strong UX sensibility " +
    "and operational thinking. Ships responsive, performant interfaces backed by clean APIs " +
    "and real deployment pipelines. Focused on delivering value through products people actually use.",
  skills: [
    ...masterCV.skills.filter((s) => s.group === "frontend"),
    ...masterCV.skills.filter((s) => s.group === "backend").slice(0, 2),
    ...masterCV.skills.filter((s) => s.group === "infrastructure").slice(0, 1),
  ],
  techTags: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Vite",
    "Node.js",
    "REST APIs",
    "MongoDB",
    "Git",
    "Vercel",
    "HTML5",
    "CSS3",
    "Responsive Design",
    "Accessibility",
  ],
  projects: masterCV.projects.filter((p) =>
    ["Portfolio Website", "Bookit — 5's Arena", "KasiLink", "Harvest 4 All"].includes(p.title)
  ),
  certs: masterCV.certs.filter((c) =>
    ["Frontend Developer (React)", "React (Basic)", "CSS (Basic)", "Node.js (Basic)"].includes(c.title)
  ),
};
