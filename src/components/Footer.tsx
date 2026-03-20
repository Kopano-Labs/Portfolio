function Footer() {
  return (
    <footer className="py-6 text-center text-white bg-primaryGreen">
      <p>&copy; {new Date().getFullYear()} Kholofelo. MIT Licensed.</p>
      <div className="flex justify-center mt-4 space-x-6">
        <a
          href="https://github.com/yourusername"
          className="hover:text-primaryBlue"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          className="hover:text-primaryBlue"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
