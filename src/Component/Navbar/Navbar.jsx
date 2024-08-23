import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
// import logo from "./Navbar-assets/logo.png"; // Add your logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-800">
              <img className="w-12" src="" alt="Logo" />
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#Hero" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="#Slider" className="text-gray-700 hover:text-gray-900">
              Slider
            </a>
            <a href="#About" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a
            href="#Hero"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Home
          </a>
          <a
            href="#Slider"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Slider
          </a>
          <a
            href="#About"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            About
          </a>
          <a
            href="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
