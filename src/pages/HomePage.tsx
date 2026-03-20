import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";
import Story from "../components/Story";
import AISection from "../components/AISection";
import BottomCTA from "../components/BottomCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Story />
      <AISection />
      <BottomCTA />
    </main>
  );
}
