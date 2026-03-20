import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectFilter from "./components/ProjectFilter";
import CertificatesAnimated from "./components/CertificatesAnimated";
import ExperienceTimeline from "./components/ExperienceTimeline";
import RecruiterCTA from "./components/RecruiterCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-white bg-neutralGray">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <ProjectFilter />
      <CertificatesAnimated />
      <ExperienceTimeline />
      <RecruiterCTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
