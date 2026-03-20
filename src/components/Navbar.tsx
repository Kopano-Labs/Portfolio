import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full text-white shadow-md bg-primaryGreen">
      <div className="flex items-center justify-between max-w-6xl p-4 mx-auto">
        {/* Logo / Branding */}
        <a href="#hero" className="flex items-center space-x-2">
          <span className="px-3 py-1 font-bold rounded-lg bg-primaryBlue">
            KH
          </span>
          <span className="text-xl font-semibold tracking-wide">Kholofelo</span>
        </a>

        {/* Hamburger Menu */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex space-x-6 ${open ? "block" : "hidden"} md:block`}
        >
          <li>
            <a href="#skills" className="hover:text-primaryBlue">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-primaryBlue">
              Projects
            </a>
          </li>
          <li>
            <a href="#certificates" className="hover:text-primaryBlue">
              Certificates
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primaryBlue">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
