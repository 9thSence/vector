import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles-engine';

import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles-engine';

function LandingPage() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fullScreen: { enable: false }, // Disable fullscreen to keep particles within the section
    particles: {
      number: {
        value: 50,
      },
      size: {
        value: 3,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: true,
        outMode: "bounce",
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
      },
    },
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="w-full h-min bg-[#fff0f4] text-[#000] pt-1 relative"
    >
      {/* Particle effect */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* Main content */}
      <div className="textstructure mt-20 px-5 sm:mt-40 sm:px-20 flex flex-col items-center justify-center relative z-10">
        {['We Create', 'Eye-Opening', 'Sites.'].map((item, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-center overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '50vw' }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2 }}
                  className="mr-0.1 w-[50vw] sm:w-[8.7vw] rounded-md h-[20vw] sm:h-[9vw] relative top-2"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              )}
              <h1 className="pt-0 flex items-center uppercase text-[18vw] sm:text-[9vw] leading-[20vw] sm:leading-[10vw] tracking-tighter font-['Bebas'] font-semibold">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
