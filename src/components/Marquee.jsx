import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#762E33] text-[#fff]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x: 0}} animate={{x: '-100%'}} transition={{ease: 'linear', repeat: Infinity, duration:10 }} className='text-[20vw] tracking-wider leading-none font-["Bebas"] uppercase -pt-[1vw] mb-[2.5vw] font-semibold pr-20'>
              we are vector
              </motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: '-100%'}} transition={{ease: 'linear', repeat: Infinity, duration:10 }} className='text-[20vw] tracking-wider leading-none font-["Bebas"] uppercase -pt-[1vw] -mb-[2.5vw] font-semibold pr-20'>
              we are vector
              </motion.h1>
            
        </div>
        
    </div>
  );
}

export default Marquee