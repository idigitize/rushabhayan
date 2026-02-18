"use client";
import React from "react";
import { YoutubeLogo, XLogo, InstagramLogo } from "@phosphor-icons/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1e1c16] relative z-30 text-[#eaddc5] py-16 px-6 md:px-16 font-manrope">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-24">
        {/* Left Section: Brand & Socials */}
        <div className="flex flex-col gap-6 md:w-1/3">
          <div>
            <span className="text-sm tracking-wide text-[#a89f91] uppercase">
              Managed by
            </span>
            <h2 className="text-3xl md:text-4xl font-didot mt-2 tracking-wide text-[#f3e5d0]">
              RUSHABHAYAN
            </h2>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <Link
              href="#"
              className="p-2 bg-[#f3e5d0] text-[#1e1c16] rounded-full hover:bg-white transition-colors"
              aria-label="YouTube"
            >
              <YoutubeLogo size={20} weight="fill" />
            </Link>
            <Link
              href="#"
              className="p-2 bg-[#f3e5d0] text-[#1e1c16] rounded-full hover:bg-white transition-colors"
              aria-label="X (Twitter)"
            >
              <XLogo size={20} weight="fill" />
            </Link>
            <Link
              href="#"
              className="p-2 bg-[#f3e5d0] text-[#1e1c16] rounded-full hover:bg-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramLogo size={20} weight="fill" />
            </Link>
          </div>

          <div className="mt-8 md:mt-12 text-sm text-[#a89f91]">
            &copy; 2026 Rushabhayan Foundation. All rights reserved.
          </div>
        </div>

        {/* Right Section: Links */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 md:w-2/3 md:justify-end">
          {/* Menu Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-wider text-[#a89f91] uppercase mb-2">
              Menu
            </h3>
            <ul className="flex flex-col gap-3 text-[#f3e5d0]/90">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#f3e5d0] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f3e5d0] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f3e5d0] transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f3e5d0] transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f3e5d0] transition-colors"
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f3e5d0] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Connected Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold tracking-wider text-[#a89f91] uppercase mb-2">
              Get Connected
            </h3>
            <ul className="flex flex-col gap-3 text-[#f3e5d0]/90">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f3e5d0] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#f3e5d0] transition-colors"
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
