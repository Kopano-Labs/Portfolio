function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-screen text-white bg-primaryBlue"
    >
      <h2 className="mb-4 text-4xl font-bold md:text-6xl">Hi, I'm Kholofelo</h2>
      <p className="mb-6 text-lg md:text-2xl">
        Web Developer & Tech Communicator
      </p>
      <a
        href="#projects"
        className="px-6 py-3 transition rounded-lg shadow bg-primaryGreen hover:bg-neutralGray"
      >
        Explore My Work
      </a>
    </section>
  );
}

export default Hero;
