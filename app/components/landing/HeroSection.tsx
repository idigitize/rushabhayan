"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imagesRef: any = useRef([]);

  const images = [
    "/assets/images/4.jpg",
    "/assets/images/5.jpg",
    "/assets/images/1.png",
    "/assets/images/2.jpg",
    "/assets/images/3.jpg",
    "/assets/images/4.jpg",
    "/assets/images/2.jpg",
    "/assets/images/5.jpg",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "0 top",
          end: "+=600%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(textRef.current, {
        x: "-20%",
        duration: 5,
        ease: "power1.inOut",
      });

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
        className="absolute inset-0 flex items-center  whitespace-nowrap text-[6vw] text-[#3e2723] pointer-events-none translate-x-[60%]"
        style={{ fontFamily: 'Didot, "Didot LT STD", "Hoefler Text", serif' }}
      >
        A search for <span className=" italic mb-4">&nbsp;roots.&nbsp;</span> A
        journey home.
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
