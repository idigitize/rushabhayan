"use client";
import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

const EventBanner = () => {
  return (
    <section className="relative w-full h-auto min-w-screen md:h-[700px] flex items-center justify-center overflow-hidden py-10">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/event.png"
          alt="Conference Crowd"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20 md:bg-black/20" />{" "}
      </div>

      <div className="relative z-10 w-full scale-90 max-w-7xl mx-auto px-6 md:px-4 flex flex-col justify-center h-full text-white">
        {/* Date & Location row with sparkle dividers */}
        <div className="flex font-manrope items-center gap-4 mb-6 font-medium  text-gray-300 font-manrope">
          <span>19 - 21 December, 2026</span>
          <div className="h-[1.8px] w-24 bg-white" />
          <span>Mumbai, India</span>
        </div>
        <h2 className="text-[50px] md:text-[54px] text-white mb-8 font-didot">
          Rushabhayan 3
        </h2>
        <p className="max-w-4xl text-[22px] md:text-[24px] leading-relaxed text-white/90 font-manrope mb-10">
          Rushabhayan 2025 is an international conference and art forum
          celebrating India&apos;s first teacher, Raja Rushabhdev... the man who
          gave humanity its earliest systems of living, learning, and
          leadership.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Mobile-only: simple register button */}
          {/* <div className="flex md:hidden">
            <Button
              variant="primary"
              size="md"
              className="w-full text-lg bg-cream-light text-brown-medium uppercase py-4"
            >
              PRE-REGISTER NOW
            </Button>
          </div> */}
          {/* Desktop: fancy framed button layout */}
          <div className=" scale-90 flex flex-col sm:flex-row   gap-6">
            <Button
              variant="primary"
              size="sm"
              className="w-72 text-[20px] bg-cream-light  text-brown-medium uppercase "
            >
              PRE-REGISTER NOW
            </Button>

            <button className="frame-btn min-w-[280px] h-[54px] relative flex items-center justify-center">
              <svg
                viewBox="0 0 500 120"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
              >
                <path
                  d="M 22 1 H 478 Q 478 23 501 22 V 94 Q 478 95 479 119 H 24 Q 23 97 0 98 V 24 M 0 24 Q 22 24 22 1 M 500 85"
                  fill="none"
                  stroke="#e6d5b8"
                  strokeWidth="4"
                />
              </svg>
              <span className="relative z-10 text-lg">VIEW DETAILS</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventBanner;
