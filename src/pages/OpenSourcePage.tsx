import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Github,
  GitPullRequest,
  GitMerge,
  Star,
  ExternalLink,
  Award,
  Code2,
  Users,
  Zap,
  Shield,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] },
  }),
};

const contributions = [
  {
    title: "Bookit — 5's Arena",
    description:
      "Full-stack booking system for 5-a-side football. Open source with active development and community contributions.",
    techs: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/RobynAwesome/Bookit-5s-Arena",
    color: "#00e89d",
    icon: Code2,
  },
  {
    title: "5's Arena Blog",
    description:
      "Community blog platform with auth, RBAC, and image uploads. Open for contributions and feature requests.",
    techs: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    github: "https://github.com/RobynAwesome/5s-Arena-Blog",
    color: "#0ea5e9",
    icon: GitPullRequest,
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio — fully open source. Built with React, TypeScript, TailwindCSS, and Framer Motion.",
    techs: ["React", "TypeScript", "TailwindCSS", "Vite", "Framer Motion"],
    github: "https://github.com/RobynAwesome/Portfolio",
    color: "#6366f1",
    icon: Star,
  },
];

const achievements = [
  {
    title: "Pull Shark",
    description: "Opened pull requests that have been merged",
    icon: GitMerge,
    color: "#00e89d",
  },
  {
    title: "YOLO",
    description: "Merged a pull request without code review",
    icon: Zap,
    color: "#eab308",
  },
  {
    title: "Pair Extraordinaire",
    description: "Co-authored commits on merged pull requests",
    icon: Users,
    color: "#0ea5e9",
  },
];

const hackerRankSkills = [
  { name: "Problem Solving", level: "Verified", color: "#00e89d" },
  { name: "JavaScript", level: "Verified", color: "#eab308" },
  { name: "React", level: "Verified", color: "#0ea5e9" },
  { name: "Node.js", level: "Verified", color: "#00e89d" },
  { name: "CSS", level: "Verified", color: "#6366f1" },
  { name: "SQL", level: "Verified", color: "#0ea5e9" },
];

function SectionBlock({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function OpenSourcePage() {
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
            <p className="text-xs font-semibold tracking-widest uppercase text-[#00e89d] mb-4">
              Community
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">
              Open{" "}
              <span className="bg-gradient-to-r from-[#00e89d] via-[#0ea5e9] to-[#6366f1] bg-clip-text text-transparent">
                Source
              </span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Contributing to the developer community through open source
              projects, collaboration, and knowledge sharing.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* Contributions */}
        <SectionBlock>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00e89d]/10 flex items-center justify-center">
              <GitPullRequest size={20} className="text-[#00e89d]" />
            </div>
            Open Source Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {contributions.map((item, i) => (
              <motion.a
                key={item.title}
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group p-6 rounded-2xl border border-[#1a2744] bg-[#0f1a30]/50 hover:border-opacity-50 transition-all duration-500 hover:shadow-lg"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = `${item.color}40`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#1a2744")
                }
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>
                  <h3 className="text-white font-bold group-hover:text-[#00e89d] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium border border-[#1a2744] bg-[#0b1426] text-gray-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-[#00e89d] font-semibold">
                  <Github size={14} />
                  View Repository
                  <ExternalLink size={12} className="ml-auto" />
                </div>
              </motion.a>
            ))}
          </div>
        </SectionBlock>

        {/* GitHub Achievements */}
        <SectionBlock delay={0.1}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0ea5e9]/10 flex items-center justify-center">
              <Award size={20} className="text-[#0ea5e9]" />
            </div>
            GitHub Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group p-6 rounded-2xl border border-[#1a2744] bg-[#0f1a30]/50 text-center hover:border-opacity-50 transition-all duration-500"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = `${item.color}40`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#1a2744")
                }
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon size={28} style={{ color: item.color }} />
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionBlock>

        {/* HackerRank Skills */}
        <SectionBlock delay={0.1}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#6366f1]/10 flex items-center justify-center">
              <Shield size={20} className="text-[#6366f1]" />
            </div>
            HackerRank Verified Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {hackerRankSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.08}
                className="p-4 rounded-2xl border border-[#1a2744] bg-[#0f1a30]/50 text-center hover:border-[#00e89d]/30 transition-all duration-300"
              >
                <div
                  className="w-3 h-3 rounded-full mx-auto mb-3"
                  style={{ backgroundColor: skill.color }}
                />
                <p className="text-white text-sm font-semibold mb-1">
                  {skill.name}
                </p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">
                  {skill.level}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.hackerrank.com/profile/rkholofelo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-[#00e89d]/30 text-[#00e89d] hover:bg-[#00e89d]/5 transition-all duration-300"
            >
              View HackerRank Profile
              <ExternalLink size={14} />
            </a>
          </div>
        </SectionBlock>

        {/* GitHub Activity Placeholder */}
        <SectionBlock delay={0.1}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00e89d]/10 flex items-center justify-center">
              <Github size={20} className="text-[#00e89d]" />
            </div>
            GitHub Activity
          </h2>
          <div className="p-8 sm:p-12 rounded-2xl border border-dashed border-[#1a2744] bg-[#0f1a30]/30 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#00e89d]/10 mx-auto flex items-center justify-center mb-4">
              <Github size={28} className="text-[#00e89d]" />
            </div>
            <h3 className="text-white font-bold mb-2">
              Contribution Graph Coming Soon
            </h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
              GitHub contribution graph and activity feed integration is in
              progress. Stay tuned!
            </p>
            <a
              href="https://github.com/RobynAwesome"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#00e89d] text-[#060d18] hover:bg-[#34d399] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00e89d]/20"
            >
              <Github size={16} />
              Visit GitHub Profile
            </a>
          </div>
        </SectionBlock>
      </div>
    </main>
  );
}
