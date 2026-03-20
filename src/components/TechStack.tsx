function TechStack() {
  const stack = ["React", "Vite", "TailwindCSS", "TypeScript", "GitHub"];

  return (
    <section
      id="techstack"
      className="py-20 text-center text-white bg-primaryGreen"
    >
      <h3 className="mb-10 text-3xl font-bold">Tech Stack</h3>
      <div className="flex justify-center space-x-6">
        {stack.map((tech) => (
          <div
            key={tech}
            className="px-6 py-3 rounded-lg shadow bg-neutralGray"
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
