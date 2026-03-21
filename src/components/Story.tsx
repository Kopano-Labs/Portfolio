import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Story() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-br from-[#00e89d]/30 via-[#0ea5e9]/35 to-[#00e89d]/25">
      <div className="relative max-w-5xl mx-auto px-12 sm:px-20 lg:px-36" ref={ref}>
        {/* Top — Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6 text-white">
            Passionate and{" "}
            <span className="gradient-text">Curious.</span>
          </h2>

          <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
            My journey into tech started with a simple question — how do websites work?
            That curiosity led me from HTML basics to mastering the full MERN stack.
            Today, as a Computer Engineering student at Cape Peninsula University of
            Technology and a Freelance Web Developer, I build technology that fosters
            community engagement and creates meaningful connections.
          </p>

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

        {/* Bottom — LinkedIn feed + Augmented with AI side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left — Augmented with AI (smaller) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex justify-center"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64">
              {/* Rotating rings */}
              <div className="absolute inset-0 rounded-full border-2 border-[#00e89d]/60 animate-spin-slow" />
              <div
                className="absolute inset-3 rounded-full border-2 border-[#0ea5e9]/55 animate-spin-slow"
                style={{ animationDirection: "reverse", animationDuration: "25s" }}
              />
              <div
                className="absolute inset-6 rounded-full border-2 border-[#00e89d]/45 animate-spin-slow"
                style={{ animationDuration: "30s" }}
              />

              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#00e89d]/35 via-[#0ea5e9]/30 to-[#00e89d]/20 blur-xl" />
              </div>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-[#00e89d] to-[#0ea5e9] flex items-center justify-center mb-2">
                    <svg className="w-7 h-7 text-[#060d18]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold text-white">Augmented</p>
                  <p className="text-[10px] text-gray-300">with AI</p>
                </div>
              </div>

              {/* Floating dots */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-[#00e89d]/70"
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

          {/* Right — LinkedIn feed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="rounded-2xl border border-[#0ea5e9]/30 bg-[#0b1426]/60 backdrop-blur-sm overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#0ea5e9]/20">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#0ea5e9]" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#0ea5e9]">
                  Latest from LinkedIn
                </span>
              </div>

              {/* Post cards */}
              <div className="divide-y divide-[#0ea5e9]/10">
                {[
                  {
                    text: "Excited to share my latest project — a full-stack booking system for 5's Arena! Built with React, Node.js, and MongoDB.",
                    time: "2d",
                    likes: 24,
                  },
                  {
                    text: "Just completed my HackerRank JavaScript certification. Always learning, always growing in the MERN ecosystem.",
                    time: "1w",
                    likes: 18,
                  },
                  {
                    text: "Reflecting on my journey from writing my first HTML page to building production-grade full-stack applications.",
                    time: "2w",
                    likes: 31,
                  },
                ].map((post, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 px-4 py-3 hover:bg-white/[0.02] transition-colors"
                  >
                    <img
                      src="/web-image-2.JPG"
                      alt="Profile"
                      className="w-7 h-7 rounded-full object-cover object-top flex-shrink-0 border border-[#0ea5e9]/30"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-white">Kholofelo Robyn</span>
                        <span className="text-[10px] text-gray-500">{post.time}</span>
                      </div>
                      <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2">
                        {post.text}
                      </p>
                      <span className="flex items-center gap-1 mt-1 text-[9px] text-[#0ea5e9]/70">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="currentColor">
                          <path d="M14 9V5a3 3 0 00-6 0v1H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2v-5a2 2 0 00-2-2h-4zm-4-4a1 1 0 012 0v4H10V5z" />
                        </svg>
                        {post.likes}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
