import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] },
  }),
};

const projects = [
  {
    title: "Bookit — 5's Arena",
    description:
      "Full-stack management and booking system for a 5-a-side football venue. Features real-time booking, team management, payment integration, and admin dashboard.",
    techs: ["React", "Node.js", "Express", "MongoDB", "CSS", "JavaScript"],
    github: "https://github.com/RobynAwesome/Bookit-5s-Arena",
    color: "#00e89d",
    gradient: "from-[#00e89d]/20 to-[#0ea5e9]/20",
  },
  {
    title: "5's Arena Blog",
    description:
      "MERN stack community blog platform with full authentication, role-based access control (RBAC), image uploads, rich text editing, and responsive design.",
    techs: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    github: "https://github.com/RobynAwesome/5s-Arena-Blog",
    color: "#0ea5e9",
    gradient: "from-[#0ea5e9]/20 to-[#6366f1]/20",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio website — a modern, animated, multi-page React application showcasing skills, projects, and experience with smooth Framer Motion transitions.",
    techs: ["React", "TypeScript", "TailwindCSS", "Vite", "Framer Motion"],
    github: "https://github.com/RobynAwesome/Portfolio",
    color: "#6366f1",
    gradient: "from-[#6366f1]/20 to-[#00e89d]/20",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      className="group relative rounded-2xl border border-[#1a2744] bg-[#0f1a30]/50 overflow-hidden hover:border-opacity-50 transition-all duration-500"
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = `${project.color}40`)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "#1a2744")
      }
    >
      {/* Top gradient bar */}
      <div
        className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.color}08, transparent 40%)`,
        }}
      />

      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-[#00e89d] transition-colors">
              {project.title}
            </h3>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl border border-[#1a2744] text-gray-500 hover:text-white hover:border-[#00e89d]/30 hover:bg-[#00e89d]/5 transition-all duration-300"
          >
            <Github size={18} />
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Techs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg text-xs font-medium border border-[#1a2744] bg-[#0b1426] text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#00e89d] hover:underline group/link"
        >
          View on GitHub
          <ArrowUpRight
            size={14}
            className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
          />
        </a>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main className="pt-28 pb-20 min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#00e89d]/8 via-[#0ea5e9]/6 to-[#6366f1]/8" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-center"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0ea5e9] mb-4">
              Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-[#00e89d] via-[#0ea5e9] to-[#6366f1] bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Real-world applications built with the MERN stack, TypeScript, and
              modern web technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* More coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-dashed border-[#1a2744] bg-[#0f1a30]/30">
            <div className="w-2 h-2 rounded-full bg-[#00e89d] animate-pulse" />
            <span className="text-sm text-gray-500">
              More projects coming soon...
            </span>
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 p-8 sm:p-12 rounded-2xl border border-[#1a2744] bg-gradient-to-br from-[#0f1a30]/80 to-[#0b1426]/80 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Explore all my work on GitHub
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Check out my repositories for more projects, experiments, and open
            source contributions.
          </p>
          <a
            href="https://github.com/RobynAwesome"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-[#00e89d] text-[#060d18] hover:bg-[#34d399] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00e89d]/20"
          >
            <Github size={18} />
            View GitHub Profile
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </section>
    </main>
  );
}
