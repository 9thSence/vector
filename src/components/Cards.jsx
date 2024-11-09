import React, { useState } from "react";

function Cards() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="w-full min-h-screen bg-zinc-100 flex flex-col md:flex-row items-center gap-5 px-5 md:px-32 py-10">
      {/* Cards */}
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`cardcontainer transition-all duration-300 h-[40vh] md:h-[50vh] 
            ${hoveredCard === index ? "md:w-1/2" : "md:w-1/3"}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center">
            <img
              className="w-24 md:w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt="Logo"
            />
            <button className="absolute px-3 py-1 md:px-5 md:py-1 rounded-xl border-2 left-5 md:left-10 bottom-5 md:bottom-10">
              &copy; 2019
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
