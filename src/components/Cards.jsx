import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center gap-5 px-32'>
        <div className='cardcontainer h-[50vh] w-1/2' >
            <div className='card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center ' >
                <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' ></img>
                <button className='absolute px-5 py-1 rounded-xl border-2 left-10 bottom-10'>&copy; 2019</button>
            </div>
        </div>
        <div className='cardcontainer flex gap-5 h-[50vh] w-1/2' >
            <div className='card relative w-full h-full rounded-xl bg-[#908226] flex items-center justify-center  ' >
                <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' ></img>
                <button className='absolute px-5 py-1 rounded-xl border-2 left-10 bottom-10'>&copy; 2019</button>
            </div>
            <div className='card relative w-full h-full rounded-xl bg-[#a0af2d] flex items-center justify-center  ' >
                <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' ></img>
                <button className='absolute px-5 py-1 rounded-xl border-2 left-10 bottom-10'>&copy; 2019</button>
            </div>
        </div>
    </div>
  )
}

export default Cards