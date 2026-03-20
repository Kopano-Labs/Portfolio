function Stats() {
  const stats = [
    { label: "Projects Completed", value: 12 },
    { label: "Certificates Earned", value: 5 },
    { label: "Years Experience", value: 3 },
  ];

  return (
    <section
      id="stats"
      className="py-20 text-center text-white bg-primaryGreen"
    >
      <h3 className="mb-10 text-3xl font-bold">Quick Stats</h3>
      <div className="flex justify-center space-x-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-4xl font-bold">{s.value}</p>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
