"use client";
import React from "react";
import Link from "next/link";

interface MarqueeProps {
  items?: string[];
  links?: { label: string; href: string }[];
}

const Marquee: React.FC<MarqueeProps> = () => {
  return (
    <div className="w-full bg-brown-medium text-cream-light py-2 overflow-hidden relative z-50 flex">
      <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around">
        <span className="font-manrope text-sm font-medium tracking-wide uppercase mx-4">
          Join us for on our journey to explore the depths of our culture in
          Mumbai.
        </span>
        <span className="font-manrope text-sm tracking-wide uppercase mx-4 font-bold underline cursor-pointer">
          Register
        </span>
        <span className="font-manrope text-sm font-medium tracking-wide uppercase mx-4">
          Join us for on our journey to explore the depths of our culture in
          Mumbai.
        </span>
        <span className="font-manrope text-sm tracking-wide uppercase mx-4 font-bold underline cursor-pointer">
          Register
        </span>
      </div>
      <div
        className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around"
        aria-hidden="true"
      >
        <span className="font-manrope text-sm font-medium tracking-wide uppercase mx-4">
          Join us for on our journey to explore the depths of our culture in
          Mumbai.
        </span>
        <span className="font-manrope text-sm tracking-wide uppercase mx-4 font-bold underline cursor-pointer">
          Register
        </span>
        <span className="font-manrope text-sm font-medium tracking-wide uppercase mx-4">
          Join us for on our journey to explore the depths of our culture in
          Mumbai.
        </span>
        <span className="font-manrope text-sm tracking-wide uppercase mx-4 font-bold underline cursor-pointer">
          Register
        </span>
      </div>
    </div>
  );
};

export default Marquee;
