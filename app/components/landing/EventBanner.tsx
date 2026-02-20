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
          <span>19 - 21 December, 2026</span>
          <span>Mumbai, India</span>
        </div>
        <h2 className="text-5xl md:text-7xl text-[#f3e5d0] mb-6 font-didot uppercase">
          Rushabhayan 3
        </h2>
        <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-gray-200 mb-10 font-manrope  ">
          Rushabhayan 2025 is an international conference and art forum
          celebrating India's first teacher, Raja Rushabhdev... the man who gave
          humanity its earliest systems of living, learning, and leadership.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="primary"
              size="md"
              className="text-lg bg-cream-light text-brown-medium uppercase"
            >
              Pre-register Now
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
