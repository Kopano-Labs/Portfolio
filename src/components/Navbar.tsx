function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full text-white shadow-md bg-primaryGreen">
      <div className="flex items-center justify-between max-w-6xl p-4 mx-auto">
        <h1 className="text-xl font-bold">Kholofelo</h1>
        <ul className="flex space-x-6">
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
