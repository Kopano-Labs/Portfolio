function Testimonials() {
  const feedback = [
    {
      name: "Recruiter A",
      text: "Kholofelo builds clean, scalable interfaces.",
    },
    { name: "Collaborator B", text: "Great communicator and team player." },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 text-center text-white bg-primaryBlue"
    >
      <h3 className="mb-10 text-3xl font-bold">What People Say</h3>
      <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2">
        {feedback.map((f) => (
          <div key={f.name} className="p-6 rounded-lg shadow bg-neutralGray">
            <p className="mb-4 italic">"{f.text}"</p>
            <h4 className="font-semibold">{f.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
