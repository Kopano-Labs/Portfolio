import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Heavy scroll-based parallax for the phone image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [2500, -2500]);
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0],
  );

  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-20">
      {" "}
      {/* Background tilted 15deg to stand out */}
      {/* Background tilted 15deg to stand out */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#00e89d]/30 via-[#0ea5e9]/35 to-[#00e89d]/25"
        style={{
          clipPath: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)",
        }}
      />
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#00e89d]/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#0ea5e9]/20 blur-3xl" />
      <div
        className="relative z-10 mx-auto max-w-5xl px-12 sm:px-20 lg:px-36"
        ref={ref}
      >
        <div className="grid grid-cols-1 items-stretch gap-12 overflow-hidden lg:grid-cols-2">
          {/* Left -- Phone image with HEAVY parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative flex items-center self-stretch overflow-hidden perspective-[1200px]"
          >
            <motion.div
              className="relative h-full w-full"
              style={{ y: imageY, opacity: imageOpacity }}
            >
              <img
                src="/web-image-1.jpg"
                alt="Web development project showcase"
                className="h-full w-full rounded-3xl object-cover object-top shadow-2xl shadow-black/40"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right -- Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10"
          >
            <h2 className="mb-2 text-3xl leading-tight font-black text-white sm:text-4xl md:text-5xl">
              You dream it.
            </h2>
            <h2 className="gradient-text mb-6 text-3xl leading-tight font-black sm:text-4xl md:text-5xl">
              I craft it.
            </h2>

            <p className="mb-6 text-base leading-relaxed text-white sm:text-lg">
              I am a Computer Engineering student at Cape Peninsula University
              of Technology and a Freelance Web Developer specializing in the
              MERN stack. Working primarily with Node.js, MongoDB, JavaScript,
              HTML, and CSS, my focus is on building scalable backend
              architectures, gorgeous frontends and intuitive, user-centered
              designs. Since January 2026, I have been building a comprehensive
              digital platform for 5's Arena associated with Hellenic Football
              club, developing a custom full-stack solution that features a
              community blog and an integrated booking system.
            </p>

            <Link
              to="/resume"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-[#060d18]/60 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#00e89d]/60 hover:bg-[#060d18]/80"
            >
              More about me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
