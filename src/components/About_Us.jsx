import React from 'react'

function About_Us() {
  return (
    <div className='w-full p-8 md:p-20 bg-[#f3b9b9]  rounded-tl-3xl rounded-tr-3xl font-mono text-black'>
      <div className=' hover-target text-xl  md:text-3xl leading-[7vw] md:leading-[4vw]  tracking-tight '>
        Vector specializes in building custom websites and products, helping businesses achieve their online goals and stand out in the competitive digital landscape.
      </div>
      <div className='w-full flex flex-col md:flex-row gap-5 border-t-[1px] mt-10 md:mt-20 border-[#964784]'>
      <div className="flex w-full h-1/2 py-5">
          <div className="flex-[4_4_0%]  px-6">What you can expect:</div>
          <div className="flex-[4_4_0%]  text-justify px-6 ">At Vector, we build tailored websites and projects for businesses and students, combining creativity with the latest technology to deliver visually stunning and highly functional results. Whether you're enhancing your online presence or working on a project, we're here to bring your vision to life.
            <br></br>Expect personalized service, modern design, and scalable solutions that align with your goals, ensuring your project stands out and makes a lasting impact.</div>
          <div className="flex-[2_2_0%] px-6">Our Socials:<br></br>LinkedIN<br></br>Instagram </div>
        </div>

      </div>
      <div className='w-full flex flex-col md:flex-row gap-5 border-t-[1px] mt-10 md:mt-20 border-[#964784] py-5'>
        <div className='w-full md:w-1/2 '>
          <h1 className='text-3xl md:text-5xl'> Our Approach:</h1>
          <button className='flex uppercase gap-4 md:gap-10 items-center px-6 py-4 md:px-10 md:py-6 bg-zinc-900 mt-6 md:mt-10 rounded-full text-white'> 
            Read More 
            <div className='w-2 h-2 md:w-3 md:h-3 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-full md:w-1/2 h-[40vh] md:h-[60vh] rounded-3xl bg-[#964784]'></div>
      </div>
    </div>
  );
}

export default About_Us
