import React from 'react'

function About_Us() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <p className='font-[Bebas] text-3xl leading-[4vw] tracking-tight font-thin'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, exxplain commplex ideas, and hire great people.
        </p>
     <div className='w-full flex gap-5 border-t-[1px] mt-20 border-[#a1b562]'>
      <div className='w-1/2'>
      <h1 className='text-5xl'> Our Approch:</h1>
      <button className='flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'> Read More 
        <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
      </button>

      </div>
      <div className='w-1/2 h-[60vh] rounded-3xl bg-[#8a9c48] '></div>
      
      </div> 
    </div>
  );
}

export default About_Us