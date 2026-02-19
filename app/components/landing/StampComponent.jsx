"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const StampComponent = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  const renderChars = (text, isItalic = false) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className={`char text-black/10 ${isItalic ? "italic" : ""}`}
      >
        {char}
      </span>
    ));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = textRef.current.querySelectorAll(".char");

      gsap.to(chars, {
        color: "#3e2723",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 10%",
          end: "+=150%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 w-full h-screen flex items-center justify-center overflow-hidden bg-transparent"
    >
      <div
        ref={containerRef}
        className="max-w-6xl pt-40 w-full px-10 md:px-20 block "
      >
        {/* The Float: This makes the text wrap around the image */}
        <div className="float-left mr-10  -mt-64 w-[200px] md:w-[320px]">
          <Image
            src="/assets/icons/Stamp.svg"
            alt="Stamp"
            width={440}
            height={500}
            className="object-contain w-full h-auto mix-blend-multiply opacity-90"
            priority
          />
        </div>

        {/* The Text: Needs to be block-level for the float to work */}
        <p
          ref={textRef}
          className="text-3xl  md:text-[48px] leading-[1.4] font-serif text-left"
          style={{ fontFamily: "Didot, serif" }}
        >
          {renderChars(
            "Rushabhayan is an international conference and art forum celebrating India’s first teacher, ",
          )}
          {renderChars("Raja Rushabhdev...", true)}
          {renderChars(" the man who gave humanity its earliest systems of ")}
          {renderChars("living, ", true)}
          {renderChars("learning, ", true)}
          {renderChars("and ")}
          {renderChars("leadership.", true)}
        </p>
      </div>
    </section>
  );
};

export default StampComponent;
