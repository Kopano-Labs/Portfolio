function Contact() {
  return (
    <section id="contact" className="py-20 text-center bg-neutralGray">
      <h3 className="mb-10 text-3xl font-bold text-primaryGreen">
        Get in Touch
      </h3>
      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded focus:outline-primaryGreen"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded focus:outline-primaryGreen"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded focus:outline-primaryGreen"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 transition rounded-lg shadow bg-primaryGreen hover:bg-primaryBlue"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
