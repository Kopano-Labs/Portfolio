function Projects() {
  const projects = [
    {
      title: "Portfolio Builder",
      desc: "Recruiter-friendly showcase built with React + TailwindCSS",
      link: "#",
    },
    {
      title: "Open Source Contributions",
      desc: "Collaborative coding projects on GitHub",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 text-center bg-primaryGreen">
      <h3 className="mb-10 text-3xl font-bold text-white">Projects</h3>
      <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="p-6 text-white transition rounded-lg shadow bg-neutralGray hover:bg-primaryBlue"
          >
            <h4 className="mb-2 text-xl font-semibold">{proj.title}</h4>
            <p className="mb-4">{proj.desc}</p>
            <a
              href={proj.link}
              className="text-primaryGreen hover:text-primaryBlue"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
