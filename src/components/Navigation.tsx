import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "projects", title: "Projects" },
    { id: "footer", title: "Contact" }, // Added Contact link
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center py-4">
        {/* Logo */}
        <a href="#home" className="text-gray-900 font-bold text-xl">
          SR
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-gray-600 font-medium transition-all duration-300 hover:text-gray-900 hover:underline hover:scale-105 ${
                activeSection === link.id ? "text-gray-900" : ""
              }`}
              onClick={() => setActiveSection(link.id)}
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none transition-transform duration-300 hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} className="animate-fade-in" /> : <Menu size={24} className="animate-fade-in" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 right-0 py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-gray-600 font-medium transition-all duration-300 py-2 px-2 border-l-2 hover:pl-4 hover:text-gray-900 hover:scale-105 ${
                  activeSection === link.id 
                    ? "text-gray-900 border-gray-900 pl-4" 
                    : "border-transparent hover:border-gray-300"
                }`}
                onClick={() => {
                  setActiveSection(link.id);
                  toggleMenu();
                }}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;