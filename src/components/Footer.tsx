import { Github, Linkedin, Mail, Heart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const socials = [
  {
    icon: <Github size={18} />,
    href: "https://github.com/RobynAwesome",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={18} />,
    href: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={18} />,
    href: "mailto:rkholofelo@gmail.com",
    label: "Email",
  },
];

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

const profileLinks = [
  {
    href: "https://github.com/RobynAwesome",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6/",
    label: "LinkedIn",
  },
  {
    href: "https://www.hackerrank.com/profile/rkholofelo",
    label: "HackerRank",
  },
  {
    href: "https://orcid.org/0009-0000-3995-6147",
    label: "ORCID",
  },
];

const supportLinks = [
  {
    href: "https://paypal.me/osheenviews",
    label: "PayPal",
  },
  {
    href: "https://ko-fi.com/robynawesome",
    label: "Ko-fi",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1a2744] pt-20 pb-10">
      {/* Gradient glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#00e89d]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-8 bg-gradient-to-b from-[#00e89d]/10 to-transparent blur-xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Large heading section with profile pic */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <img
                src="/web-image-2.JPG"
                alt="Kholofelo"
                className="w-14 h-14 rounded-full object-cover object-top border-2 border-[#0ea5e9]/50 shadow-lg shadow-[#00e89d]/20"
              />
              {/* Blinking green dot */}
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#00e89d] border-2 border-[#060d18] animate-pulse" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">
            <span className="gradient-text">Kholofelo Robyn Rababalela</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base tracking-wide">
            Full-Stack MERN Developer &middot; Cape Town, South Africa
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div>
            <a href="#hero" className="flex items-center gap-2.5 mb-4 group">
              <img
                src="/web-image-2.JPG"
                alt="Kholofelo"
                className="w-8 h-8 rounded-full object-cover border border-[#00e89d]/40"
              />
              <span className="font-bold text-white group-hover:text-[#00e89d] transition-colors">
                Kholofelo
              </span>
              <span className="w-2 h-2 rounded-full bg-[#00e89d] animate-pulse" />
            </a>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Full-Stack MERN Developer based in Cape Town, South Africa.
              Building scalable web apps and beautiful interfaces.
            </p>
            <a
              href="mailto:rkholofelo@gmail.com"
              className="text-xs text-[#0ea5e9] hover:text-[#00e89d] transition-colors"
            >
              rkholofelo@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-gray-500 hover:text-[#00e89d] hover:translate-x-1 transition-all duration-200"
                >
                  {l.label}
                </a>
              ))}
              <Link
                to="/resume"
                className="text-sm text-[#0ea5e9] hover:text-[#00e89d] hover:translate-x-1 transition-all duration-200 flex items-center gap-1"
              >
                Resume <ExternalLink size={12} />
              </Link>
            </div>
          </div>

          {/* Profiles */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
              Profiles
            </h4>
            <div className="flex flex-col gap-2.5">
              {profileLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-[#00e89d] hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5"
                >
                  {link.label}
                  <ExternalLink size={11} className="opacity-40" />
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
              Support
            </h4>
            <div className="flex flex-col gap-2.5">
              {supportLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-[#00e89d] hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5"
                >
                  {link.label}
                  <ExternalLink size={11} className="opacity-40" />
                </a>
              ))}
              <a
                href="mailto:rkholofelo@gmail.com"
                className="text-sm text-gray-500 hover:text-[#00e89d] hover:translate-x-1 transition-all duration-200"
              >
                rkholofelo@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Gradient accent divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0ea5e9]/30 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; 2026 Kholofelo Robyn Rababalela. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-gray-500 hover:text-[#00e89d] hover:bg-[#00e89d]/10 border border-transparent hover:border-[#00e89d]/20 transition-all duration-200"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <p className="text-xs text-gray-600 flex items-center gap-1">
            Built with <Heart size={10} className="text-red-500" /> using React, TypeScript & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
