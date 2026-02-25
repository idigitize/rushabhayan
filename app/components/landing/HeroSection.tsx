"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftGateRef = useRef<HTMLDivElement>(null);
  const rightGateRef = useRef<HTMLDivElement>(null);
  const rajaRef = useRef<HTMLDivElement>(null);
  const behindTextRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    const createAnimation = (isMobile: boolean) => {
      gsap.set(containerRef.current, { scale: 0.55 });
      gsap.set(leftGateRef.current, { x: "0%" });
      gsap.set(rightGateRef.current, { x: "0%" });
      gsap.set(rajaRef.current, {
        opacity: 0,
        scale: 0.85,
        filter: "blur(40px)",
      });
      gsap.set(behindTextRef.current, { opacity: 0, filter: "blur(80px)" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: isMobile ? "+=150%" : "+=300%",
          scrub: 1.2,
          pin: true,
          pinSpacing: true,
        },
      });

      const DUR = 3;

      // Container zoom
      tl.to(
        containerRef.current,
        { scale: isMobile ? 0.85 : 1.2, ease: "none", duration: DUR },
        0,
      );

      // Gates spread
      tl.to(
        leftGateRef.current,
        { x: isMobile ? "-100%" : "-70%", ease: "none", duration: DUR },
        0,
      );
      tl.to(
        rightGateRef.current,
        { x: isMobile ? "100%" : "70%", ease: "none", duration: DUR },
        0,
      );

      // Behind text
      tl.to(
        behindTextRef.current,
        { opacity: 1, ease: "none", duration: DUR * 0.4 },
        0,
      );
      tl.to(
        behindTextRef.current,
        { filter: "blur(0px)", ease: "none", duration: DUR * 0.4 },
        0,
      );

      // Raja
      tl.to(
        rajaRef.current,
        { opacity: 1, ease: "none", duration: DUR * 0.4 },
        0,
      );
      tl.to(
        rajaRef.current,
        { scale: 1.05, filter: "blur(0px)", ease: "none", duration: DUR * 0.4 },
        0,
      );
    };

    mm.add("(max-width: 767px)", () => {
      createAnimation(true);
    });

    mm.add("(min-width: 768px)", () => {
      createAnimation(false);
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 h-screen max-w-screen w-full overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Scale-container – inline initial styles match gsap.set()
          so there is no layout shift before the effect runs */}
      <div
        ref={containerRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: "scale(0.55)",
          transformOrigin: "center center",
          willChange: "transform",
        }}
      >
        {/* ── Behind Text ── */}
        <div
          ref={behindTextRef}
          className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none select-none"
          style={{
            opacity: 0,
            filter: "blur(80px)",
            willChange: "filter, opacity",
          }}
        >
          <span
            className="uppercase text-center"
            style={{
              fontFamily:
                "'Didot', 'Didot LT STD', 'GFS Didot', 'Bodoni MT', Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 9rem)",
              fontWeight: 500,
              letterSpacing: "0.18em",
              color: "#5E2A16",
              display: "block",
              lineHeight: 1,
            }}
          >
            Rushabhayan
          </span>
        </div>

        {/* ── Raja Rushabhdev Image ── */}
        <div
          ref={rajaRef}
          className="absolute inset-0 flex items-center md:items-end justify-center z-20 pointer-events-none"
          style={{
            opacity: 0,
            filter: "blur(40px)",
            transform: "scale(0.85)",
            willChange: "filter, opacity, transform",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/raja-rushabhdev.png"
            alt="Raja Rushabhdev"
            className="object-contain object-bottom h-[40%] md:h-[92%]"
            style={{ width: "auto", maxWidth: "none" }}
          />
        </div>

        {/* ── Left Gate ── */}
        <div
          ref={leftGateRef}
          className="absolute inset-y-0 left-0 z-30 pointer-events-none flex items-center justify-end"
          style={{
            width: "50%",
            willChange: "transform",
            transformOrigin: "left center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/left-gate.png"
            alt="Left Gate"
            className="w-[425%] sm:w-[140%] md:w-full max-w-none md:max-w-full h-auto md:h-full md:object-cover object-right"
            draggable={false}
          />
        </div>

        {/* ── Right Gate ── */}
        <div
          ref={rightGateRef}
          className="absolute inset-y-0 right-0 z-30 pointer-events-none flex items-center justify-start"
          style={{
            width: "50%",
            willChange: "transform",
            transformOrigin: "right center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/right-gate.png"
            alt="Right Gate"
            className="w-[425%] sm:w-[140%] md:w-full max-w-none md:max-w-full h-auto md:h-full md:object-cover object-left"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
