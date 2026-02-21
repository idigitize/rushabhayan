"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const RollingStamp = ({ text = "Find a great connection with God. " }) => {
  const containerRef = useRef(null);
  const characters = text.split("");
  const degreeStep = 360 / characters.length + 1;

  useEffect(() => {
    // Continuous rotation using GSAP
    gsap.to(containerRef.current, {
      rotate: 360,
      duration: 20,
      ease: "none",
      repeat: 1,
    });
  }, []);

  return (
    <div className="flex absolute -bottom-20 right-20 sm:right-16 md:right-40 items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-[#5D3222] rounded-full">
      {/* Arrow Icon */}
      <div className="z-10 text-white">
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="md:w-[80px] md:h-[80px]"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>

      {/* Rotating Text Ring */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full">
        {characters.map((char, i) => (
          <span
            key={i}
            className="absolute text-sm md:text-base left-1/2 top-0 font-bold origin-[50%_64px] md:origin-[50%_80px] scale-125 md:scale-150 font-medium text-[#5D3222]"
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
