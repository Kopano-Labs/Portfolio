import { useEffect, lazy, Suspense } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import FooterNav from "./components/FooterNav";
import Navbar from "./components/Navbar";
import { ThemeModeProvider, useThemeMode } from "./components/theme/ThemeModeProvider";

const HomePage = lazy(() => import("./pages/HomePage"));
const KopanoLabsPage = lazy(() => import("./pages/KopanoLabsPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const OpenSourcePage = lazy(() => import("./pages/OpenSourcePage"));
const RoadmapPage = lazy(() => import("./pages/RoadmapPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AmaPhuEntertainmentPage = lazy(() => import("./pages/AmaPhuEntertainmentPage"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScroll();
    const frameId = window.requestAnimationFrame(resetScroll);
    return () => window.cancelAnimationFrame(frameId);
  }, [pathname]);

  return null;
}

function AppShell() {
  const location = useLocation();
  const { isReadMode } = useThemeMode();

  return (
    <MotionConfig reducedMotion={isReadMode ? "always" : "never"}>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={null}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={isReadMode ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={isReadMode ? { opacity: 0 } : { opacity: 0, y: -14 }}
            transition={{ duration: isReadMode ? 0.15 : 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/kopano-labs" element={<KopanoLabsPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/open-source" element={<OpenSourcePage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/ama-phu-entertainment" element={<AmaPhuEntertainmentPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </Suspense>
      <Footer />
      <FooterNav />
    </MotionConfig>
  );
}

export default function App() {
  return (
    <ThemeModeProvider>
      <AppShell />
    </ThemeModeProvider>
  );
}
