import { useState } from "react";
import pLogo from "../assets/logo.svg";
import { Link } from "react-scroll";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" fixed w-full z-50 font-satisfy top-0">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex justify-between items-center w-full shadow-2xl rounded-lg bg-white p-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link
              to="home"
              smooth={true}
              duration={800}
              className="cursor-pointer"
            >
              <img src={pLogo} alt="Logo" className="h-9" />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8 text-2xl ">
            <Link
              to="home"
              smooth={true}
              duration={800}
              className="text-gray-700 hover:text-orange-600 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={800}
              className="text-gray-700 hover:text-orange-600 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={800}
              className="text-gray-700 hover:text-orange-600 cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="service"
              smooth={true}
              duration={800}
              className="text-gray-700 hover:text-orange-600 cursor-pointer"
            >
              Service
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={800}
              className="text-gray-700 hover:text-orange-600 cursor-pointer"
            >
              Portfolio
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="text-gray-700 hover:text-orange-600 cursor-pointer"
            >
              Contact
            </Link>
          </nav>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleMenuToggle}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-white shadow-2xl ${isMenuOpen ? "block" : "hidden"
          }`}
      >
        <nav className="flex flex-col space-y-4 px-4 py-4">
          <Link
            to="home"
            smooth={true}
            duration={800}
            className="text-gray-700 hover:text-orange-600 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={800}
            className="text-gray-700 hover:text-orange-600 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={800}
            className="text-gray-700 hover:text-orange-600 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="service"
            smooth={true}
            duration={800}
            className="text-gray-700 hover:text-orange-600 cursor-pointer"
          >
            Service
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={800}
            className="text-gray-700 hover:text-orange-600 cursor-pointer"
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="text-gray-700 hover:text-orange-600 cursor-pointer"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
