function BlogPreview() {
  const posts = [
    { title: "Optimizing React Apps", date: "Feb 2026" },
    { title: "TailwindCSS Tips", date: "Jan 2026" },
  ];

  return (
    <section id="blog" className="py-20 text-center bg-neutralGray">
      <h3 className="mb-10 text-3xl font-bold text-primaryGreen">
        Latest Posts
      </h3>
      <div className="max-w-3xl mx-auto space-y-6">
        {posts.map((p) => (
          <div
            key={p.title}
            className="p-6 text-white rounded-lg shadow bg-primaryBlue"
          >
            <h4 className="text-xl font-semibold">{p.title}</h4>
            <p>{p.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogPreview;
