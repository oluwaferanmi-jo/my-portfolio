import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 flex items-center justify-between px-4 py-2 bg-gray-900 shadow-md z-50">
      {/* Logo */}
      <div>
        <p
          className="text-2xl font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage: 'linear-gradient(to right, #FA6E00 30%, #E60026 70%)',
          }}
        >
          Elegbede
        </p>
      </div>

      {/* Hamburger for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none text-transparent bg-clip-text"
          style={{
            backgroundImage: 'linear-gradient(to right, #FA6E00, #E60026)'
          }}
          aria-label="Toggle navigation"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="text-[#959595] hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="text-[#959595] hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="text-[#959595] hover:text-gray-300">
              About Me
            </a>
          </li>
          <li>
            <a href="#portfolio" className="text-[#959595] hover:text-gray-300">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="text-[#959595] hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Desktop "Hire Me" Button */}
      <div className="hidden md:block">
        <button className="bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-white w-36 h-10 rounded">
          Hire Me
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute text-center top-full left-0 w-full bg-gray-900 md:hidden px-4 pb-4 pt-2">
          <a href="#home" className="block py-2 text-white hover:text-gray-300">
            Home
          </a>
          <a href="#services" className="block py-2 text-white hover:text-gray-300">
            Services
          </a>
          <a href="#about" className="block py-2 text-white hover:text-gray-300">
            About Me
          </a>
          <a href="#portfolio" className="block py-2 text-white hover:text-gray-300">
            Portfolio
          </a>
          <a href="#contact" className="block py-2 text-white hover:text-gray-300">
            Contact
          </a>
          <button className="mt-2 bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-white w-full h-10 rounded">
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
