import { motion, AnimatePresence } from "framer-motion";
<<<<<<< HEAD
import { ArrowDown, Copy, Check, ExternalLink, X } from "lucide-react";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";
=======
import { useState } from "react";
>>>>>>> c8e7d9826b7b03d8dab5e4b3b61d0ff789d75d57
import { Link } from "react-router-dom";
import { Copy, Check, ArrowRight } from "lucide-react";

<<<<<<< HEAD
interface SkillBadge {
  label: string;
  sublabel: string;
  description: string;
  repoUrl: string;
  repoName: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay: number;
  color: string;
}

const skillBadges: SkillBadge[] = [
  {
    label: "Web Developer",
    sublabel: "Professional",
    description:
      "Component-driven UIs with React 18+, hooks, state management, and Framer Motion animations. Used across all my projects.",
    repoUrl: "https://github.com/RobynAwesome/Bookit-5s-Arena", // Example repo
    repoName: "Bookit-5s-Arena",
    position: { top: "42%", right: "-18%" },
    delay: 0,
    color: "#0ea5e9",
  },
  {
    label: "MERN Stack",
    sublabel: "Full-Stack",
    description:
      "Building full-stack applications with MongoDB, Express.js, React, and Node.js.",
    repoUrl: "https://github.com/RobynAwesome/5s-Arena-Blog",
    repoName: "5s-Arena-Blog",
    position: { top: "22%", left: "-8%" },
    delay: 0.8,
    color: "#00e89d",
  },
  {
    label: "React & Node.js",
    sublabel: "Core Stack",
    description:
      "Expert in React for dynamic UIs and Node.js for scalable backend services.",
    repoUrl: "https://github.com/RobynAwesome/Bookit-5s-Arena",
    repoName: "Bookit-5s-Arena",
    position: { top: "50%", right: "-14%" },
    delay: 1.6,
    color: "#0ea5e9",
  },
  {
    label: "MongoDB & APIs",
    sublabel: "Backend",
    description:
      "Modern ES2024+, async/await patterns, clean architecture, DOM manipulation, and TypeScript for type safety.",
    repoUrl: "https://github.com/RobynAwesome/Portfolio",
    repoName: "Portfolio",
    position: { top: "72%", left: "5%" },
    delay: 2.4,
    color: "#00e89d",
  },
];

