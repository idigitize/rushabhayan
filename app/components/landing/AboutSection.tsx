"use client";
import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const textContentRef = useRef(null);
  const curtainRef = useRef(null);

  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      title: "Knowledge & Discovery",
      image: "/assets/images/1.png",
      description:
        "Rushabhayan presents curated research, publications, and primary sources rooted in India's intellectual traditions. It strengthens access to scholarship that deepens understanding and sustains civilisational continuity.",
    },
    {
      title: "Art & Expression",
      image: "/assets/images/4.jpg",
      description:
        "Through classical arts, visual storytelling, and interpretive works, Rushabhayan explores how knowledge traditions find expression beyond text.",
    },
    {
      title: "Exhibitions & Installations",
      image: "/assets/images/5.jpg",
      description:
        "Rushabhayan curates manuscripts, archival materials, and heritage artefacts with scholarly context and precision. These installations position India's textual and material legacy within a contemporary framework of understanding.",
    },
    {
      title: "Research & Dialogue",
      image: "/assets/images/2.jpg",
      description:
        "Rushabhayan convenes scholars, institutions, and researchers for structured academic exchange. Panels, paper presentations, and moderated discussions advance rigorous, cross-disciplinary dialogue.",
    },
  ];

  const handleCategoryClick = (index: number) => {
    if (index === activeIndex) return;

    const tl = gsap.timeline();

    // Curtain slides in to cover the image
    tl.to(curtainRef.current, {
      x: "0%",
      duration: 0.5,
      ease: "power3.inOut",
    });

    // Text content fades and moves slightly down
    tl.to(
      textContentRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setActiveIndex(index);
          gsap.set(textContentRef.current, { y: -20 });
        },
      },
      "-=0.3",
    );

    // Curtain slides out to reveal the new image
    tl.to(curtainRef.current, {
      x: "100%",
      duration: 0.5,
      ease: "power3.inOut",
      onComplete: () => {
        // Reset curtain position for next transition
        gsap.set(curtainRef.current, { x: "-100%" });
      },
    });

    // New text content fades in and moves into position
    tl.to(
      textContentRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.2",
    );
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#463E2D] z-20 min-w-screen  font-manrope relative  text-[#EBE3D5]  w-full  p-4 md:p-16 lg:p-8 py-16 md:py-50"
    >
      <div className="   my-10 grid w-full  grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Title & Nav */}
        <div className="lg:col-span-4  space-y-8 lg:space-y-12 flex flex-col justify-between h-full ">
          <div>
            <h4 className="text-[32px] mb-4   font-didot text-[#FFF2D6]">
              About <span className="italic">Us</span>
            </h4>
            <h2 className="text-[48px] font-semibold md:text-[48px] leading-tight">
              How We Bring Changes Together
            </h2>
          </div>

          <nav className="flex flex-col   ">
            {categories.map((item, index) => (
              <button
                key={item.title}
                onClick={() => handleCategoryClick(index)}
                className={`text-left py-4 md:py-6 text-[32px] font-semibold transition-all border-b border-white/20 ${
                  activeIndex === index
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                {item.title}s
              </button>
            ))}
          </nav>
        </div>

        {/* Center Column: Image with Curtain */}
        <div className="block lg:col-span-4 h-full">
          <div className="relative aspect-4/5 md:aspect-4/6 w-full overflow-hidden shadow-2xl">
            <div ref={imageRef} className="w-full h-full">
              <Image
                src={categories[activeIndex].image}
                alt={categories[activeIndex].title}
                fill
                className="object-cover w-full h-full"
              />
            </div>
            {/* Curtain Overlay */}
            <div
              ref={curtainRef}
              className="absolute inset-0 bg-[#5D3222] z-10 -translate-x-full"
            />
          </div>
        </div>

        {/* Right Column: Description & CTA */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full pt-0 md:pt-4 space-y-8 lg:space-y-12">
          <div ref={textContentRef} className="space-y-4 md:space-y-6">
            <h3 className="text-[24px] text-[#FFF2D6]  font-semibold  tracking-wider">
              {categories[activeIndex].title}
            </h3>
            <p className="text-[#FFF2D6] text-[24px] leading-relaxed opacity-90">
              {categories[activeIndex].description}s
            </p>
          </div>

          <div className="pt-4 md:pt-12">
            <Button
              variant="primary"
              size="md"
              className="text-[24px] bg-cream-light text-brown-medium w-fit md:w-auto"
            >
              CONNECT WITH US
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
