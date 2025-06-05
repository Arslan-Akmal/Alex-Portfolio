import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 transition-colors duration-300 shadow-md z-50"> 
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-300"> 
          Alex Carter
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-100 font-medium">
          <li><a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</a></li> 
          <li><a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a></li>
        </ul>

        <div className="flex items-center space-x-4">
          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-gray-700 dark:text-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>

          {/* Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-4 text-gray-700 dark:text-gray-100 font-medium bg-white dark:bg-gray-900">
          <li><a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</a></li>
          <li><a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
