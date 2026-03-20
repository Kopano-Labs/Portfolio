import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Story() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-[#00e89d]/30 via-[#0ea5e9]/35 to-[#00e89d]/25">
      <div className="relative max-w-7xl mx-auto px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-8 text-white">
              Passionate and{" "}
              <span className="gradient-text">Curious.</span>
            </h2>

            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8">
              My journey into tech started with a simple question — how do websites work?
              That curiosity led me from HTML basics to mastering the full MERN stack.
              Today, as a Computer Engineering student at Cape Peninsula University of
              Technology and a Freelance Web Developer, I build technology that fosters
              community engagement and creates meaningful connections. Since January 2026,
              I've been architecting a comprehensive digital platform for 5's Arena,
              developing full-stack solutions with community blogs and integrated booking
              systems. Every line of code I write is fueled by the same passion that sparked
              my very first webpage — the drive to create something that matters.
            </p>

            {/* LinkedIn posts placeholder */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-[#0ea5e9] mb-4">
                Latest from LinkedIn
              </h3>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
                  >
                    {/* Profile pic placeholder */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00e89d]/50 to-[#0ea5e9]/50 flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">Kholofelo Robyn</span>
                        <div className="h-2 w-12 rounded bg-gray-400/30" />
                      </div>
                      <div className="h-2 w-full rounded bg-gray-400/25" />
                      <div className="h-2 w-3/4 rounded bg-gray-400/20" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-sm font-semibold text-white hover:bg-white/10 hover:border-[#00e89d]/40 transition-all duration-300"
            >
              Discover my story
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Right — Decorative rotating rings */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Rotating rings — bright and visible */}
              <div className="absolute inset-0 rounded-full border-2 border-[#00e89d]/60 animate-spin-slow" />
              <div
                className="absolute inset-4 rounded-full border-2 border-[#0ea5e9]/55 animate-spin-slow"
                style={{ animationDirection: "reverse", animationDuration: "25s" }}
              />
              <div
                className="absolute inset-8 rounded-full border-2 border-[#00e89d]/45 animate-spin-slow"
                style={{ animationDuration: "30s" }}
              />
              <div
                className="absolute inset-12 rounded-full border-2 border-[#0ea5e9]/40 animate-spin-slow"
                style={{ animationDirection: "reverse", animationDuration: "35s" }}
              />

              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-gradient-to-br from-[#00e89d]/35 via-[#0ea5e9]/30 to-[#00e89d]/20 blur-xl" />
              </div>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#00e89d] to-[#0ea5e9] flex items-center justify-center mb-3">
                    <svg className="w-10 h-10 text-[#060d18]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-white">Augmented</p>
                  <p className="text-xs text-gray-300">with AI</p>
                </div>
              </div>

              {/* Floating dots — brighter */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-[#00e89d]/70"
                  style={{
                    top: `${15 + Math.sin((i * Math.PI) / 3) * 40}%`,
                    left: `${50 + Math.cos((i * Math.PI) / 3) * 40}%`,
                  }}
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.3, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