function SkillBadgeComponent({ badge }: { badge: SkillBadge }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setExpanded(true)}
        animate={{ y: [0, badge.delay % 2 === 0 ? -6 : 6, 0] }}
        transition={{
          duration: 5 + badge.delay * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: badge.delay * 0.2,
        }}
        className="absolute rounded-2xl px-7 py-4 cursor-pointer transition-all duration-300 z-10 group text-center min-w-[160px]"
        style={{
          ...badge.position,
          background: `linear-gradient(135deg, rgba(10, 18, 36, 0.85) 0%, rgba(15, 26, 48, 0.75) 100%)`,
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: `2px solid ${badge.color}40`,
          boxShadow: `0 0 25px ${badge.color}12, inset 0 1px 0 0 rgba(255,255,255,0.08), 0 10px 40px rgba(0,0,0,0.5)`,
        }}
        whileHover={{
          scale: 1.08,
          boxShadow: `0 0 35px ${badge.color}35, 0 0 70px ${badge.color}12, inset 0 1px 0 0 rgba(255,255,255,0.12), 0 14px 50px rgba(0,0,0,0.6)`,
        }}
        whileTap={{ scale: 0.96 }}
      >
        {/* Outer glow border */}
        <div
          className="absolute -inset-[2px] rounded-2xl pointer-events-none"
          style={{
            border: `2px solid ${badge.color}25`,
            boxShadow: `0 0 20px ${badge.color}15`,
          }}
        />
        {/* Inner glass border */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            border: `1px solid rgba(255,255,255,0.08)`,
          }}
        />
        {/* Glossy shine */}
        <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

        {/* Small top label */}
        <p className="text-[10px] text-gray-500 tracking-wide relative mb-0.5">
          {badge.sublabel}
        </p>
        {/* Bold main title */}
        <p
          className="text-base font-black relative tracking-wide leading-tight"
          style={{ color: badge.color }}
        >
          {badge.label}
        </p>
      </motion.button>

      {/* Expanded modal overlay */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setExpanded(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#060d18]/80 backdrop-blur-sm" />

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-2xl border border-[#1a2744] bg-[#0f1a30] p-6 shadow-2xl shadow-black/50"
            >
              {/* Close button */}
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-3 right-3 p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={16} />
              </button>

              {/* Gradient accent */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-sm font-bold"
                style={{
                  backgroundColor: `${badge.color}15`,
                  color: badge.color,
                  border: `1px solid ${badge.color}30`,
                }}
              >
                {badge.label.charAt(0)}
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                {badge.label}
              </h3>
              <p
                className="text-xs font-medium mb-3"
                style={{ color: badge.color }}
              >
                {badge.sublabel}
              </p>

              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {badge.description}
              </p>

              {/* Link to repo */}
              <div className="rounded-xl border border-[#1a2744] bg-[#0b1426] p-4">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">
                  See it in action
                </p>
                <a
                  href={badge.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-[#00e89d] hover:text-[#34d399] transition-colors group/link"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {badge.repoName}
                  <ExternalLink
                    size={12}
                    className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
=======
const fadeUp = {
  initial: { opacity: 0, y: 32, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};
>>>>>>> c8e7d9826b7b03d8dab5e4b3b61d0ff789d75d57

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const copyEmail = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col lg:flex-row"
    >
      {/* ── PHOTO — Full-bleed left panel ── */}
      <div className="relative w-full h-[60vh] lg:h-auto lg:w-[48%] xl:w-[46%] 2xl:w-[44%] flex-shrink-0 overflow-hidden">
        {!imgError ? (
          <img
            src="/profile.jpg"
            alt="Kholofelo Robyn Rababalela"
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 15%" }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a36] to-[#060d18]" />
        )}

        {/* Right-edge blend into dark bg */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#060d18]" />
        {/* Bottom blend (mobile) */}
        <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-transparent via-transparent to-[#060d18]" />
        {/* Subtle top darkening so navbar reads */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#060d18]/60 to-transparent" />

      </div>

<<<<<<< HEAD
      <div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 w-full max-w-7xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          {/* Right side -- Text content (now on the right) */}
          <div className="max-w-xl order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              {" "}
              <p className="text-gray-400 text-base mb-4">Hey,</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[0.92] mb-3">
                I'm{" "}
                <span className="gradient-text-green">Kholofelo.</span>
              </h1>
              <p className="text-gray-400 text-lg sm:text-xl mb-1">
                A Full-Stack
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text mb-3">
                MERN Developer.
              </h2>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                filter: "blur(8px)",
              }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-10">
                I build{" "}
                <span className="gradient-text">apps.</span>
              </h3>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(8px)",
              }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#00e89d] px-6 py-3 text-sm font-semibold text-[#060d18] transition-all duration-300 hover:bg-[#34d399] hover:shadow-lg hover:shadow-[#00e89d]/20"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Hire Me
                </Link>
              </motion.div>
              <motion.button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-[#1a2744] text-gray-300 hover:border-[#00e89d]/40 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? (
                  <Check size={16} className="text-[#00e89d]" />
                ) : (
                  <Copy size={16} />
                )}
                {copied ? "Copied!" : "Copy Email"}
              </motion.button>
            </motion.div>
          </div>

          {/* Left side -- Profile photo with concentric circles and floating skill badges (now on the left) */}
          <motion.div
            initial={{ opacity: 0, x: -60, filter: "blur(8px)" }}
            animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="relative hidden lg:flex justify-center items-center order-1 lg:order-2"
          >
            <div
              className="relative flex items-center justify-center"
              style={{ width: "700px", height: "820px" }}
            >
              {/* Rotating conic-gradient ring */}
              <motion.div
                className="absolute inset-[-6px] rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{
                  background:
                    "conic-gradient(#00e89d, #0ea5e9, #6366f1, #00e89d)",
                }}
              />

              {/* Concentric rounded circles behind the person (moox-style) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" // Centered
                // This div is for the concentric circles, not the image itself.
                // The image is inside a separate div below.
                // The size of this div should be relative to the image size,
                // or fixed to create the desired concentric circle effect.
                style={{ width: "660px", height: "660px" }}
              >
                {/* Outermost circle */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "1.5px solid rgba(14, 165, 233, 0.15)",
                  }}
                />
                {/* Second circle */}
                <div
                  className="absolute rounded-full"
                  style={{
                    inset: "50px",
                    border: "1.5px solid rgba(14, 165, 233, 0.20)",
                  }}
                />
                {/* Third circle */}
                <div
                  className="absolute rounded-full"
                  style={{
                    inset: "100px",
                    border: "1.5px solid rgba(0, 232, 157, 0.18)",
                  }}
                />
                {/* Innermost circle */}
                <div
                  className="absolute rounded-full"
                  style={{
                    inset: "150px",
                    border: "1.5px solid rgba(0, 232, 157, 0.22)",
                  }}
                />
              </motion.div>

              {/* Subtle radial glow behind person */}
              <div
                className="absolute rounded-full blur-3xl"
                style={{
                  width: "300px",
                  height: "300px",
                  top: "20%",
                  left: "15%",
                  background:
                    "radial-gradient(circle, rgba(0,232,157,0.18), rgba(0,232,157,0.03), transparent)",
                }}
              />
              <div
                className="absolute rounded-full blur-3xl"
                style={{
                  width: "250px",
                  height: "250px",
                  bottom: "12%",
                  right: "10%",
                  background:
                    "radial-gradient(circle, rgba(14,165,233,0.14), rgba(14,165,233,0.03), transparent)",
                }}
              />

              {/* Profile image */}
              <div className="relative z-[5] flex justify-center items-center">
                {/* Changed from TransparentImage to img and src to profile.jpg */}
                <img
                  src="/profile.jpg"
                  alt="Kholofelo Robyn Rababalela"
                  className="w-[420px] xl:w-[520px] 2xl:w-[600px] object-contain drop-shadow-[0_0_40px_rgba(0,232,157,0.15)]"
                  style={{
                    // Apply bottom mask
                    maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  }}
                />
              </div>

              {/* Clickable floating skill badges */}
              {skillBadges.map((badge) => (
                <SkillBadgeComponent key={badge.label} badge={badge} />
              ))}

              {/* Subtle hint text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={
                  inView
                    ? { opacity: 1 }
                    : {}
                }
                transition={{ delay: 2.5 }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] text-gray-600 whitespace-nowrap"
              >
                Click any badge to explore my skills
              </motion.p>
            </div>
          </motion.div>

          {/* Mobile skill badges -- horizontal scroll */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={
              inView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : {}
            }
            transition={{ delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="lg:hidden flex flex-wrap gap-2 mt-4"
          >
            {skillBadges.map((badge) => (
              <MobileSkillBadge key={badge.label} badge={badge} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={20} className="text-[#00e89d] opacity-40" />
      </motion.div>
    </section>
  );
}

/* Mobile version of skill badge */
function MobileSkillBadge({ badge }: { badge: SkillBadge }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <button
        onClick={() => setExpanded(true)}
        className="px-4 py-2 rounded-full text-xs font-semibold hover:scale-105 transition-all duration-300"
        style={{
          color: badge.color,
          background: "rgba(15, 26, 48, 0.6)",
          border: `2px solid ${badge.color}40`,
          boxShadow: `0 0 12px ${badge.color}10`,
        }}
      >
        {badge.label}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setExpanded(false)}
          >
            <div className="absolute inset-0 bg-[#060d18]/80 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-2xl border border-[#1a2744] bg-[#0f1a30] p-6 shadow-2xl"
            >
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-3 right-3 p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={16} />
              </button>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-sm font-bold"
                style={{
                  backgroundColor: `${badge.color}15`,
                  color: badge.color,
                  border: `1px solid ${badge.color}30`,
                }}
              >
                {badge.label.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                {badge.label}
              </h3>
              <p
                className="text-xs font-medium mb-3"
                style={{ color: badge.color }}
              >
                {badge.sublabel}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {badge.description}
              </p>
              <div className="rounded-xl border border-[#1a2744] bg-[#0b1426] p-4">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">
                  See it in action
                </p>
                <a
                  href={badge.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-[#00e89d] hover:text-[#34d399] transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {badge.repoName}
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }} // Added filter blur for consistency
            >
              <p className="text-gray-400 text-base mb-4">Hey,</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.02] mb-3">
                I'm{" "}
                <span className="gradient-text-green">Kholofelo.</span>
              </h1>
              <p className="text-gray-400 text-lg sm:text-xl mb-1">
                A Full-Stack
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text mb-3">
                MERN Developer.
              </h2>
            </motion.div>
=======
      {/* ── TEXT — Right panel ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-14 xl:px-20 2xl:px-28 pt-8 pb-20 lg:pt-28 lg:pb-16 bg-[#060d18]">
>>>>>>> c8e7d9826b7b03d8dab5e4b3b61d0ff789d75d57

        {/* Ambient glow behind text */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #0ea5e9, transparent)" }} />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full opacity-15 blur-[80px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #00e89d, transparent)" }} />

        <div className="relative max-w-xl xl:max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="font-mono text-[#00e89d] text-xs sm:text-sm tracking-[0.25em] uppercase mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-[#00e89d] inline-block" />
            Full-Stack MERN Developer
          </motion.p>

          {/* Name */}
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="font-black leading-[0.88] tracking-tight text-white mb-1"
            style={{ fontSize: "clamp(2.8rem, 6vw, 6.5rem)" }}
          >
            Kholofelo
          </motion.h1>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}
            className="font-black leading-[0.88] tracking-tight mb-1"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 6.5rem)",
              background: "linear-gradient(135deg, #00e89d 0%, #0ea5e9 60%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Robyn
          </motion.h1>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.85, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
            className="font-black leading-[0.88] tracking-tight text-white mb-8"
            style={{ fontSize: "clamp(2.8rem, 6vw, 6.5rem)" }}
          >
            Rababalela<span className="text-[#00e89d]">.</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="origin-left h-[1px] w-16 mb-8"
            style={{ background: "linear-gradient(90deg, #00e89d, #0ea5e9)" }}
          />

          {/* Description */}
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-md"
          >
            I build scalable, production-grade web applications with the{" "}
            <span className="text-white font-semibold">MERN stack</span> —
            from RESTful APIs to polished, animated frontends.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.36, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-14"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm text-[#060d18] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#00e89d]/25"
              style={{ background: "linear-gradient(135deg, #00e89d, #34d399)" }}
            >
              Hire Me
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm border border-white/10 text-gray-300 hover:border-[#00e89d]/40 hover:text-white transition-all duration-300"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="text-[#00e89d]"
                  >
                    <Check size={16} />
                  </motion.span>
                ) : (
                  <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <Copy size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.44, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-center gap-8 sm:gap-12"
          >
            {[
              { value: "MERN", label: "Core Stack" },
              { value: "React", label: "Frontend" },
              { value: "Node.js", label: "Backend" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-black text-white leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-[11px] text-gray-500 uppercase tracking-widest font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#00e89d] to-transparent" />
        <span className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-mono" style={{ writingMode: "vertical-rl" }}>
          scroll
        </span>
      </motion.div>
    </section>
  );
}
