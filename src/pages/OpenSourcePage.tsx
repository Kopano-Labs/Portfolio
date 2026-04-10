import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { useRef, useState } from "react";
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
  ArrowUpRight,
  Heart,
  Cpu,
  Globe,
  BookOpen,
  Layout,
  Sparkles,
} from "lucide-react";
import Certificates from "../components/Certificates";

type ViewMode = "normal" | "crazy" | "redMono";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
};

const MODE_STYLES: Record<ViewMode, { primary: string; bg: string; font: string; label: string }> = {
  normal: { primary: "#00e89d", bg: "#060d18", font: "inherit", label: "Normal" },
  crazy: { primary: "#00f5ff", bg: "#000814", font: "'Orbitron', monospace", label: "CRAZY MODE" },
  redMono: { primary: "#ef4444", bg: "#0d0505", font: "'Roboto Mono', monospace", label: "RED MODE" },
};

const contributions = [
  {
    title: "Bookit — 5's Arena",
    description: "Full-stack booking system for 5-a-side football. Open source with active development.",
    techs: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/RobynAwesome/Bookit-5s-Arena",
    live: "https://fivesarena.com",
    color: "#00e89d",
    gradient: "from-[#00e89d]/25 via-[#00e89d]/10 to-transparent",
    icon: Code2,
  },
  {
    title: "5's Arena Blog",
    description: "Community blog platform with auth, RBAC, and image uploads. Open for contributions.",
    techs: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    github: "https://github.com/RobynAwesome/5s-Arena-Blog",
    live: "https://blog.fivesarena.com",
    color: "#0ea5e9",
    gradient: "from-[#0ea5e9]/25 via-[#0ea5e9]/10 to-transparent",
    icon: GitPullRequest,
  },
  {
    title: "Portfolio Website",
    description: "This portfolio — fully open source. React, TypeScript, TailwindCSS, Framer Motion.",
    techs: ["React", "TypeScript", "TailwindCSS", "Vite", "Framer Motion"],
    github: "https://github.com/RobynAwesome/Portfolio",
    live: "https://kholofelorababalela.vercel.app",
    color: "#a855f7",
    gradient: "from-[#a855f7]/25 via-[#a855f7]/10 to-transparent",
    icon: Star,
  },
  {
    title: "Introduction to MCP",
    description: "Hands-on Model Context Protocol exploration — Python servers wiring Claude to real tools.",
    techs: ["Python", "MCP SDK", "REST API"],
    github: "https://github.com/RobynAwesome/Introduction-to-MCP",
    live: undefined,
    color: "#f97316",
    gradient: "from-[#f97316]/25 via-[#f97316]/10 to-transparent",
    icon: Cpu,
  },
  {
    title: "Harvest 4 All",
    description: "Civic hackathon project — connecting urban farmers with food banks to fight food waste.",
    techs: ["JavaScript", "HTML", "CSS", "REST API"],
    github: "https://github.com/RobynAwesome/Harvest-4-All",
    live: "https://www.cxia4irhack.co.za",
    color: "#f7df1e",
    gradient: "from-[#f7df1e]/25 via-[#f7df1e]/10 to-transparent",
    icon: Globe,
  },
  {
    title: "KasiLink",
    description: "Township business directory — bringing informal economy businesses online.",
    techs: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/RobynAwesome/KasiLink",
    live: undefined,
    color: "#ec4899",
    gradient: "from-[#ec4899]/25 via-[#ec4899]/10 to-transparent",
    icon: BookOpen,
  },
  {
    title: "Cape Campass",
    description: "CPUT campus guide — helping students navigate campus life and find resources.",
    techs: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/RobynAwesome/cape-campass",
    live: undefined,
    color: "#14b8a6",
    gradient: "from-[#14b8a6]/25 via-[#14b8a6]/10 to-transparent",
    icon: Layout,
  },
  {
    title: "Portfolio-MBR",
    description: "Client portfolio build — a polished React + TypeScript site for another developer.",
    techs: ["React", "TypeScript", "TailwindCSS", "Vite", "Framer Motion"],
    github: "https://github.com/RobynAwesome/Portfolio-MBR",
    live: "https://mashoto.vercel.app",
    color: "#8b5cf6",
    gradient: "from-[#8b5cf6]/25 via-[#8b5cf6]/10 to-transparent",
    icon: Sparkles,
  },
];

