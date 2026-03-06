"use client";
import React from "react";
import Button from "../ui/Button";

const MemberCTA = () => {
  return (
    <section className="relative hidden md:flex  w-full py-20  px-4 md:px-8 ">
      <div className=" w-full bg-[#5E2A16] text-[#f3e5d0] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col gap-2 z-10 text-center md:text-left">
          <h2 className="text-[32px]  font-semibold font-manrope">
            Join Us At Rushabhayan 3
          </h2>
          <p className="text-[56px] font-didot italic">Register Now!</p>
        </div>

        <div className="z-10">
          <div className="hidden md:block pl-4">
            <Button
              variant="primary"
              size="md"
              className="text-[24px] bg-cream-light text-brown-medium uppercase"
            >
              PRE-REGISTER NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberCTA;
