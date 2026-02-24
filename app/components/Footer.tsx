"use client";
import React from "react";
import { YoutubeLogo, XLogo, InstagramLogo } from "@phosphor-icons/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#28271F] relative z-30 text-[#eaddc5] py-16 px-6 md:px-16 font-manrope">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-24">
        <div className="flex flex-col gap-6 md:w-1/3">
          <div>
            <h2 className="text-3xl md:text-4xl font-didot mt-2 tracking-wide text-[#f3e5d0]">
              RUSHABHAYAN
            </h2>
          </div>

          <div className="flex gap-4 mt-2">
            <Link
              href="#"
              className="p-2 bg-[#f3e5d0] text-[#5E2A16] rounded-full hover:bg-white transition-colors"
              aria-label="YouTube"
            >
              <YoutubeLogo size={20} weight="fill" />
            </Link>
            <Link
              href="#"
              className="p-2 bg-[#f3e5d0] text-[#5E2A16] rounded-full hover:bg-white transition-colors"
              aria-label="X (Twitter)"
            >
              <XLogo size={20} weight="fill" />
            </Link>
            <Link
              href="#"
              className="p-2 bg-[#f3e5d0] text-[#5E2A16] rounded-full hover:bg-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramLogo size={20} weight="fill" />
            </Link>
          </div>

          <div className="mt-8 md:mt-12 text-sm text-[#FFF2D6] opacity-40 font-manrope ">
            &copy; 2026 Rushabhayan Foundation. All rights reserved.
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 md:w-2/3 md:justify-end">
          <div className="flex flex-col gap-4">
            <h3 className="text-sm  tracking-wider text-[#FFF2D6] uppercase mb-2">
              Menu
            </h3>
            <ul className="flex flex-col gap-3 text-[#FFF2D6]/40">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#FFF2D6]  transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#FFF2D6]  transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="hover:text-[#FFF2D6]  transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-[#FFF2D6]  transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFF2D6]  transition-colors"
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFF2D6]  transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm  tracking-wider text-[#FFF2D6] uppercase mb-2">
              Get Connected
            </h3>
            <ul className="flex flex-col gap-3 text-[#FFF2D6]/40">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFF2D6]  transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFF2D6]  transition-colors"
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