const achievements = [
  {
    title: "Pull Shark",
    description: "Opened pull requests that have been merged",
    icon: GitMerge,
    color: "#00e89d",
    gradient: "from-[#00e89d]/20 to-[#00e89d]/5",
  },
  {
    title: "YOLO",
    description: "Merged a pull request without code review",
    icon: Zap,
    color: "#f7df1e",
    gradient: "from-[#f7df1e]/20 to-[#f7df1e]/5",
  },
  {
    title: "Pair Extraordinaire",
    description: "Co-authored commits on merged pull requests",
    icon: Users,
    color: "#0ea5e9",
    gradient: "from-[#0ea5e9]/20 to-[#0ea5e9]/5",
  },
];

const hackerRankBadges = [
  { title: "Days of Code", description: "Consistent daily coding streak on HackerRank", icon: Code2, color: "#00e89d", gradient: "from-[#00e89d]/20 to-[#00e89d]/5" },
  { title: "Days of JS", description: "Daily JavaScript challenge streak", icon: Zap, color: "#f7df1e", gradient: "from-[#f7df1e]/20 to-[#f7df1e]/5" },
];

const hackerRankSkills = [
  { name: "Frontend Dev (React)", level: "Role Cert", color: "#61dafb" },
  { name: "React (Basic)", level: "Verified", color: "#61dafb" },
  { name: "Node.js (Basic)", level: "Verified", color: "#00e89d" },
  { name: "CSS (Basic)", level: "Verified", color: "#0ea5e9" },
  { name: "Java (Basic)", level: "Verified", color: "#f97316" },
  { name: "JavaScript", level: "Intermediate", color: "#f7df1e" },
];

function SectionBlock({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}>
      {children}
    </motion.div>
  );
}

