"use client";
import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

const EventBanner = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/Second Banner.jpg"
          alt="Conference Crowd"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/90 md:bg-black/50" />{" "}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full text-white">
        {/* Date & Location row with sparkle dividers */}
        <div className="flex items-center gap-3 mb-4 text-sm md:text-base font-medium tracking-widest text-gray-300 font-manrope uppercase">
          <span>27 – 29 November, 2026</span>
          <span>Baroda, Gujarat</span>
        </div>
        <h2 className="text-5xl md:text-7xl text-[#f3e5d0] mb-4 font-didot uppercase">
          Rushabhayan 3
        </h2>
        <p className="max-w-2xl text-base md:text-lg font-semibold font-manrope uppercase text-gray-200 mb-3">
          Expanded in Scope and Scholarship
        </p>
        <p className="max-w-2xl text-base md:text-lg font-semibold font-manrope uppercase text-gray-200 mb-3">
          This edition brings:
        </p>
        <ul className="max-w-2xl text-sm md:text-base leading-relaxed text-gray-300 mb-10 font-manrope space-y-1 list-none">
          <li>• Broader institutional partnerships</li>
          <li>• A strengthened research framework</li>
          <li>• A larger manuscript and archival showcase</li>
          <li>• Expanded participation from scholars across India</li>
          <li>
            • Stronger collaboration with universities and emerging scholars
          </li>
        </ul>
        <p className="max-w-2xl text-base md:text-lg  font-manrope   text-gray-200 mb-3">
          Rushabhayan 3 builds on its foundation… with greater academic depth,
          stronger collaborations, and wider national outreach
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="primary"
              size="md"
              className="text-lg bg-cream-light text-brown-medium uppercase"
            >
              REGISTER NOW
            </Button>
            <button className="frame-btn">
              <svg viewBox="0 0 500 120" preserveAspectRatio="none">
                <path
                  d="
M 22 1 H 478 Q 478 23 501 22 V 94 Q 478 95 479 119 H 24 Q 23 97 0 98 V 24 M 0 24 Q 22 24 22 1 M 500 85"
                  fill="none"
                  stroke="#e6d5b8"
                  stroke-width="4"
                />
              </svg>
              <span>VIEW DETAILS</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventBanner;
