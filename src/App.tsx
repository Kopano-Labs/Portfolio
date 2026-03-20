import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import OpenSource from "./components/OpenSource";
import Certificates from "./components/Certificates";
import Story from "./components/Story";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <OpenSource />
        <Certificates />
        <Story />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
