import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, ArrowUpRight, X, Info } from "lucide-react";

const TECH_INFO: Record<string, string> = {
  React: "UI library for building component-based frontends",
  "Node.js": "JavaScript runtime for server-side development",
  Express: "Fast, minimalist web framework for Node.js",
  MongoDB: "NoSQL document database for flexible data storage",
  CSS: "Cascading Style Sheets for visual styling",
  JavaScript: "The language of the web — dynamic and versatile",
  TailwindCSS: "Utility-first CSS framework for rapid UI building",
  TypeScript: "JavaScript with static types for safer code",
  Vite: "Lightning-fast build tool and dev server",
  "Framer Motion": "Production-ready animation library for React",
  Python: "Versatile language great for scripts and automation",
  HTML: "The markup language that structures the web",
  "REST API": "Architectural style for building scalable web APIs",
  Authentication: "Secure login/session management patterns",
  "MCP SDK": "Model Context Protocol — connect AI to real tools",
};

const projects = [
  {
    title: "Bookit — 5's Arena",
    subtitle: "Full-Stack Booking Platform",
    description:
      "Hellenic FC needed a way to digitize their 5-a-side booking flow. I built a full-stack MERN platform with real-time booking, team management, payment integration, and an admin dashboard — replacing their manual spreadsheet system.",
    techs: ["React", "Node.js", "Express", "MongoDB", "CSS", "JavaScript"],
    github: "https://github.com/RobynAwesome/Bookit-5s-Arena",
    live: "https://fivesarena.com",
    image: "/web-image-5s.png",
    accent: "#00e89d",
    accentAlt: "#34d399",
  },
  {
    title: "5's Arena Blog",
    subtitle: "Community Blog Platform",
    description:
      "5's Arena needed a community hub to drive engagement beyond the pitch. I built a MERN blog platform with full authentication, role-based access control, image uploads, and rich text editing — giving players a voice and building community.",
    techs: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Authentication"],
    github: "https://github.com/RobynAwesome/5s-Arena-Blog",
    live: "https://blog.fivesarena.com",
    image: "/web-image-5s.png",
    accent: "#0ea5e9",
    accentAlt: "#38bdf8",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Brand & Showcase",
    description:
      "A multi-page React + TypeScript SPA with Framer Motion animations, dark/light mode, and a techy aesthetic — purpose-built to impress recruiters and clients. The very site you're browsing right now.",
    techs: ["React", "TypeScript", "TailwindCSS", "Vite", "Framer Motion"],
    github: "https://github.com/RobynAwesome/Portfolio",
    live: "https://kholofelorababalela.vercel.app",
    image: "/profile-banner-1.jpg",
    accent: "#a855f7",
    accentAlt: "#c084fc",
  },
  {
    title: "Introduction to MCP",
    subtitle: "AI Tool Integration Demo",
    description:
      "A hands-on exploration of Anthropic's Model Context Protocol. Built Python scripts and server configs that wire Claude to real tools — file systems, APIs, databases — demonstrating agentic AI capabilities.",
    techs: ["Python", "MCP SDK", "REST API"],
    github: "https://github.com/RobynAwesome/Introduction-to-MCP",
    live: undefined,
    image: "/profile-banner-1.jpg",
    accent: "#f97316",
    accentAlt: "#fb923c",
  },
  {
    title: "Harvest 4 All",
    subtitle: "Civic Hackathon Project",
    description:
      "Built during CX Innovation Hackathon. A community platform connecting urban farmers with local distributors and food banks — reducing food waste and fighting hunger in underserved South African communities.",
    techs: ["JavaScript", "HTML", "CSS", "REST API"],
    github: "https://github.com/RobynAwesome/Harvest-4-All",
    live: "https://www.cxia4irhack.co.za",
    image: "/profile-banner-1.jpg",
    accent: "#f7df1e",
    accentAlt: "#fde047",
  },
  {
    title: "KasiLink",
    subtitle: "Township Business Directory",
    description:
      "A digital directory connecting local township businesses with customers — bringing informal economy businesses online and making them discoverable to the wider community.",
    techs: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/RobynAwesome/KasiLink",
    live: undefined,
    image: "/profile-banner-1.jpg",
    accent: "#ec4899",
    accentAlt: "#f472b6",
  },
  {
    title: "Cape Campass",
    subtitle: "Cape Town Campus Guide",
    description:
      "A navigational guide and resource hub for CPUT students — helping new students find their way around campus, discover services, and navigate university life with ease.",
    techs: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/RobynAwesome/cape-campass",
    live: undefined,
    image: "/profile-banner-1.jpg",
    accent: "#14b8a6",
    accentAlt: "#2dd4bf",
  },
  {
    title: "Portfolio-MBR",
    subtitle: "Client Portfolio Build",
    description:
      "A custom portfolio website built for another developer — demonstrating the ability to design and deliver polished, production-ready sites for clients with unique branding requirements.",
    techs: ["React", "TypeScript", "TailwindCSS", "Vite", "Framer Motion"],
    github: "https://github.com/RobynAwesome/Portfolio-MBR",
    live: "https://mashoto.vercel.app",
    image: "/profile-banner-1.jpg",
    accent: "#8b5cf6",
    accentAlt: "#a78bfa",
  },
];

