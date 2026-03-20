import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-br from-[#00e89d]/30 via-[#0ea5e9]/35 to-[#00e89d]/25"
    >
      <div className="max-w-7xl mx-auto px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left -- Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2 text-white">
              You dream it.
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight gradient-text mb-8">
              I craft it.
            </h2>

            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8">
              I am a Computer Engineering student at Cape Peninsula University of Technology
              and a Freelance Web Developer specializing in the MERN stack. Working primarily
              with Node.js, MongoDB, JavaScript, HTML, and CSS, my focus is on building scalable
              backend architectures, gorgeous frontends and intuitive, user-centered designs.
              Since January 2026, I have been building a comprehensive digital platform for
              5's Arena associated with Hellenic Football club, developing a custom full-stack
              solution that features a community blog and an integrated booking system.
            </p>

            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-sm font-semibold text-white hover:border-[#00e89d]/60 hover:bg-white/5 transition-all duration-300"
            >
              More about me
            </Link>
          </motion.div>

          {/* Right -- Web image with mix-blend-mode screen */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex justify-center"
          >
            <img
              src="/web-image-1.jpg"
              alt="Web development project showcase"
              className="w-full max-w-lg rounded-2xl"
              style={{ mixBlendMode: "screen" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
