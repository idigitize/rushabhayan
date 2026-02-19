"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ArticleCardProps {
  item: {
    id: number;
    date: string;
    category: string;
    title: string;
    image: string;
  };
}

const ArticleCard = ({ item }: ArticleCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const onMouseMove = contextSafe((e: React.MouseEvent) => {
    if (!containerRef.current || !buttonRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(buttonRef.current, {
      x: x,
      y: y,
      duration: 0.6,
      ease: "power3.out",
    });
  });

  const onMouseEnter = contextSafe(() => {
    gsap.to(buttonRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  const onMouseLeave = contextSafe(() => {
    gsap.to(buttonRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  });

  return (
    <div
      ref={containerRef}
      className="group cursor-none relative"
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Target area for the custom cursor/button */}
      <div className="relative mb-6 flex flex-col gap-2 overflow-hidden bg-[#f8f1e5] rounded-lg">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Meta & Title */}
        <div className="flex justify-between items-center z-10 px-4 mt-2">
          <span className="text-gray-600 text-[10px] sm:text-xs uppercase tracking-wider font-semibold">
            {item.date}
          </span>
          <span className="px-3 py-0.5 border border-teal-800 text-teal-800 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-tight">
            {item.category}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl px-4 pb-6 pt-2 font-didot leading-tight text-gray-900 group-hover:text-[#5c3a21] transition-colors duration-300">
          {item.title}
        </h3>

        {/* Following Button */}
        <div
          ref={buttonRef}
          className="pointer-events-none fixed left-0 top-0 z-[100] flex h-10 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#5c3a21] text-white opacity-0 scale-0"
          style={{ position: "absolute" }}
        >
          <span className="text-[10px] font-bold tracking-widest text-center leading-tight">
            READ NOW
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
