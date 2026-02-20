"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imagesRef: any = useRef([]);

  const images = Array(8).fill("/assets/images/1.png");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "-15% top",
          end: "+=600%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        textRef.current,
        { x: "30%" },
        {
          x: "-20%",
          duration: 5,
          ease: "power1.inOut",
        },
      );

      imagesRef.current.forEach((img: any, index: number) => {
        const randomRotation = (Math.random() * 12 - 6).toFixed(2);

        tl.fromTo(
          img,
          {
            scale: 4,
            opacity: 0,
            y: -100,
            rotate: 0,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            rotate: randomRotation, // Apply the stagger/tilt
            duration: 2,
            ease: "expo.out",
          },
          "-=1",
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-10 h-screen w-full bg-transparent overflow-hidden"
    >
      {/* Moving Text Layer */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center whitespace-nowrap text-[6vw] text-[#3e2723] pointer-events-none"
        style={{ fontFamily: 'Didot, "Didot LT STD", "Hoefler Text", serif' }}
      >
        A search for our <span className="italic">&nbsp;roots.&nbsp;</span>
        &nbsp;A purpose for our <span className="italic">&nbsp;future.</span>
      </div>

      {/* Centered Image Frame */}
      <div className="relative flex items-center justify-center h-full w-full">
        <div className="relative w-[260px] h-[380px] md:w-[380px] md:h-[520px] z-10">
          {images.map((src, i) => (
            <div
              key={i}
              ref={(el: any) => (imagesRef.current[i] = el)}
              className="absolute inset-0   shadow-xl overflow-hidden opacity-0 bg-white"
              style={{ zIndex: i }}
            >
              <img
                src={src}
                alt={`Slide ${i}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
