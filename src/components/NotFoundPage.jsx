import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const NotFoundPage = () => {
  const textRef = useRef(null);
  const menuButtonRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Animate the 404 text with row and column transformations
    const tl = gsap.timeline();
    tl.fromTo(
      textRef.current,
      { x: '-100%', scale: 1 },
      { x: '0%', scale: 2, duration: 1, ease: 'power2.out', stagger: 0.2 }
    )
    .to(
      textRef.current,
      { y: '-50%', duration: 0.5, ease: 'power2.in' }
    )
    .to(
      textRef.current,
      { y: '0%', duration: 0.5, ease: 'power2.out' }
    );

    // Add a bounce effect to the menu button
    gsap.fromTo(
      menuButtonRef.current,
      { y: -10 },
      {
        y: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'bounce.out',
      }
    );
  }, []);

  // Toggle the menu open state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1
          ref={textRef}
          className="text-[10rem] md:text-[15rem] font-bold text-black leading-none tracking-wide"
        >
          404
        </h1>
      </div>

      <button
        ref={menuButtonRef}
        onClick={toggleMenu}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-8 py-4 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-500 transition duration-300 ease-in-out"
      >
        ☰ Menu
      </button>

      {/* Hamburger Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 z-10">
          <ul className="space-y-2">
            <li>
              <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                Contact
              </a>
            </li>
            <li>
              <button onClick={() => setMenuOpen(false)} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                Close Menu
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotFoundPage;
