import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3' className='w-full h-min   bg-[#fff0f4] text-[#000] pt-1 '>
      <div className='textstructure mt-20 px-5 sm:mt-40 sm:px-20 flex flex-col items-center justify-center'>
        {['We  Create', 'Eye-Opening', 'Sites.'].map((item, index) => (
          <div className='masker'key={index}>
            <div className='w-fit flex items-center overflow-hidden '>
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '8.7vw' }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                 className='mr-0.1 w-[50vw] sm:w-[8.7vw] rounded-md h-[20vw] sm:h-[9vw] relative top-2'
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover' }}

                />
              )}
              <h1 className='pt-0 flex items-center uppercase text-[20vw] sm:text-[9vw] leading-[22vw] sm:leading-[10vw] tracking-tighter font-["Bebas"] font-semibold'>
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className='font-["Camaufalge"] border-t-[1px] border-zinc-900 mt-16 sm:mt-32 flex flex-col sm:flex-row justify-between items-center py-5 px-5 sm:px-20 gap-5 sm:gap-0'>
        {['for public and private companies', 'from the first pitch to the IPO'].map((item, index) => (
          <p key={index} className='text-sm sm:text-md font-light tracking-tight leading-none'>
            {item}
          </p>
        ))}
        <div className='start flex items-center gap-3 sm:gap-5'>
          <button className='px-4 py-2 sm:px-5 sm:py-2 border-[2px] border-zinc-900 font-light text-sm sm:text-md uppercase rounded-full'>
            Start the Project
          </button>
          <div className='w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-[2px] border-zinc-900 rounded-full'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;