export default function OpenSourcePage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [mode, setMode] = useState<ViewMode>("normal");
  const modeStyle = MODE_STYLES[mode];

  return (
    <main
      className="pt-28 pb-20 min-h-screen transition-colors duration-700"
      style={{ background: modeStyle.bg, fontFamily: modeStyle.font }}
    >
      {/* Hero */}
      <section className="relative overflow-hidden" ref={heroRef}>
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: mode === "crazy"
              ? "radial-gradient(ellipse at 50% 50%, rgba(0,245,255,0.18) 0%, transparent 70%)"
              : mode === "redMono"
              ? "radial-gradient(ellipse at 50% 50%, rgba(239,68,68,0.12) 0%, transparent 70%)"
              : "linear-gradient(135deg, rgba(0,232,157,0.1) 0%, rgba(14,165,233,0.08) 50%, rgba(168,85,247,0.1) 100%)"
          }}
        />

        <div className="relative max-w-5xl mx-auto px-12 sm:px-20 lg:px-36 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase mb-6"
              style={{ borderColor: `${modeStyle.primary}50`, background: `${modeStyle.primary}15`, color: modeStyle.primary }}
            >
              <Heart size={12} />
              Community
            </motion.p>

            <h1
              className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 leading-tight transition-all duration-700"
              style={{ fontFamily: modeStyle.font }}
            >
              Open{" "}
              <span style={{
                background: mode === "crazy"
                  ? "linear-gradient(135deg, #00f5ff, #0ea5e9)"
                  : mode === "redMono"
                  ? "linear-gradient(135deg, #ef4444, #dc2626)"
                  : "linear-gradient(135deg, #00e89d, #0ea5e9, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Source
              </span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
              Contributing to the developer community through open source
              projects, collaboration, and knowledge sharing.
            </p>

            {/* Mode toggle buttons */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {(["normal", "crazy", "redMono"] as ViewMode[]).map((m) => {
                const ms = MODE_STYLES[m];
                const active = mode === m;
                return (
                  <motion.button
                    key={m}
                    onClick={() => setMode(m)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    animate={active && m === "crazy" ? {
                      boxShadow: ["0 0 0px #00f5ff00", "0 0 20px #00f5ffaa", "0 0 0px #00f5ff00"],
                    } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="px-4 py-2 rounded-full text-xs font-bold tracking-widest transition-all duration-300"
                    style={{
                      fontFamily: ms.font,
                      background: active ? `${ms.primary}20` : "rgba(255,255,255,0.04)",
                      border: `1px solid ${active ? ms.primary : "rgba(255,255,255,0.1)"}`,
                      color: active ? ms.primary : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {ms.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-12 sm:px-20 lg:px-36 space-y-24">
        {/* Open Source Projects */}
        <SectionBlock>
          <h2
            className="text-2xl sm:text-3xl font-black mb-10 flex items-center gap-3 transition-all duration-700"
            style={{ color: "white", fontFamily: modeStyle.font }}
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${modeStyle.primary}25` }}>
              <GitPullRequest size={22} style={{ color: modeStyle.primary }} />
            </div>
            Open Source Projects
            <span className="ml-2 text-xs font-mono font-normal opacity-50">({contributions.length} repos)</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {contributions.map((item, i) => {
              const displayColor = mode === "crazy" ? "#00f5ff" : mode === "redMono" ? "#ef4444" : item.color;
              return (
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
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative overflow-hidden p-6 rounded-3xl border-2 transition-all duration-500"
                  style={{
                    borderColor: `${displayColor}30`,
                    background: `linear-gradient(135deg, ${displayColor}12, transparent)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${displayColor}60`;
                    e.currentTarget.style.boxShadow = `0 8px 40px ${displayColor}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${displayColor}30`;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-500"
                    style={{ backgroundColor: displayColor }}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${displayColor}18` }}>
                        <item.icon size={18} style={{ color: displayColor }} />
                      </div>
                      <h3 className="text-white font-black text-sm leading-tight" style={{ fontFamily: modeStyle.font }}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.techs.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded-full text-[9px] font-bold" style={{ border: `1px solid ${displayColor}25`, background: `${displayColor}08`, color: displayColor }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: displayColor }}>
                        <Github size={12} />
                        Code
                        <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      {item.live && (
                        <a
                          href={item.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 text-xs font-bold opacity-60 hover:opacity-100 transition-opacity"
                          style={{ color: displayColor }}
                        >
                          <ExternalLink size={11} />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </SectionBlock>

        {/* GitHub Achievements */}
        <SectionBlock delay={0.1}>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10 flex items-center gap-3" style={{ fontFamily: modeStyle.font }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${modeStyle.primary}25` }}>
              <Award size={22} style={{ color: modeStyle.primary }} />
            </div>
            GitHub Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {achievements.map((item, i) => {
              const displayColor = mode === "crazy" ? "#00f5ff" : mode === "redMono" ? "#ef4444" : item.color;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  whileHover={{ y: -8, scale: 1.04 }}
                  animate={mode === "crazy" ? {
                    boxShadow: [
                      `0 0 0px #00f5ff00`,
                      `0 0 30px #00f5ff44`,
                      `0 0 0px #00f5ff00`,
                    ],
                  } : {}}
                  transition={mode === "crazy" ? { duration: 2, repeat: Infinity, delay: i * 0.5 } : {}}
                  className="group relative overflow-hidden p-8 rounded-3xl border-2 text-center cursor-default"
                  style={{ borderColor: `${displayColor}40`, background: `linear-gradient(135deg, ${displayColor}15, transparent)` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${displayColor}80`;
                    e.currentTarget.style.boxShadow = `0 12px 60px ${displayColor}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${displayColor}40`;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity" style={{ backgroundColor: displayColor }} />
                  <div className="relative">
                    <div className="w-[72px] h-[72px] rounded-2xl mx-auto flex items-center justify-center mb-5" style={{ background: `${displayColor}20` }}>
                      <item.icon size={32} style={{ color: displayColor }} />
                    </div>
                    <h3 className="text-white font-black text-xl mb-2" style={{ fontFamily: modeStyle.font }}>{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </SectionBlock>

        {/* HackerRank Badges */}
        <SectionBlock delay={0.1}>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10 flex items-center gap-3" style={{ fontFamily: modeStyle.font }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${modeStyle.primary}25` }}>
              <Award size={22} style={{ color: modeStyle.primary }} />
            </div>
            HackerRank Badges
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {hackerRankBadges.map((item, i) => {
              const displayColor = mode === "crazy" ? "#00f5ff" : mode === "redMono" ? "#ef4444" : item.color;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group relative overflow-hidden p-8 rounded-3xl border-2 text-center"
                  style={{ borderColor: `${displayColor}40`, background: `linear-gradient(135deg, ${displayColor}12, transparent)` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${displayColor}70`;
                    e.currentTarget.style.boxShadow = `0 12px 50px ${displayColor}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${displayColor}40`;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity" style={{ backgroundColor: displayColor }} />
                  <div className="relative">
                    <div className="w-[72px] h-[72px] rounded-2xl mx-auto flex items-center justify-center mb-5" style={{ background: `${displayColor}20` }}>
                      <item.icon size={32} style={{ color: displayColor }} />
                    </div>
                    <h3 className="text-white font-black text-xl mb-2" style={{ fontFamily: modeStyle.font }}>{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </SectionBlock>

        {/* HackerRank Verified Skills */}
        <SectionBlock delay={0.1}>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10 flex items-center gap-3" style={{ fontFamily: modeStyle.font }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${modeStyle.primary}25` }}>
              <Shield size={22} style={{ color: modeStyle.primary }} />
            </div>
            HackerRank Verified Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {hackerRankSkills.map((skill, i) => {
              const displayColor = mode === "crazy" ? "#00f5ff" : mode === "redMono" ? "#ef4444" : skill.color;
              return (
                <motion.div
                  key={skill.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.08}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="p-5 rounded-2xl border-2 text-center transition-all duration-300"
                  style={{ borderColor: `${displayColor}30`, backgroundColor: `${displayColor}08` }}
                >
                  <div className="w-4 h-4 rounded-full mx-auto mb-3 shadow-lg" style={{ backgroundColor: displayColor, boxShadow: `0 0 15px ${displayColor}50` }} />
                  <p className="text-white text-sm font-bold mb-1" style={{ fontFamily: modeStyle.font }}>{skill.name}</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: displayColor }}>{skill.level}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 text-center">
            <motion.a
              href="https://www.hackerrank.com/profile/rkholofelo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold border-2 transition-all duration-300"
              style={{ borderColor: `${modeStyle.primary}40`, color: modeStyle.primary, fontFamily: modeStyle.font }}
            >
              View HackerRank Profile
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </SectionBlock>

        {/* Certificates */}
        <SectionBlock delay={0.1}>
          <Certificates />
        </SectionBlock>

        {/* GitHub CTA */}
        <SectionBlock delay={0.1}>
          <div
            className="relative overflow-hidden p-10 sm:p-14 rounded-3xl border-2 text-center transition-all duration-700"
            style={{ borderColor: `${modeStyle.primary}35`, background: `linear-gradient(135deg, ${modeStyle.primary}10, transparent)` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-3xl" style={{ background: `${modeStyle.primary}08` }} />
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center mb-6" style={{ background: `${modeStyle.primary}20` }}>
                <Github size={36} style={{ color: modeStyle.primary }} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ fontFamily: modeStyle.font }}>
                All{" "}
                <span style={{ color: modeStyle.primary }}>8 repos</span>
                {" "}on GitHub
              </h3>
              <p className="text-gray-400 text-lg max-w-md mx-auto mb-10">
                Check out every project, contribution, and experiment on my GitHub profile.
              </p>
              <AnimatePresence mode="wait">
                <motion.a
                  key={mode}
                  href="https://github.com/RobynAwesome"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-bold transition-all duration-300"
                  style={{
                    background: mode === "crazy"
                      ? "linear-gradient(135deg, #00f5ff, #0ea5e9)"
                      : mode === "redMono"
                      ? "linear-gradient(135deg, #ef4444, #dc2626)"
                      : "linear-gradient(135deg, #00e89d, #34d399)",
                    color: "#060d18",
                    fontFamily: modeStyle.font,
                    boxShadow: `0 8px 40px ${modeStyle.primary}40`,
                  }}
                >
                  <Github size={22} />
                  Visit GitHub Profile
                </motion.a>
              </AnimatePresence>
            </div>
          </div>
        </SectionBlock>
      </div>
    </main>
  );
}
