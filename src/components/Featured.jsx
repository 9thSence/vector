import { motion } from 'framer-motion'
import React from 'react'

function Featured() {
    
  return (
    <div className='w-full py-20' >
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20 ' >
            <h1 className='text-7xl font-["Bebas"] tracking-tight ' >Featured Projects</h1>
            
            
        </div>
        <div className='px-20 '>
        <div className='cards w-full flex gap-10 mt-10'>
                <div className='cardcontainer relative w-1/2 h-[60vh] '>
                    <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-6xl ' >
                        {'FYDE'.split('').map((item, index)=> (
                            <motion.span className='' initial={{y: '100%'}} >{item}</motion.span>))}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden '>
                        <img className='w-full h-full bg-cover'  src='https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png ' alt=''  />
                    </div>
                    </div>
                    <div className='cardcontainer relative w-1/2 h-[60vh] '>
                    <h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-6xl ' >
                        {'SKYY'.split('').map((item, index)=> (
                            <span>{item}</span>))}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden '>
                        <img className='w-full h-full bg-cover'  src='https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png ' alt=''  />
                    </div>
                    </div>
            </div>
            </div>
    </div>
  )
}

export default Featured