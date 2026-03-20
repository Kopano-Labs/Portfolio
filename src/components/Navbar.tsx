import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Monitor, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

type Theme = "dark" | "light" | "system";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.className = prefersDark ? "dark" : "light";
    } else {
      root.className = theme;
    }
  }, [theme]);

  const cycleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : t === "light" ? "system" : "dark"));
  };

  const themeIcon =
    theme === "dark" ? <Moon size={18} /> : theme === "light" ? <Sun size={18} /> : <Monitor size={18} />;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
    >
      {/* Outer LED border */}
      <div
        className="rounded-[28px] p-[1px] led-border-outer"
      >
        {/* Inner LED border */}
        <div
          className="rounded-[26px] p-[1px] led-border-inner"
        >
          {/* Main navbar pill */}
          <div
            className={`rounded-[24px] transition-all duration-500 ${
              scrolled ? "shadow-2xl shadow-black/30" : ""
            }`}
            style={{
              background: "rgba(11, 20, 38, 0.85)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
            }}
          >
            <div className="px-5 sm:px-7 h-18 flex items-center justify-between">
              {/* Logo + Name + Status */}
              <Link to="/" className="flex items-center gap-3 group">
                <img
                  src="/web-image-2.JPG"
                  alt="Kholofelo"
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#00e89d]"
                />
                <span className="font-bold text-base text-white group-hover:text-[#00e89d] transition-colors">
                  Kholofelo
                </span>
                <span className="relative flex h-2.5 w-2.5" title="Available for work">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e89d] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00e89d]" />
                </span>
              </Link>

              {/* Desktop right side — social links, theme toggle, CTA */}
              <div className="hidden md:flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/RobynAwesome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <button
                  onClick={cycleTheme}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  aria-label="Toggle theme"
                >
                  {themeIcon}
                </button>
                <Link
                  to="/contact"
                  className="ml-3 px-8 py-3 rounded-full text-lg font-bold bg-[#00e89d] text-[#060d18] hover:bg-[#34ffb0] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#00e89d]/40 hover:shadow-xl hover:shadow-[#00e89d]/50"
                >
                  Let's Talk
                </Link>
              </div>

              {/* Mobile controls */}
              <div className="md:hidden flex items-center gap-2">
                <button onClick={cycleTheme} className="p-2 text-gray-400" aria-label="Toggle theme">
                  {themeIcon}
                </button>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 text-gray-400"
                  aria-label="Menu"
                >
                  {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden border-t border-[#1a2744]"
                >
                  <div className="px-5 py-5 flex flex-col gap-2">
                    <div className="flex items-center gap-3 px-3 pb-3 border-b border-[#1a2744] mb-2">
                      <a
                        href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href="https://github.com/RobynAwesome"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                    <Link
                      to="/contact"
                      onClick={() => setMenuOpen(false)}
                      className="mx-3 px-8 py-3 rounded-full text-lg font-bold bg-[#00e89d] text-[#060d18] text-center hover:bg-[#34ffb0] transition-all duration-300 shadow-lg shadow-[#00e89d]/40 hover:shadow-xl hover:shadow-[#00e89d]/50"
                    >
                      Let's Talk
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
