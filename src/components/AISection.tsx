import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AIPromptCircle from "./AIPromptCircle";

export default function AISection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const circlesConfig = [
    {
      colors: ["#00e89d", "#0ea5e9"],
      radiusRatio: 0.8,
      deformationRatio: 0.2,
      duration: 4000,
    },
    {
      colors: ["#6366f1", "#00e89d"],
      radiusRatio: 0.6,
      deformationRatio: 0.3,
      duration: 5000,
      opacity: 0.8,
    },
    {
      colors: ["#0ea5e9", "#6366f1"],
      radiusRatio: 0.4,
      deformationRatio: 0.4,
      duration: 6000,
      opacity: 0.6,
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      {/* Dark bg with subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060d18] via-[#0b1426] to-[#060d18]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#00e89d]/5 via-[#0ea5e9]/5 to-[#6366f1]/5" />

      <div className="relative max-w-5xl mx-auto px-12 sm:px-20 lg:px-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}} // Added filter blur for consistency
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0ea5e9] mb-3">
              Next-Gen Workflow
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text">AI-Augmented</span>{" "}
              <span className="gradient-text-green">Development.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I built **orch** — a multi-AI collaboration platform that runs
              Claude, GPT, and Gemini in a private group, orchestrating
              coordinated discussions where multiple AIs learn from each other's
              perspectives.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Beyond building AI tools, I integrate Claude into every stage of
              my development workflow — from prototyping and debugging to
              shipping production-grade code. AI amplifies the craft; it doesn't
              replace it.
            </p>
            <motion.a
              href="https://github.com/RobynAwesome/Introduction-to-MCP"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[#00e89d] font-semibold hover:text-[#34d399] transition-colors duration-300 mb-6"
              whileHover={{ x: 4 }}
            >
              View orch on GitHub
              <svg
                className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
            {/* Feature badges */}
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-full text-xs font-medium border border-[#0ea5e9]/20 text-[#0ea5e9] bg-[#0ea5e9]/5">
                Claude · GPT · Gemini
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium border border-[#00e89d]/20 text-[#00e89d] bg-[#00e89d]/5">
                CLI-powered
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium border border-[#6366f1]/20 text-[#6366f1] bg-[#6366f1]/5">
                MCP Protocol
              </span>
            </div>
          </motion.div>

          {/* RIGHT — Spinning ring image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-center justify-center"
          >
            <AIPromptCircle circles={circlesConfig} size={500} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
