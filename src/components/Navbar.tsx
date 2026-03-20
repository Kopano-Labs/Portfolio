import React from "react";

const Navbar = () => (
  <nav className="flex items-center justify-between px-6 py-4 text-white bg-green-700 shadow-md">
    <h1 className="text-xl font-bold">Kholofelo.dev</h1>
    <ul className="flex gap-6">
      {["Home", "Skills", "Projects", "Certificates", "About", "Contact"].map(
        (item) => (
          <li key={item} className="cursor-pointer hover:text-blue-300">
            {item}
          </li>
        ),
      )}
    </ul>
  </nav>
);

export default Navbar;
