"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const categories = [
    "Knowledge & Discovery",
    "Art & Expression",
    "Exhibitions & Installations",
    "Research & Dialogue",
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrap = imageWrapRef.current;
    const image = imageRef.current;
    if (!section || !imageWrap || !image) return;

    // Slide the whole image column up from below
    gsap.fromTo(
      imageWrap,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      },
    );

    // Subtle Ken-Burns-style vertical drift inside the image itself
    gsap.fromTo(
      image,
      { y: 30 },
      {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-brown-medium z-20 font-manrope relative h-screen bg-black text-[#EBE3D5] border p-8 md:p-16 lg:p-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Title & Nav */}
        <div className="lg:col-span-4 space-y-12">
          <div>
            <h4 className="  text-lg mb-4 opacity-80 font-didot">
              About <span className="italic">Us</span>
            </h4>
            <h2 className="text-3xl font-semibold md:text-5xl leading-tight">
              How We Bring Changes Together
            </h2>
          </div>

          <nav className="flex flex-col border-t border-white/20">
            {categories.map((item, index) => (
              <button
                key={item}
                onClick={() => setActiveIndex(index)}
                className={`text-left py-6 text-2xl transition-all border-b border-white/20 ${
                  activeIndex === index
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* Center Column: Image */}
        <div ref={imageWrapRef} className="lg:col-span-4 h-full">
          <div className="relative aspect-[3/4] w-full overflow-hidden shadow-2xl">
            <div
              ref={imageRef}
              className="absolute inset-0 will-change-transform"
            >
              <Image
                src="/assets/images/1.png"
                alt="Temple stone carving"
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Description & CTA */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4 space-y-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wider">
              {categories[activeIndex]}
            </h3>
            <p className="text-lg leading-relaxed opacity-90 max-w-sm">
              A gateway to curated research, publications, and intellectual
              resources that deepen understanding and preserve scholarly
              thought.
            </p>
          </div>

          <div className="pt-12">
            <div className="hidden md:block pl-4">
              <Button
                variant="primary"
                size="md"
                className="text-lg bg-cream-light text-brown-medium"
              >
                CONNECT WITH US
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
