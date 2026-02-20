"use client";
import React from "react";
import Button from "../ui/Button";

const MemberCTA = () => {
  return (
    <section className="relative w-full py-20 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto w-full bg-[#463e2d] text-[#f3e5d0] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col gap-2 z-10 text-center md:text-left">
          <span className="text-sm md:text-base font-medium font-manrope tracking-widest uppercase text-[#c9a87c]">
            27 – 29 November 2026 · Baroda, Gujarat
          </span>
          <h2 className="text-4xl font-thin md:text-5xl font-didot">
            Register for <span className="italic">Rushabhayan 3</span>
          </h2>
          <p className="text-sm md:text-base font-manrope opacity-80 mt-2 max-w-lg">
            Pre-registration is strongly recommended. On-spot registration may
            be available subject to seat capacity.
          </p>
        </div>

        <div className="z-10">
          <div className="hidden md:block pl-4">
            <Button
              variant="primary"
              size="md"
              className="text-lg bg-cream-light text-brown-medium uppercase"
            >
              REGISTER NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberCTA;
