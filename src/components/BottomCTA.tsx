import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function BottomCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-28 sm:py-36 overflow-hidden"
      ref={ref}
      style={{
        backgroundImage: "url('/web-image-4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top/bottom fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060d18] via-transparent to-[#060d18]" />
      {/* Green/blue tint overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00e89d]/20 via-[#0ea5e9]/15 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Avatar with green glow - offset to the left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative flex-shrink-0 self-start lg:self-center"
        >
          {/* Green fill/glow behind circle */}
          <div className="absolute inset-0 rounded-full bg-[#00e89d] blur-2xl scale-125 opacity-40" />
          <div className="absolute inset-0 rounded-full bg-[#00e89d] scale-110" />
          <img
            src="/web-image-2.JPG"
            alt="Avatar"
            className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover object-top border-4 border-white"
            style={{ mixBlendMode: "screen" }}
          />
        </motion.div>

        {/* Content - heading + buttons */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12"
          >
            Let's Build Something{" "}
            <span className="gradient-text">Amazing</span>
          </motion.h2>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-5"
          >
            <motion.div
              whileHover={{ scale: 1.07, boxShadow: "0 10px 40px rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full"
            >
              <Link
                to="/resume"
                className="inline-block px-12 py-6 text-xl font-bold rounded-full border-2 border-white text-white hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
              >
                More about me
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.07, boxShadow: "0 10px 40px rgba(0,232,157,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full"
            >
              <Link
                to="/contact"
                className="inline-block px-12 py-6 text-xl font-bold rounded-full bg-[#00e89d] text-[#060d18] hover:bg-[#34d399] transition-all duration-300 hover:shadow-lg hover:shadow-[#00e89d]/30"
              >
                Hire me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
