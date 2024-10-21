import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY + 10) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY - 10) {
        setShowNavbar(true);
      }
      setLastScrollY(prevScrollY => currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed z-[999] w-full px-6 py-4 md:px-20 md:py-8 font-['Camaufalge'] flex justify-between items-center transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } backdrop-blur-md`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      {/* Logo */}
      <div className="logo">
        <svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG paths for the logo */}
        </svg>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden" onClick={toggleMobileMenu}>
        <button className="text-zinc-900 focus:outline-none">
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Links for desktop */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-10">
        {["Services", "Our Work", "About Us", "Insights"].map((item, index) => (
          <Link
            key={index}
            to={`/${item.replace(/\s+/g, '').toLowerCase()}`}
            className={`relative text-lg font-medium tracking-wide text-zinc-900 hover:text-[#c9184a] transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-gray-800 hover:after:w-full after:transition-all after:duration-300`}
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex">
        <Link
          to="/contact"
          className={`relative text-lg font-medium tracking-wide text-zinc-900 hover:text-[#c9184a] transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-gray-800 hover:after:w-full after:transition-all after:duration-300`}
        >
          Contact
        </Link>
      </div>

      {/* Dropdown Menu for mobile */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#922848] z-[998] transform transition-transform duration-500 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full py-20">
          {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
            <li key={index} className="py-4">
              <Link
                to={`/${item.replace(/\s+/g, '').toLowerCase()}`}
                className="text-3xl font-medium tracking-wide text-zinc-100 hover:text-[#c9184a] transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu after clicking
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
