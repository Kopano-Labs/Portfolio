import FadeIn from "./FadeIn";

function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-screen px-4 text-center bg-primaryBlue"
    >
      <FadeIn>
        <h2 className="mb-4 text-3xl font-bold md:text-6xl">
          Hi, I'm Kholofelo
        </h2>
      </FadeIn>
      <FadeIn>
        <p className="mb-6 text-md md:text-2xl">
          Web Developer & Tech Communicator
        </p>
      </FadeIn>
      <FadeIn>
        <a
          href="#projects"
          className="px-6 py-3 transition rounded-lg shadow bg-primaryGreen hover:bg-neutralGray"
        >
          Explore My Work
        </a>
      </FadeIn>
    </section>
  );
}

export default Hero;
