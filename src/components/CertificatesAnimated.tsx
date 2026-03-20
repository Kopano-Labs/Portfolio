import { motion } from "framer-motion";

function CertificatesAnimated() {
  const certificates = [
    { name: "Frontend Development Certificate", year: "2024" },
    { name: "React Advanced Workshop", year: "2025" },
  ];

  return (
    <section
      id="certificates"
      className="py-20 text-center text-white bg-primaryGreen"
    >
      <h3 className="mb-10 text-3xl font-bold">Certificates</h3>
      <div className="max-w-3xl mx-auto space-y-6">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.3 }}
            className="p-6 rounded-lg shadow bg-neutralGray"
          >
            <h4 className="text-xl font-semibold">{cert.name}</h4>
            <p>{cert.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default CertificatesAnimated;
