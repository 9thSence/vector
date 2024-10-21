import React, { useEffect } from 'react';
import { gsap } from 'gsap';
// Commenting ScrambleTextPlugin import since it's not resolved in your setup
// import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
// gsap.registerPlugin(ScrambleTextPlugin);

function Footer() {
  useEffect(() => {
    // Heading Animation (Scramble Text Effect)
    gsap.fromTo(
      ".footer-heading h1",
      { scrambleText: { text: "Get in touch", chars: "0123456789", revealDelay: 0.5 } },
      { duration: 3, ease: "power2.inOut" }
    );

    // Other animations (fade-in effect for social links and text)
    gsap.fromTo(
      ".footer-heading span",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
    );

    gsap.fromTo(
      ".footer-link",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out", delay: 0.8 }
    );
  }, []);

  return (
    <footer className="relative w-full h-screen bg-[#421a1d] text-white flex flex-col justify-center items-center px-4 sm:px-8 lg:px-32">
      {/* Main Heading */}
      <div className="footer-heading flex flex-col items-center justify-center text-center">
        <span className="text-xs sm:text-sm tracking-widest mb-4">LET'S TALK</span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none">Get in touch</h1>
      </div>

      {/* Footer Links */}
      <div className="absolute bottom-16 left-0 w-full flex flex-col sm:flex-row justify-between text-xs sm:text-sm md:text-base px-4 sm:px-8 lg:px-32">
        {/* Left Section */}
        <div className="flex flex-col footer-link mb-6 sm:mb-0">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mb-2">
            INSTAGRAM ↗
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mb-2">
            LINKEDIN ↗
          </a>
        </div>

        {/* Right Section */}
        <div className="flex flex-col footer-link">
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="mb-2">
            DRIBBBLE ↗
          </a>
          <a href="https://behance.com" target="_blank" rel="noopener noreferrer">
            BEHANCE ↗
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="absolute bottom-4 w-full text-center text-xs footer-link px-4 sm:px-8">
        <p>DESIGNED BY VECTOR</p>
        <p>©{new Date().getFullYear()} ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}

export default Footer;
