import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, FileText, FolderOpen, Globe, Award, Mail } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: Home, isHash: false },
  { to: "/resume", label: "Resume", icon: FileText, isHash: false },
  { to: "/projects", label: "Projects", icon: FolderOpen, isHash: false },
  { to: "/open-source", label: "Open Source", icon: Globe, isHash: false },
  { to: "#certificates", label: "Certificates", icon: Award, isHash: true },
  { to: "/contact", label: "Contact", icon: Mail, isHash: false },
];

export default function FooterNav() {
  const location = useLocation();

  const isActive = (to: string, isHash: boolean) => {
    if (isHash) return location.hash === to;
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block"
    >
      {/* Outer LED border */}
      <div className="rounded-full p-[1px] led-border-outer">
        {/* Inner LED border */}
        <div className="rounded-full p-[1px] led-border-inner">
          {/* Main pill */}
          <nav
            className="rounded-full px-2 py-1.5 flex items-center gap-1"
            style={{
              background: "rgba(11, 20, 38, 0.9)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
            }}
          >
            {navItems.map((item) => {
              const active = isActive(item.to, item.isHash);
              const Icon = item.icon;

              const content = (
                <span className="relative flex items-center gap-1.5 px-3 py-1.5">
                  {active && (
                    <motion.div
                      layoutId="footer-nav-active"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "rgba(0, 232, 157, 0.12)" }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <Icon
                    size={14}
                    className={`relative z-10 transition-colors duration-200 ${
                      active ? "text-[#00e89d]" : "text-gray-500"
                    }`}
                  />
                  <span
                    className={`relative z-10 text-xs font-medium transition-colors duration-200 ${
                      active ? "text-[#00e89d]" : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                  {active && (
                    <motion.div
                      layoutId="footer-nav-underline"
                      className="absolute -bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-[#00e89d]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </span>
              );

              if (item.isHash) {
                return (
                  <a
                    key={item.to}
                    href={item.to}
                    className="group rounded-full transition-colors duration-200 hover:bg-white/5"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group rounded-full transition-colors duration-200 hover:bg-white/5"
                >
                  {content}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </motion.div>
  );
}
