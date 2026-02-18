"use client";
import React, { useState } from "react";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

const faqs = [
  {
    id: 1,
    question: "How do I register for events like Rushabhayan 2026?",
    answer:
      "You can register through the Event Registration page by filling out the required details and completing the registration process.",
  },
  {
    id: 2,
    question: "Is on-spot registration available?",
    answer:
      "Yes, on-spot registration is available at the venue's registration desk, subject to availability of seats.",
  },
  {
    id: 3,
    question: "Will I receive a confirmation after registration?",
    answer:
      "Yes, you will receive a confirmation email and SMS with your registration details and a unique QR code upon successful registration.",
  },
  {
    id: 4,
    question: "How can I contact the Rushabhayan team?",
    answer:
      "You can reach out to us via the contact form on our website or email us at support@rushabhayan.com for any queries.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background Texture Overlay - Optional if image is available, otherwise relying on color */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#3e2723] font-didot">
            Frequently Asked <span className="italic">Questions</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col border-t border-[#3e2723]/20">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const number = (index + 1).toString().padStart(2, "0");

            return (
              <div
                key={faq.id}
                className="border-b border-[#3e2723]/20 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-start md:items-center py-6 md:py-8 text-left group focus:outline-none"
                >
                  <span className="text-xl md:text-2xl font-didot text-[#3e2723] mr-6 md:mr-10 opacity-70">
                    {number}
                  </span>

                  <span className="flex-1 text-lg md:text-xl font-medium text-[#3e2723]/90 font-manrope pr-8">
                    {faq.question}
                  </span>

                  <span className="mt-1 md:mt-0 text-[#3e2723] transition-transform duration-300">
                    {isOpen ? (
                      <CaretUp size={24} weight="light" />
                    ) : (
                      <CaretDown size={24} weight="light" />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] pb-8 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pl-12 md:pl-20 pr-4 md:pr-12 text-[#5d4037] font-manrope leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
