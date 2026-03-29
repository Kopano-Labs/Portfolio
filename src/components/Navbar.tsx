import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, FileText, FolderOpen, Globe, Mail,
  Sun, Moon, Monitor, Github, Linkedin, Menu, X
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type Theme = "dark" | "light" | "system";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/resume", label: "Resume", icon: FileText },
  { to: "/projects", label: "Projects", icon: FolderOpen },
  { to: "/open-source", label: "Open Source", icon: Globe },
  { to: "/contact", label: "Contact", icon: Mail },
];

function NavIcon({ icon: Icon, active, onClick }: {
  icon: typeof Home;
  active: boolean;
  onClick?: () => void;
}) {
  const [rolling, setRolling] = useState(false);

  const handleClick = () => {
    setRolling(true);
    setTimeout(() => setRolling(false), 500);
    onClick?.();
  };

  return (
    <motion.div
      onClick={handleClick}
      className="cursor-pointer"
      animate={rolling ? { rotate: 360 } : { rotate: 0 }}
      transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
    >
      <Icon
        size={16}
        className={`transition-colors duration-200 ${
          active ? "text-[#00e89d]" : "text-gray-500 group-hover:text-white"
        }`}
      />
    </motion.div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      // Only hide on homepage
      if (isHomepage) setHidden(y < 80);
    };
    // init state
    setScrolled(window.scrollY > 50);
    setHidden(isHomepage && window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomepage]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "system") {
<<<<<<< HEAD
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      root.className = prefersDark ? "dark" : "light";
=======
      root.className = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
>>>>>>> c8e7d9826b7b03d8dab5e4b3b61d0ff789d75d57
    } else {
      root.className = theme;
    }
  }, [theme]);

<<<<<<< HEAD
  const cycleTheme = () => {
    setTheme((t) =>
      t === "dark" ? "light" : t === "light" ? "system" : "dark",
    );
  };

  const themeIcon =
    theme === "dark" ? (
      <Moon size={18} />
    ) : theme === "light" ? (
      <Sun size={18} />
    ) : (
      <Monitor size={18} />
    );
=======
  const cycleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : t === "light" ? "system" : "dark"));

  const themeIcon =
    theme === "dark" ? <Moon size={16} /> :
    theme === "light" ? <Sun size={16} /> :
    <Monitor size={16} />;
>>>>>>> c8e7d9826b7b03d8dab5e4b3b61d0ff789d75d57

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl xl:max-w-7xl"
    >
<<<<<<< HEAD
      {/* Outer LED border */}
      <div className="rounded-[28px] p-[1px] led-border-outer">
        {/* Inner LED border */}
        <div className="rounded-[26px] p-[1px] led-border-inner">
          {/* Main navbar pill */}
=======
      <div
        className={`rounded-[28px] p-[1px] transition-all duration-500 ${
          scrolled ? "led-border-outer" : ""
        }`}
      >
        <div
          className={`rounded-[26px] p-[1px] transition-all duration-500 ${
            scrolled ? "led-border-inner" : ""
          }`}
        >
>>>>>>> c8e7d9826b7b03d8dab5e4b3b61d0ff789d75d57
          <div
            className="rounded-[24px] transition-all duration-500"
            style={{
              background: scrolled
                ? "rgba(11, 20, 38, 0.92)"
                : "rgba(11, 20, 38, 0.25)",
              backdropFilter: scrolled ? "blur(28px) saturate(200%)" : "blur(8px)",
              WebkitBackdropFilter: scrolled ? "blur(28px) saturate(200%)" : "blur(8px)",
              boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.4)" : "none",
            }}
          >
            <div className="px-5 xl:px-8 h-[60px] xl:h-[66px] flex items-center justify-between gap-4">

              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
                <div className="relative">
                  <img
                    src="/web-image-2.JPG"
                    alt="Kholofelo"
                    className="w-9 h-9 xl:w-10 xl:h-10 rounded-full object-cover border-2 border-[#00e89d]/60 group-hover:border-[#00e89d] transition-colors"
                    style={{ objectPosition: "center top" }}
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e89d] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00e89d]" />
                  </span>
                </div>
                <span className="font-bold text-sm xl:text-base text-white group-hover:text-[#00e89d] transition-colors hidden sm:block">
                  Kholofelo
                </span>
