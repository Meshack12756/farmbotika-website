import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const goToSection = (section) => {
    setSidebarOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${section}`);
    } else {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  };

  return (
    <nav className="w-screen bg-gradient-to-r from-green-200 via-lime-100 to-green-50 shadow-lg px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div
        className="text-3xl font-bold font-mogra text-green-800 cursor-pointer hover:text-green-600 transition"
        onClick={() => goToSection("home")}
      >
        FarmBotika
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-6 text-green-900 font-semibold">
        {["home", "story", "services", "team"].map((section) => (
          <button
            key={section}
            type="button"
            onClick={() => goToSection(section)}
            className="px-4 py-2 rounded-full hover:bg-green-300 hover:text-green-900 transition duration-300"
          >
            {section.toUpperCase().replace("-", " ")}
          </button>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-green-800 text-2xl focus:outline-none"
        >
          {sidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Sidebar Menu */}
      {sidebarOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-full bg-green-50 shadow-lg z-40 p-6 transition-all duration-300">
          <div className="flex flex-col space-y-6 text-green-900 font-semibold">
            {["home", "story", "services", "team"].map((section) => (
              <button
                key={section}
                type="button"
                onClick={() => goToSection(section)}
                className="text-left text-lg hover:text-green-700 transition"
              >
                {section.toUpperCase().replace("-", " ")}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
