"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  return (
    <nav className="sticky top-0 z-50 shadow">
      <div className="navigasi max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative">
        <h2 className="text-xl font-bold text-white">CV Online</h2>
        {/* Desktop nav */}
        <ul className="hidden md:flex test flex-row space-x-6 text-white font-medium">
          <li className="test-li ceng">
            <a
              href="#home"
              className="hover:text-green-400 test-li-a transition duration-300"
            >
              Home
            </a>
          </li>
          <li className="test-li ceng">
            <a
              href="#about"
              className="hover:text-green-400 test-li-a transition duration-300"
            >
              About
            </a>
          </li>
          <li className="test-li ceng">
            <a
              href="#services"
              className="hover:text-green-400 test-li-a transition duration-300"
            >
              Services
            </a>
          </li>
          <li className="test-li ceng">
            <a
              href="#contact"
              className="hover:text-green-400 test-li-a transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        <div>
          {/* Hamburger icon for mobile */}
          <button
            className="md:hidden text-3xl text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
          {/* Theme toggle button */}

          <button className="" onClick={toggleTheme}>
            <span>{theme === "light" ? "🌙" : "☀️"}</span>
            <span>{theme === "light" ? "Dark" : "Light"}</span>
          </button>

          {/* Mobile nav */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-slate-800 dark:bg-black shadow-lg">
              <ul className="flex flex-col py-2 px-4">
                <li className="py-2 border-b border-gray-700">
                  <a
                    href="#home"
                    className="block text-white hover:text-green-400 transition duration-300"
                    onClick={toggleMenu}
                  >
                    Home
                  </a>
                </li>
                <li className="py-2 border-b border-gray-700">
                  <a
                    href="#about"
                    className="block text-white hover:text-green-400 transition duration-300"
                    onClick={toggleMenu}
                  >
                    About
                  </a>
                </li>
                <li className="py-2 border-b border-gray-700">
                  <a
                    href="#services"
                    className="block text-white hover:text-green-400 transition duration-300"
                    onClick={toggleMenu}
                  >
                    Services
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="#contact"
                    className="block text-white hover:text-green-400 transition duration-300"
                    onClick={toggleMenu}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .navigasi {
          display: flex;
          justify-content: space-between;
        }
        .test {
          display: flex;
        }
        .test-li {
          list-style: none;
          margin: 10px;
        }
        .test-li-a {
          text-decoration: none;
          color: blue;
        }
        @media (max-width: 480px) {
          .test {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
