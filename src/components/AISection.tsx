import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    <section className="relative overflow-hidden py-24 sm:py-32" ref={ref}>
      {/* Dark bg with subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060d18] via-[#0b1426] to-[#060d18]" />
      <div className="dot-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-5xl px-12 sm:px-20 lg:px-36">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}} // Added filter blur for consistency
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-xs font-semibold tracking-widest text-[#0ea5e9] uppercase">
              Next-Gen Workflow
            </p>
            <h2 className="mb-6 text-4xl font-black sm:text-5xl md:text-6xl">
              <span className="gradient-text">AI-Augmented</span>{" "}
              <span className="gradient-text-green">Development.</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-400">
              Artificial Intelligence is reshaping how we build software, and
              I'm embracing it fully. By integrating tools like Claude, GitHub
              Copilot, and cutting-edge LLMs into my workflow, I'm able to
              prototype faster, debug smarter, and write cleaner code. This
              isn't about replacing the craft of development — it's about
              elevating it. AI allows me to focus on what truly matters: the
              details that transform a good app into a great one. The precision,
              the polish, the seamless user experience. Human creativity
              amplified by machine intelligence — that's the future I'm building
              toward.
            </p>
            <motion.a
              href="#"
              className="group inline-flex items-center gap-2 font-semibold text-[#00e89d] transition-colors duration-300 hover:text-[#34d399]"
              whileHover={{ x: 4 }}
            >
              View orch on GitHub
              <svg
                className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1"
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
              <span className="rounded-full border border-[#0ea5e9]/20 bg-[#0ea5e9]/5 px-3 py-1.5 text-xs font-medium text-[#0ea5e9]">
                Claude · GPT · Gemini
              </span>
              <span className="rounded-full border border-[#00e89d]/20 bg-[#00e89d]/5 px-3 py-1.5 text-xs font-medium text-[#00e89d]">
                CLI-powered
              </span>
              <span className="rounded-full border border-[#6366f1]/20 bg-[#6366f1]/5 px-3 py-1.5 text-xs font-medium text-[#6366f1]">
                MCP Protocol
              </span>
            </div>
          </motion.div>

          {/* RIGHT — Morphing circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-center justify-center"
          >
            <img
              src="/web-image-3.png"
              alt="AI Ring"
              className="animate-spin-slow h-[500px] w-[500px] drop-shadow-[0_0_60px_rgba(14,165,233,0.4)]"
              style={{ mixBlendMode: "screen" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
