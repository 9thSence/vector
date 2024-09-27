import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1 '>
        <div className='textstructure mt-40 px-20'>
          {['We Create','Eye-Opening','Sites.' ].map((item, index)=>{
            return (
            <div className='masker'>
              <div className='w-fit  flex items-center overflow-hidden'>
                {index ===1 && (
                  <div className='mr-2.5 w-[8.7vw] rounded-md h-[9vw] relative top-2.5 bg-red-500'></div>)}
            <h1 className='pt-[0.5vw]  flex items-center uppercase text-[9vw] h-full leading-[8.7vw] tracking-normal font-["Bebas"] font-semibold'>
              {item} 
              </h1>
              </div>
        </div>
            );
          })}
           
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
          {['for public and privates companies',
          'from the first pitch to the IPO'
        ].map((item, index) => (
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-5'>
              <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-md uppercase rounded-full'>start the project</div>
              <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
                <span className='rotate-[45deg]'>
                <FaArrowUpLong />
                </span>
              </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage