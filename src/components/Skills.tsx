function Skills() {
  const skills = ["React", "Vite", "TailwindCSS", "TypeScript", "GitHub"];
  return (
    <section id="skills" className="py-20 text-center bg-neutralGray">
      <h3 className="mb-10 text-3xl font-bold text-primaryGreen">Skills</h3>
      <div className="grid max-w-4xl grid-cols-2 gap-6 mx-auto md:grid-cols-5">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-6 text-white transition rounded-lg shadow bg-primaryBlue hover:bg-primaryGreen"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
