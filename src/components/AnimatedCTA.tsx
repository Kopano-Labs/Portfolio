import { motion } from "framer-motion";

function AnimatedCTA() {
  return (
    <motion.section
      id="cta"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 text-center text-white bg-primaryBlue"
    >
      <h3 className="mb-6 text-3xl font-bold">Ready to Collaborate?</h3>
      <a
        href="#contact"
        className="px-6 py-3 transition rounded-lg shadow bg-primaryGreen hover:bg-neutralGray"
      >
        Let’s Talk
      </a>
    </motion.section>
  );
}

export default AnimatedCTA;
