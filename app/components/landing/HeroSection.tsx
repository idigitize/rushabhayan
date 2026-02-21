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

  // useLayoutEffect runs synchronously before the browser paints,
  // so there is zero flicker – GSAP initial states are in place before
  // the first frame is drawn.
  useLayoutEffect(() => {
    // Measure the sticky navbar/marquee height so we can offset the
    // ScrollTrigger start. The HeroSection sits in DOM flow after the
    // sticky nav, meaning its top is navHeight px below the viewport top.
    // By setting  start: "top <navHeight>px"  we tell GSAP to pin when the
    // section top is still navHeight from the viewport top — i.e. at scrollY=0.
    const navEl = sectionRef.current
      ?.previousElementSibling as HTMLElement | null;
    const navHeight = navEl ? navEl.getBoundingClientRect().height : 0;

    const ctx = gsap.context(() => {
      // ── STAGE 0: set initial state before any scroll ─────────────────
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
          // Fire as soon as the section top is navHeight from viewport top —
          // that's scrollY=0, so the pin is instant.
          // start: `top ${navHeight}px`,
          start: "top top",
          end: "+=300%",
          scrub: 1.2,
          pin: true,
          pinSpacing: true,
        },
      });

      // ── SMOOTH CONTINUOUS ANIMATION ──────────────────────────────────
      // Rule: with scrub, always use ease:"none". The scrub itself handles
      // smoothness — per-segment eases cause jerks at each boundary.
      // All tweens run from 0→end with overlapping durations so every
      // property moves continuously throughout the full scroll.

      const DUR = 3; // timeline duration units

      // Container zoom: 0.55 → 1.2
      tl.to(
        containerRef.current,
        { scale: 1.2, ease: "none", duration: DUR },
        0,
      );

      // Gates: spread 0% → ±100%
      tl.to(
        leftGateRef.current,
        { x: "-100%", ease: "none", duration: DUR },
        0,
      );
      tl.to(
        rightGateRef.current,
        { x: "100%", ease: "none", duration: DUR },
        0,
      );

      // Behind text: fade in over first third, blur 80→0 over full scroll
      tl.to(
        behindTextRef.current,
        { opacity: 1, ease: "none", duration: DUR * 0.4 },
        0,
      );
      tl.to(
        behindTextRef.current,
        { filter: "blur(0px)", ease: "none", duration: DUR },
        0,
      );

      // Raja: fade in over first third, scale + blur clear over full scroll
      tl.to(
        rajaRef.current,
        { opacity: 1, ease: "none", duration: DUR * 0.4 },
        0,
      );
      tl.to(
        rajaRef.current,
        { scale: 1.05, filter: "blur(0px)", ease: "none", duration: DUR },
        0,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 h-screen w-full overflow-hidden"
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
              fontWeight: 700,
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
          className="absolute inset-0 flex items-end justify-center z-20 pointer-events-none"
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
            className="object-contain object-bottom"
            style={{ height: "92%", width: "auto", maxWidth: "none" }}
          />
        </div>

        {/* ── Left Gate ── */}
        <div
          ref={leftGateRef}
          className="absolute inset-y-0 left-0 z-30 pointer-events-none"
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
            className="h-full w-full object-cover object-right"
            draggable={false}
          />
        </div>

        {/* ── Right Gate ── */}
        <div
          ref={rightGateRef}
          className="absolute inset-y-0 right-0 z-30 pointer-events-none"
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
            className="h-full w-full object-cover object-left"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
