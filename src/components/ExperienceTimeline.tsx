function ExperienceTimeline() {
  const milestones = [
    { label: "First Website", yearsAgo: 5 },
    { label: "Professional Web Developer", yearsAgo: 3 },
    { label: "React Specialist", yearsAgo: 2 },
    { label: "Open Source Contributor", yearsAgo: 1 },
  ];

  return (
    <section
      id="timeline"
      className="py-20 text-center text-white bg-primaryBlue"
    >
      <h3 className="mb-10 text-3xl font-bold">Experience Timeline</h3>
      <div className="flex flex-col items-center space-y-6">
        {milestones.map((m, i) => (
          <div
            key={i}
            className="w-3/4 p-6 rounded-lg shadow bg-neutralGray md:w-1/2"
          >
            <h4 className="text-xl font-semibold">{m.label}</h4>
            <p>{m.yearsAgo} years ago</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceTimeline;
