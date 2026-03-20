import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterNav from "./components/FooterNav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";
import OpenSourcePage from "./pages/OpenSourcePage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/open-source" element={<OpenSourcePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <FooterNav />
    </>
  );
}
