import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Download,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  Github,
  Linkedin,
  Code2,
  Globe,
  Heart,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] },
  }),
};

const skills = [
  { name: "React", color: "#0ea5e9" },
  { name: "Node.js", color: "#00e89d" },
  { name: "Express", color: "#00e89d" },
  { name: "MongoDB", color: "#00e89d" },
  { name: "JavaScript", color: "#eab308" },
  { name: "TypeScript", color: "#0ea5e9" },
  { name: "TailwindCSS", color: "#0ea5e9" },
  { name: "HTML5", color: "#f97316" },
  { name: "CSS3", color: "#0ea5e9" },
  { name: "Git", color: "#f97316" },
  { name: "Figma", color: "#6366f1" },
  { name: "Docker", color: "#0ea5e9" },
  { name: "Vite", color: "#6366f1" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Framer Motion", color: "#6366f1" },
  { name: "REST APIs", color: "#00e89d" },
  { name: "Firebase", color: "#eab308" },
  { name: "Vercel", color: "#ffffff" },
  { name: "Agile/Scrum", color: "#0ea5e9" },
];

const certificates = [
  {
    title: "AI Fluency",
    issuer: "Anthropic / Skilljar",
    color: "#00e89d",
  },
  {
    title: "Skill Certificate",
    issuer: "HackerRank",
    color: "#0ea5e9",
  },
  {
    title: "Level 5 Achievement",
    issuer: "HackerRank",
    color: "#6366f1",
  },
];

const links = [
  {
    label: "GitHub",
    href: "https://github.com/RobynAwesome",
    icon: Github,
    color: "#ffffff",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/",
    icon: Linkedin,
    color: "#0ea5e9",
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/rkholofelo",
    icon: Code2,
    color: "#00e89d",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0000-3995-6147",
    icon: Globe,
    color: "#a3e635",
  },
  {
    label: "PayPal",
    href: "https://paypal.me/osheenviews",
    icon: Heart,
    color: "#0ea5e9",
  },
  {
    label: "Ko-fi",
    href: "https://ko-fi.com/robynawesome",
    icon: Heart,
    color: "#f97316",
  },
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
      transition={{
        duration: 0.7,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function ResumePage() {
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
              Curriculum Vitae
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-[#00e89d] via-[#0ea5e9] to-[#6366f1] bg-clip-text text-transparent">
                Resume
              </span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-4">
              Kholofelo Robyn Rababalela
            </p>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-2">
              Freelance Web Developer @ 5's Arena | Bachelor of Computer
              Engineering (Student) | Full-Stack MERN Developer
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-8">
              <MapPin size={14} />
              <span>Cape Town, Western Cape, South Africa</span>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#00e89d] text-[#060d18] hover:bg-[#34d399] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00e89d]/20"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* Summary */}
        <SectionBlock>
          <div className="p-8 rounded-2xl border border-[#1a2744] bg-[#0f1a30]/50">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00e89d]/10 flex items-center justify-center">
                <Briefcase size={20} className="text-[#00e89d]" />
              </div>
              Summary
            </h2>
            <p className="text-gray-400 leading-relaxed">
              I am deeply passionate about leveraging full-stack development to
              build technology that fosters community engagement and creates
              meaningful connections. Currently pursuing a Bachelor of
              Engineering Technology in Computer Engineering at CPUT while
              working as a Freelance Web Developer building full-stack solutions
              for 5's Arena. Proficient in the MERN stack (MongoDB, Express,
              React, Node.js) with additional expertise in TypeScript,
              TailwindCSS, and modern developer tools. AI-fluency certified by
              Anthropic, integrating AI-augmented workflows to accelerate
              development and deliver polished, production-ready applications.
            </p>
          </div>
        </SectionBlock>

        {/* Experience Timeline */}
        <SectionBlock delay={0.1}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0ea5e9]/10 flex items-center justify-center">
              <Briefcase size={20} className="text-[#0ea5e9]" />
            </div>
            Experience
          </h2>
          <div className="relative pl-8 border-l-2 border-[#1a2744]">
            {/* Timeline dot */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#00e89d] border-4 border-[#060d18]" />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="p-6 rounded-2xl border border-[#1a2744] bg-[#0f1a30]/50 mb-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Freelance Web Developer
                  </h3>
                  <p className="text-[#00e89d] font-semibold text-sm">
                    5's Arena
                  </p>
                </div>
                <span className="text-xs text-gray-500 mt-1 sm:mt-0 px-3 py-1 rounded-full border border-[#1a2744] bg-[#0b1426]">
                  Jan 2026 — Present
                </span>
              </div>
              <ul className="text-gray-400 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e89d] mt-1.5 flex-shrink-0" />
                  Building a full-stack booking and management system for a
                  5-a-side football venue
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e89d] mt-1.5 flex-shrink-0" />
                  Developing a community blog platform with authentication,
                  RBAC, and image uploads
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e89d] mt-1.5 flex-shrink-0" />
                  Full MERN stack: React, Node.js, Express, MongoDB with
                  TailwindCSS
                </li>
              </ul>
            </motion.div>
          </div>
        </SectionBlock>

        {/* Education Timeline */}
        <SectionBlock delay={0.1}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#6366f1]/10 flex items-center justify-center">
              <GraduationCap size={20} className="text-[#6366f1]" />
            </div>
            Education
          </h2>
          <div className="relative pl-8 border-l-2 border-[#1a2744]">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#6366f1] border-4 border-[#060d18]" />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="p-6 rounded-2xl border border-[#1a2744] bg-[#0f1a30]/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Bachelor of Eng Tech — Computer Engineering
                  </h3>
                  <p className="text-[#6366f1] font-semibold text-sm">
                    Cape Peninsula University of Technology (CPUT)
                  </p>
                </div>
                <span className="text-xs text-gray-500 mt-1 sm:mt-0 px-3 py-1 rounded-full border border-[#1a2744] bg-[#0b1426]">
                  2025 — Present
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Studying computer engineering with a focus on software
                development, embedded systems, and full-stack web technologies.
              </p>
            </motion.div>
          </div>
        </SectionBlock>

        {/* Skills Grid */}
        <SectionBlock delay={0.1}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00e89d]/10 flex items-center justify-center">
              <Code2 size={20} className="text-[#00e89d]" />
            </div>
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.05}
                className="px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: `${skill.color}30`,
                  backgroundColor: `${skill.color}08`,
                  color: skill.color,
                }}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </SectionBlock>

        {/* Certificates */}
        <SectionBlock delay={0.1}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0ea5e9]/10 flex items-center justify-center">
              <Award size={20} className="text-[#0ea5e9]" />
            </div>
            Certificates & Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group p-6 rounded-2xl border border-[#1a2744] bg-[#0f1a30]/50 hover:border-opacity-50 transition-all duration-500 hover:shadow-lg"
                style={{
                  ["--hover-border" as string]: `${cert.color}40`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = `${cert.color}40`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#1a2744")
                }
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${cert.color}15` }}
                >
                  <Award size={24} style={{ color: cert.color }} />
                </div>
                <h3 className="text-white font-bold mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-500">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </SectionBlock>

        {/* Links */}
        <SectionBlock delay={0.1}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#6366f1]/10 flex items-center justify-center">
              <ExternalLink size={20} className="text-[#6366f1]" />
            </div>
            Links & Profiles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="group flex items-center gap-4 p-4 rounded-2xl border border-[#1a2744] bg-[#0f1a30]/50 hover:border-[#00e89d]/30 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${link.color}15` }}
                >
                  <link.icon size={18} style={{ color: link.color }} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm group-hover:text-[#00e89d] transition-colors">
                    {link.label}
                  </p>
                  <p className="text-xs text-gray-600 truncate max-w-[200px]">
                    {link.href}
                  </p>
                </div>
                <ExternalLink
                  size={14}
                  className="ml-auto text-gray-600 group-hover:text-[#00e89d] transition-colors"
                />
              </motion.a>
            ))}
          </div>
        </SectionBlock>
      </div>
    </main>
  );
}
