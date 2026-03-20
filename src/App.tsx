import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectFilter from "./components/ProjectFilter";
import CertificatesAnimated from "./components/CertificatesAnimated";
import ExperienceTimeline from "./components/ExperienceTimeline";
import RecruiterCTA from "./components/RecruiterCTA";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import BlogPreview from "./components/BlogPreview";
import AnimatedCTA from "./components/AnimatedCTA";
import TechStack from "./components/TechStack";
import AnimatedDivider from "./components/AnimatedDivider";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-white bg-neutralGray">
      <Navbar />
      <Hero />
      <AnimatedDivider />
      <Skills />
      <Projects />
      <ProjectFilter />
      <CertificatesAnimated />
      <ExperienceTimeline />
      <RecruiterCTA />
      <Testimonials />
      <Stats />
      <BlogPreview />
      <AnimatedCTA />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
