import React, { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Vishal Bhatt
        </h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-gold transition">
            About
          </a>
          <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-gold transition">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-gold transition">
            Contact
          </a>
        </nav>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-2 rounded-lg bg-gold text-gray-900 font-semibold hover:bg-gold-2 transition"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
};

export default Header;