function TechPill({
  tech,
  accent,
  delay,
}: {
  tech: string;
  accent: string;
  delay: number;
}) {
  const [showTip, setShowTip] = useState(false);
  const tip = TECH_INFO[tech] ?? `Used in this project`;

  return (
    <div className="relative">
      <motion.span
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay }}
        whileHover={{ scale: 1.12 }}
        onClick={() => setShowTip((v) => !v)}
        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-semibold cursor-pointer select-none transition-all"
        style={{
          background: `${accent}10`,
          border: `1px solid ${accent}25`,
          color: `${accent}cc`,
        }}
      >
        {tech}
        <Info size={9} className="opacity-50" />
      </motion.span>
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.94 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-full left-0 mb-2 z-50 w-48 rounded-xl p-3 text-xs text-gray-200 leading-relaxed shadow-xl"
            style={{
              background: "rgba(10,18,35,0.97)",
              border: `1px solid ${accent}30`,
              backdropFilter: "blur(12px)",
            }}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setShowTip(false); }}
              className="absolute top-2 right-2 opacity-40 hover:opacity-80 transition-opacity"
            >
              <X size={10} />
            </button>
            <span className="font-bold block mb-1" style={{ color: accent }}>{tech}</span>
            {tip}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 4) * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="group relative"
    >
      {/* Outer glow */}
      <div
        className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{
          background: `linear-gradient(135deg, ${project.accent}40, transparent 50%, ${project.accentAlt}30)`,
        }}
      />

      {/* Card */}
      <div
        className="relative rounded-3xl overflow-hidden h-full flex flex-col"
        style={{
          background: "rgba(15, 23, 42, 0.6)",
          backdropFilter: "blur(20px) saturate(150%)",
          WebkitBackdropFilter: "blur(20px) saturate(150%)",
          border: `1px solid rgba(255,255,255,0.06)`,
        }}
      >
        {/* Top image/preview area */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.accent}20, transparent 60%, rgba(15,23,42,0.4))`,
            }}
          />
          <div className="absolute top-4 right-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black backdrop-blur-sm"
              style={{
                background: `rgba(15,23,42,0.7)`,
                border: `1px solid ${project.accent}40`,
                color: project.accent,
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f172a] to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-7 sm:p-8 -mt-6 flex flex-col flex-1">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-2"
            style={{ color: project.accent }}
          >
            {project.subtitle}
          </p>

          <h3 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-white/90 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-1">
            {project.description}
          </p>

          {/* Animated tech pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techs.map((tech, i) => (
              <TechPill
                key={tech}
                tech={tech}
                accent={project.accent}
                delay={i * 0.3}
              />
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* View Code — infinite subtle glow */}
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                boxShadow: [
                  `0 0 0px ${project.accent}00`,
                  `0 0 14px ${project.accent}55`,
                  `0 0 0px ${project.accent}00`,
                ],
              }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-colors duration-200"
              style={{
                background: `linear-gradient(135deg, ${project.accent}, ${project.accentAlt})`,
                color: "#060d18",
              }}
            >
              <Github size={15} />
              View Code
              <ArrowUpRight size={13} />
            </motion.a>

            {/* Live Demo — only if URL exists */}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  boxShadow: [
                    `0 0 0px ${project.accent}00`,
                    `0 0 10px ${project.accent}33`,
                    `0 0 0px ${project.accent}00`,
                  ],
                }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200"
                style={{
                  background: "transparent",
                  border: `1px solid ${project.accent}40`,
                  color: project.accent,
                }}
              >
                <ExternalLink size={14} />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main className="pt-28 pb-28 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#00e89d]/5 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#a855f7]/5 blur-[120px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-8 sm:px-16 lg:px-24 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-mono text-[#00e89d] text-xs sm:text-sm tracking-[0.25em] uppercase mb-6 flex items-center justify-center gap-3"
            >
              <span className="inline-block h-[1px] w-8 bg-[#00e89d]" />
              8 Public Repos
              <span className="inline-block h-[1px] w-8 bg-[#00e89d]" />
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-8xl font-black mb-2 leading-none"
            >
              <span className="bg-gradient-to-r from-[#00e89d] via-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent">
                Projects.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mt-6"
            >
              Real-world applications built with the MERN stack,
              TypeScript, and modern web technologies.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={heroInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mx-auto mt-10 h-[2px] w-40 origin-center"
              style={{
                background: "linear-gradient(90deg, #00e89d, #0ea5e9, #a855f7)",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-8 sm:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="max-w-6xl mx-auto px-8 sm:px-16 lg:px-24 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,232,157,0.08), rgba(14,165,233,0.06), rgba(168,85,247,0.08))",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#00e89d]/5 blur-[100px]" />
          <div
            className="absolute inset-0 rounded-3xl"
            style={{ border: "1px solid rgba(255,255,255,0.06)" }}
          />

          <div className="relative p-10 sm:p-16 text-center">
            <div
              className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6"
              style={{ background: "rgba(0,232,157,0.1)", border: "1px solid rgba(0,232,157,0.2)" }}
            >
              <Github size={28} className="text-[#00e89d]" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Explore my work on{" "}
              <span className="gradient-text">GitHub</span>
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Check out my repositories for more projects, experiments, and
              open source contributions.
            </p>

            <motion.a
              href="https://github.com/RobynAwesome"
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                boxShadow: [
                  "0 0 0px #00e89d00",
                  "0 8px 32px #00e89d33",
                  "0 0 0px #00e89d00",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold bg-gradient-to-r from-[#00e89d] to-[#34d399] text-[#060d18] transition-all duration-300"
            >
              <Github size={20} />
              View GitHub Profile
              <ExternalLink size={14} />
            </motion.a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
