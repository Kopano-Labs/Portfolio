import { useState, useEffect } from "react";

function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-2 ml-4 text-white transition rounded-lg bg-primaryBlue hover:bg-primaryGreen"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
