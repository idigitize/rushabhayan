"use client";
import React from "react";
import Link from "next/link";

interface MarqueeProps {
  items?: string[];
  links?: { label: string; href: string }[];
}

const Sparkle = ({
  size = 14,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <img
    src="/assets/icons/sparkle.svg"
    alt="sparkle"
    width={size}
    height={size}
    className={className}
    style={{ display: "inline-block", flexShrink: 0 }}
  />
);

const Marquee: React.FC<MarqueeProps> = () => {
  return (
    <div className="w-full bg-brown-medium text-cream-light py-2 overflow-hidden relative z-50 flex">
      <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around">
        <span className="font-manrope text-sm font-medium tracking-wide capitalize mx-1">
          Join us for on our journey to explore the depths of our culture in
          Mumbai.
        </span>
        <Sparkle size={12} className="opacity-70" />
        <span className="font-manrope text-sm tracking-wide capitalize mx-1 font-bold underline cursor-pointer">
          Register
        </span>
        <Sparkle size={12} className="opacity-70" />
        <span className="font-manrope text-sm font-medium tracking-wide capitalize mx-1">
          Join us for on our journey to explore the depths of our culture in
          Mumbai.
        </span>
        <Sparkle size={12} className="opacity-70" />
        <span className="font-manrope text-sm tracking-wide capitalize mx-1 font-bold underline cursor-pointer">
          Register
        </span>
        <Sparkle size={12} className="opacity-70" />
      </div>
      <div
        className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around"
        aria-hidden="true"
      >
        <span className="font-manrope text-sm font-medium tracking-wide capitalize mx-1">
          Join us for on our journey to explore the depths of our culture in
          Mumbai.
        </span>
        <Sparkle size={12} className="opacity-70" />
        <span className="font-manrope text-sm tracking-wide capitalize mx-1 font-bold underline cursor-pointer">
          Register
        </span>
        <Sparkle size={12} className="opacity-70" />
        <span className="font-manrope text-sm font-medium tracking-wide capitalize mx-1">
          Join us for on our journey to explore the depths of our culture in
          Mumbai.
        </span>
        <Sparkle size={12} className="opacity-70" />
        <span className="font-manrope text-sm tracking-wide capitalize mx-1 font-bold underline cursor-pointer">
          Register
        </span>
        <Sparkle size={12} className="opacity-70" />
      </div>
    </div>
  );
};

export default Marquee;
