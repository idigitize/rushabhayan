"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const RollingStamp = ({ text = "Find a great connection with God. " }) => {
  const containerRef = useRef(null);
  const characters = text.split("");
  const degreeStep = 360 / characters.length;

  useEffect(() => {
    // Continuous rotation using GSAP
    gsap.to(containerRef.current, {
      rotate: 360,
      duration: 10,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className=" flex absolute -bottom-10 right-40 items-center justify-center w-28 h-28 bg-[#5D3222] rounded-full">
      {/* Arrow Icon */}
      <div className="z-10 text-white">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>

      {/* Rotating Text Ring */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full">
        {characters.map((char, i) => (
          <span
            key={i}
            className="absolute text-xs left-1/2 top-0 origin-[0_56px] scale-150  font-medium uppercase text-[#5D3222]"
            style={{
              transform: `translateX(-50%) rotate(${i * degreeStep}deg)`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RollingStamp;
