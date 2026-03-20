import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import MoreAboutMe from "./components/MoreAboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Projects />
        <Certificates />
        <MoreAboutMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
