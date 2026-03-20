import { useState } from "react";

function ProjectFilter() {
  const [filter, setFilter] = useState("all");

  const projects = [
    { title: "Portfolio Builder", type: "frontend" },
    { title: "API Integration Demo", type: "backend" },
    { title: "Open Source Contribution", type: "open-source" },
  ];

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="project-filter" className="py-20 text-center bg-neutralGray">
      <h3 className="mb-10 text-3xl font-bold text-primaryGreen">
        Filter Projects
      </h3>
      <div className="flex justify-center mb-6 space-x-4">
        {["all", "frontend", "backend", "open-source"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg ${filter === f ? "bg-primaryGreen text-white" : "bg-primaryBlue text-white"} transition`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2">
        {filtered.map((proj) => (
          <div
            key={proj.title}
            className="p-6 text-white rounded-lg shadow bg-primaryBlue"
          >
            {proj.title}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectFilter;
