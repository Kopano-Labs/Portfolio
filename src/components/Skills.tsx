import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    icon: "JS",
    iconColor: "#f7df1e",
    iconBg: "rgba(247,223,30,0.15)",
    category: "JavaScript & TypeScript",
    description:
      "I code in modern ES2024+ JavaScript across all environments. I now use TypeScript for type-safe, maintainable codebases — a requirement for production-grade applications.",
    techs: ["TypeScript", "Node.js", "HTML5", "CSS3"],
    gradient: "from-[#00e89d]/10 via-[#0ea5e9]/15 to-transparent",
  },
  {
    icon: "R",
    iconColor: "#61dafb",
    iconBg: "rgba(97,218,251,0.15)",
    category: "React Ecosystem",
    description:
      "Building component-driven UIs with React 18+, hooks, and the broader ecosystem. From SPAs to SSR with Next.js and Vite for blazing-fast development.",
    techs: ["React", "Next.js", "Vite", "Redux", "Framer Motion"],
    gradient: "from-[#0ea5e9]/10 via-[#6366f1]/15 to-transparent",
  },
  {
    icon: "API",
    iconColor: "#00e89d",
    iconBg: "rgba(0,232,157,0.15)",
    category: "Backend & APIs",
    description:
      "As a Full-Stack Developer, I build robust server-side architectures. From RESTful APIs to database design with MongoDB, I handle the complete backend pipeline.",
    techs: ["Node.js", "Express", "MongoDB", "REST APIs", "Firebase"],
    gradient: "from-[#6366f1]/10 via-[#00e89d]/15 to-transparent",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight">
            Full-Stack <span className="gradient-text">Architect.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-16">
            My experience across the entire MERN stack gives me confidence in the
            technologies & tools I use. Whether you need help bootstrapping your project
            or building production-grade features, I bring both frontend finesse and
            backend backbone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl border border-[#1a2744] overflow-hidden card-hover"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-60`} />
              {/* Large watermark icon */}
              <div className="absolute bottom-4 right-4 opacity-[0.04] text-8xl font-black select-none pointer-events-none">
                {skill.icon === "API" ? (
                  <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.5 2C15.88 2 17 3.12 17 4.5V5H20V8H17V16.5C17 17.88 15.88 19 14.5 19S12 17.88 12 16.5V16H9V19H6V16H3V13H10.5C11.88 13 13 11.88 13 10.5S11.88 8 10.5 8H6V5H9V4.5C9 3.12 10.12 2 11.5 2H14.5Z" />
                  </svg>
                ) : skill.icon === "R" ? (
                  <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="12" cy="5" r="1.5" />
                  </svg>
                ) : (
                  <span>JS</span>
                )}
              </div>

              <div className="relative p-6 sm:p-8 min-h-[320px] flex flex-col">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: skill.iconBg, color: skill.iconColor }}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{skill.category}</h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                  {skill.description}
                </p>

                {/* Tech list */}
                <div className="space-y-1.5">
                  {skill.techs.map((tech) => (
                    <p key={tech} className="text-sm font-semibold text-white/80">
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3"
        >
          {[
            "TailwindCSS",
            "Git & GitHub",
            "Figma",
            "Docker",
            "Vercel",
            "Agile/Scrum",
          ].map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
              className="px-4 py-3 rounded-xl border border-[#1a2744] bg-[#0f1a30]/50 text-center hover:border-[#00e89d]/30 hover:bg-[#00e89d]/5 transition-all duration-300 group"
            >
              <span className="text-xs font-medium text-gray-400 group-hover:text-[#00e89d] transition-colors">
                {tech}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
