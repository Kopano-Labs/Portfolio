function Certificates() {
  const certificates = [
    { name: "Frontend Development Certificate", year: "2024" },
    { name: "React Advanced Workshop", year: "2025" },
  ];

  return (
    <section id="certificates" className="py-20 text-center bg-primaryBlue">
      <h3 className="mb-10 text-3xl font-bold text-white">Certificates</h3>
      <ul className="max-w-3xl mx-auto space-y-6">
        {certificates.map((cert) => (
          <li
            key={cert.name}
            className="p-6 text-white transition rounded-lg shadow bg-neutralGray hover:bg-primaryGreen"
          >
            <h4 className="text-xl font-semibold">{cert.name}</h4>
            <p>{cert.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certificates;
