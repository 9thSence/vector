import React, { useEffect, useState } from "react";
import gsap from "gsap";
import './Preloader.css'; // Ensure the correct path to your CSS file

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true); // State to manage loader visibility

  useEffect(() => {
    // GSAP Animations
    const tl = gsap.timeline({ onComplete: () => setIsLoading(false) }); // Create a timeline

    tl.from(".clip-top, .clip-bottom", { 
      duration: 2, 
      delay: 1, 
      height: "50vh", 
      ease: "power4.inOut" 
    })
      .to(".marquee", { 
        duration: 3.5, 
        delay: 0.75, 
        top: "50%", 
        ease: "power4.inOut" 
      })
      .from(".clip-top .marquee, .clip-bottom .marquee", { 
        duration: 5, 
        delay: 1, 
        left: "100%", 
        ease: "power3.inOut" 
      })
      .from(".clip-center .marquee", { 
        duration: 5, 
        delay: 1, 
        left: "-50%", 
        ease: "power3.inOut" 
      })
      .to(".clip-top", { 
        duration: 2, 
        delay: 6, 
        clipPath: "inset(0 0 100% 0)", 
        ease: "power4.inOut" 
      })
      .to(".clip-bottom", { 
        duration: 2, 
        delay: 6, 
        clipPath: "inset(100% 0 0 0)", 
        ease: "power4.inOut" 
      })
      .to(
        ".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span", 
        { 
          duration: 1, 
          delay: 6, 
          opacity: 0, 
          ease: "power2.inOut" 
        }
      );
  }, []);

  // If loading, show the loader
  // if (isLoading) {
    return (
      <div className="loader">
        <div className="loader-clip clip-top">
          <div className="marquee">
            <div className="marquee-container">
              <span>Rove</span>
              <span>Rove</span>
              <span>Rove</span>
              <span>Rove</span>
              <span>Rove</span>
            </div>
          </div>
        </div>
        <div className="loader-clip clip-bottom">
          <div className="marquee">
            <div className="marquee-container">
              <span>Rove</span>
              <span>Rove</span>
              <span>Rove</span>
              <span>Rove</span>
              <span>Rove</span>
            </div>
          </div>
        </div>
        <div className="clip-center">
          <div className="marquee">
            <div className="marquee-container">
              <span>Rove</span>
              <span>Rove</span>
              <span>Rove</span>
              <span>Rove</span>
              <span>Rove</span>
            </div>
          </div>
        </div>
      </div>
    );
  // }

  // return null; // Return null or any other component when not loading
};

export default Preloader;
