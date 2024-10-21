import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {
  const [hovered, setHovered] = useState(null); // To track which side is hovered

  return (
    <div className='w-full py-10 md:py-20 bg-[#fff0f4] rounded-tl-3xl rounded-tr-3xl '>
      {/* Header */}
      <div className='w-full px-5 md:px-20 border-b-[1px] border-zinc-700 pb-10 md:pb-20'>
        <h1 className='text-4xl md:text-7xl font-[""] tracking-tight'>Featured Projects</h1>
      </div>

      {/* Cards Section */}
      <div className='px-5 md:px-20'>
        <div className='cards w-full  flex flex-col md:flex-row gap-10 mt-10 md:mt-10 relative'>

          {/* Text in center of both cards */}
          <motion.h1 
            className='absolute text-[#FF7AA2] drop-shadow-md hover:drop-shadow-2xl left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-4xl md:text-6xl'
            initial={{ opacity: 0 }} // Initially hidden
            animate={{ opacity: hovered ? 1 : 0 }} // Visible when hovered
            transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
          >
            {hovered === 'left' && 'FYDE'.split('').map((item, index) => (
              <motion.span key={index}>{item}</motion.span>
            ))}
            {hovered === 'right' && 'SKYY'.split('').map((item, index) => (
              <motion.span key={index}>{item}</motion.span>
            ))}
          </motion.h1>

          {/* Left card */}
          <motion.div 
            className='cardcontainer relative w-full md:w-1/2 h-[40vh] md:h-[60vh] shadow-lg' // Added shadow
            onHoverStart={() => setHovered('left')} 
            onHoverEnd={() => setHovered(null)}
          >
            <motion.div
              className='card w-full h-full rounded-xl overflow-hidden'
              whileHover={{ scale: 0.9 }} // Squeeze and zoom effect on hover
              transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth transition
            >
              <motion.img 
                className='w-full h-full object-cover'  
                src='/a1.png' 
                alt='Project FYDE'  
                whileHover={{ scale: 1.05 }} // Zoom in on image hover
                transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth transition for zoom
              />
            </motion.div>
          </motion.div>

          {/* Right card */}
          <motion.div 
            className='cardcontainer relative w-full md:w-1/2 h-[40vh] md:h-[60vh] shadow-lg' // Added shadow
            onHoverStart={() => setHovered('right')} 
            onHoverEnd={() => setHovered(null)}
          >
            <motion.div
              className='card w-full h-full rounded-xl overflow-hidden'
              whileHover={{ scale: 0.9 }} // Squeeze and zoom effect on hover
              transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth transition
            >
              <motion.img 
                className='w-full h-full object-cover'  
                src='/a2.png' 
                alt='Project SKYY'  
                whileHover={{ scale: 1.05 }} // Zoom in on image hover
                transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth transition for zoom
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Featured;