<<<<<<< HEAD
                <span
                  className="relative flex h-2.5 w-2.5"
                  title="Available for work"
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e89d] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00e89d]" />
                </span>
              </Link>

              {/* Center — Nav links */}
              <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
                {[
                  { to: "/", label: "Home" },
                  { to: "/resume", label: "Resume" },
                  { to: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    onClick={() => window.scrollTo(0, 0)}
                    to={link.to}
                    className="px-4 py-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Right side — social, theme, CTA */}
              <div className="hidden md:flex items-center gap-1">
                <motion.a
                  href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b7/"
=======
              </Link>

              {/* Center nav — desktop */}
              <div className="hidden md:flex items-center gap-0.5 xl:gap-1 absolute left-1/2 -translate-x-1/2">
                {navLinks.map((link) => {
                  const active = isActive(link.to);
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="group relative flex items-center gap-2 px-3 xl:px-4 py-2 rounded-xl transition-all duration-200"
                    >
                      {/* Hover / active pill background */}
                      {active && (
                        <motion.div
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-xl"
                          style={{ background: "rgba(0,232,157,0.1)", border: "1px solid rgba(0,232,157,0.2)" }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ background: "rgba(255,255,255,0.04)" }} />

                      {/* Icon with roll on click */}
                      <NavIcon icon={Icon} active={active} />

                      <span className={`relative text-xs xl:text-sm font-semibold transition-colors duration-200 ${
                        active ? "text-[#00e89d]" : "text-gray-400 group-hover:text-white"
                      }`}>
                        {link.label}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* Right controls */}
              <div className="hidden md:flex items-center gap-1 flex-shrink-0">
                <a
                  href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/"
>>>>>>> c8e7d9826b7b03d8dab5e4b3b61d0ff789d75d57
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all"
                  aria-label="LinkedIn"
                  whileHover={{ y: -2 }}
                >
<<<<<<< HEAD
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
=======
                  <Linkedin size={16} />
                </a>
                <a
>>>>>>> c8e7d9826b7b03d8dab5e4b3b61d0ff789d75d57
                  href="https://github.com/RobynAwesome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all"
                  aria-label="GitHub"
                  whileHover={{ y: -2 }}
                >
<<<<<<< HEAD
                  <Github size={18} />
                </motion.a>
                <motion.button
=======
                  <Github size={16} />
                </a>
                <button
>>>>>>> c8e7d9826b7b03d8dab5e4b3b61d0ff789d75d57
                  onClick={cycleTheme}
                  className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all"
                  aria-label="Toggle theme"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {themeIcon}
<<<<<<< HEAD
                </motion.button>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
=======
                </button>
                <Link
                  to="/contact"
                  className="ml-2 px-5 xl:px-6 py-2 rounded-full text-xs xl:text-sm font-bold bg-[#00e89d] text-[#060d18] hover:bg-[#34ffb0] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#00e89d]/25 hover:shadow-xl hover:shadow-[#00e89d]/35"
>>>>>>> c8e7d9826b7b03d8dab5e4b3b61d0ff789d75d57
                >
                  <Link
                    to="/contact"
                    className="ml-3 rounded-full bg-[#00e89d] px-8 py-3 text-lg font-bold text-[#060d18] shadow-lg shadow-[#00e89d]/40 transition-all duration-300 hover:bg-[#34ffb0] hover:shadow-xl hover:shadow-[#00e89d]/50"
                  >
                    Let's Talk
                  </Link>
                </motion.div>
              </div>

              {/* Mobile controls */}
<<<<<<< HEAD
              <div className="md:hidden flex items-center gap-2">
                <button
                  onClick={cycleTheme}
                  className="p-2 text-gray-400"
                  aria-label="Toggle theme"
                >
=======
              <div className="md:hidden flex items-center gap-1">
                <button onClick={cycleTheme} className="p-2 text-gray-400 hover:text-white" aria-label="Toggle theme">
>>>>>>> c8e7d9826b7b03d8dab5e4b3b61d0ff789d75d57
                  {themeIcon}
                </button>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 text-gray-400 hover:text-white"
                  aria-label="Menu"
                >
                  <AnimatePresence mode="wait">
                    {menuOpen ? (
                      <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <X size={20} />
                      </motion.div>
                    ) : (
                      <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <Menu size={20} />
                      </motion.div>
                    )}
                  </AnimatePresence>
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
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden border-t border-white/5"
                >
<<<<<<< HEAD
                  <div className="px-5 py-5 flex flex-col gap-1">
                    {/* Page navigation links */}
                    {[
                      { to: "/", label: "Home" },
                      { to: "/resume", label: "Resume" },
                      { to: "/projects", label: "Projects" },
                      { to: "/open-source", label: "Open Source" },
                      { to: "/contact", label: "Contact" },
                    ].map((link) => (
                      <Link
                        key={link.to}
                        onClick={() => window.scrollTo(0, 0)}
                        to={link.to}
                        onClick={() => setMenuOpen(false)}
                        className="px-4 py-3 text-base font-semibold text-gray-300 hover:text-[#00e89d] hover:bg-white/5 rounded-xl transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    ))}

                    {/* Social links */}
                    <div className="flex items-center gap-3 px-4 pt-3 mt-2 border-t border-[#1a2744]">
                      <motion.a
                        href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                        whileHover={{ y: -2 }}
                      >
                        <Linkedin size={18} />
                      </motion.a>
                      <motion.a
                        href="https://github.com/RobynAwesome"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                        whileHover={{ y: -2 }}
                      >
                        <Github size={18} />
                      </motion.a>
=======
                  <div className="px-4 py-4 flex flex-col gap-1">
                    {navLinks.map((link) => {
                      const active = isActive(link.to);
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={() => setMenuOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                            active
                              ? "bg-[#00e89d]/10 text-[#00e89d] border border-[#00e89d]/20"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <Icon size={16} />
                          {link.label}
                        </Link>
                      );
                    })}

                    <div className="flex items-center gap-2 px-4 pt-3 mt-1 border-t border-white/5">
                      <a href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/" target="_blank" rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={16} />
                      </a>
                      <a href="https://github.com/RobynAwesome" target="_blank" rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white transition-colors">
                        <Github size={16} />
                      </a>
>>>>>>> c8e7d9826b7b03d8dab5e4b3b61d0ff789d75d57
                    </div>

                    <Link
                      to="/contact"
                      onClick={() => setMenuOpen(false)}
                      className="mx-2 mt-2 py-3 rounded-full text-sm font-bold bg-[#00e89d] text-[#060d18] text-center transition-all duration-300 shadow-lg shadow-[#00e89d]/25"
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
