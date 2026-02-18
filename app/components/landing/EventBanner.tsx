"use client";
import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

const EventBanner = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/Second Banner.jpg" // Assuming this is the image, or fallback
          alt="Conference Crowd"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/90 md:bg-black/50" />{" "}
        {/* Dark overlay */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full text-white">
        {/* Date and Location Line */}
        <div className="flex items-center gap-4 mb-4 text-sm md:text-base font-medium tracking-wide text-gray-300 font-manrope">
          <span>19 - 21 December, 2026</span>
          <span className="w-12 h-[1px] bg-gray-400"></span>
          <span>Mumbai, India</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-7xl text-[#f3e5d0] mb-6 font-didot">
          Rushabhayan 3
        </h2>

        {/* Description Text */}
        <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-gray-200 mb-10 font-manrope">
          Rushabhayan 2025 is an international conference and art forum
          celebrating India's first teacher, Raja Rushabhdev... the man who gave
          humanity its earliest systems of living, learning, and leadership.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="hidden md:block pl-4">
            <Button
              variant="primary"
              size="md"
              className="text-lg bg-cream-light text-brown-medium"
            >
              Pre-register Now
            </Button>
          </div>
          <div className="hidden md:block pl-4">
            <Button
              variant="outline"
              size="md"
              className="text-lg border-cream-light text-cream-light"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventBanner;
