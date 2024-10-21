import React, { useEffect, useState } from 'react';

function Eyes() {
  const [leftEyeRotate, setLeftEyeRotate] = useState(0);
  const [rightEyeRotate, setRightEyeRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Get the center coordinates of the left eye
      let leftEye = document.getElementById('left-eye').getBoundingClientRect();
      let leftEyeCenterX = leftEye.left + leftEye.width / 2;
      let leftEyeCenterY = leftEye.top + leftEye.height / 2;

      // Get the center coordinates of the right eye
      let rightEye = document.getElementById('right-eye').getBoundingClientRect();
      let rightEyeCenterX = rightEye.left + rightEye.width / 2;
      let rightEyeCenterY = rightEye.top + rightEye.height / 2;

      // Calculate angle for the left eye
      let deltaXLeft = mouseX - leftEyeCenterX;
      let deltaYLeft = mouseY - leftEyeCenterY;
      let leftAngle = Math.atan2(deltaYLeft, deltaXLeft) * (180 / Math.PI);
      setLeftEyeRotate(leftAngle - 180);

      // Calculate angle for the right eye
      let deltaXRight = mouseX - rightEyeCenterX;
      let deltaYRight = mouseY - rightEyeCenterY;
      let rightAngle = Math.atan2(deltaYRight, deltaXRight) * (180 / Math.PI);
      setRightEyeRotate(rightAngle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed='-.7' className='relative w-full h-full bg-cover bg-center bg- bg-[url("/bgeyess.png")]'>
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-60'>

          {/* Left Eye */}
          <div id='left-eye' className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 md:w-[12vw] md:h-[12vw] sm:w-[20vw] sm:h-[20vw]'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${leftEyeRotate}deg)` }}
                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'
              >
                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>

          {/* Right Eye */}
          <div id='right-eye' className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 md:w-[12vw] md:h-[12vw] sm:w-[20vw] sm:h-[20vw]'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rightEyeRotate}deg)` }}
                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'
              >
                <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Eyes;
