import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const tailRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const tail = tailRef.current;

    const onMouseMove = (e) => {
      gsap.set([cursor, tail], { opacity: 1 });

      const cursorPosition = {
        left: e.clientX,
        top: e.clientY,
      };

      // Cursor movement
      gsap.to(cursor, {
        left: cursorPosition.left,
        top: cursorPosition.top,
        height: "12px",
        width: "12px",
        duration: 0.2,
      });
      gsap.to(tail, {
        left: cursorPosition.left,
        top: cursorPosition.top,
        height: "5px",
        width: "5px",
        duration: 0.5,
      });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      {/* Cursor elements */}
      <div
        ref={cursorRef}
        className="fixed z-[9999] w-3 h-3 border border-white rounded-full pointer-events-none mix-blend-difference"
        style={{ opacity: 0 }}
      ></div>
      <div
        ref={tailRef}
        className="fixed z-[9999] w-2 h-2 bg-white rounded-full pointer-events-none mix-blend-difference"
        style={{ opacity: 0 }}
      ></div>
    </>
  );
};

export default CustomCursor;
