"use client";
import Navbar from "../components/Navbar";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";
import Image from "next/image";
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";
import { useState, useRef, useEffect } from "react";
import Button from "../components/ui/Button";

const forumItems = [
  {
    title: "Academic Conferences and Dialogues",
    description:
      "Research paper presentations, panel discussions, Dharma Sansads, and interfaith dialogues led by scholars, historians, philosophers, and spiritual leaders exploring art, governance, sustainability, and civilizational thought.",
  },
  {
    title: "Heritage and Knowledge Exhibitions",
    description:
      "Curated displays of ancient manuscripts, rare idols, civilizational models, and cultural artifacts that present tangible evidence of India's intellectual, artistic, and spiritual traditions.",
  },
  {
    title: "Live Art, Craft, and Skill Demonstrations",
    description: `Interactive zones showcasing traditional crafts, sculpture, painting, and performing arts, including the historic \"72 and 64 Skills\" that formed the foundation of many modern professions.`,
  },
  {
    title: "Youth, Innovation, and Learning Spaces",
    description:
      "Dedicated arenas for students, creators, and young innovators to engage with civilizational ideas through workshops, projects, competitions, and interactive educational experiences.",
  },
  {
    title: "Cultural Performances and Storytelling",
    description:
      "Evenings featuring classical and folk music, theatre, dance, and storytelling that bring civilizational history and philosophy to life through artistic expression.",
  },
  {
    title: "A Platform Connecting Past, Present, and Future",
    description:
      "Rushabhayan connects people directly with leading scholars and cultural voices, helping revive and re-engage with the knowledge systems that shaped civilization.",
  },
];

export default function AboutPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        {
          root: null,
          rootMargin: "-30% 0px -50% 0px",
          threshold: 0,
        },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="relative min-h-screen w-full max-w-screen flex flex-col bg-[#463E2D]">
      {/* Fixed Nav */}
      <Image
        src="/assets/images/background.webp"
        alt="Background"
        width={1920}
        height={1080}
        className="object-cover fixed  z-0  inset-0 -z-10 w-screen h-screen"
      />
      <div className="fixed w-full top-0 z-50">
        <Marquee />
        <Navbar />
      </div>

      {/* About Us Section */}
      <section
        className="about-us-section flex-1 z-10 bg-[#463E2D]"
        style={{
          color: "#FFF2D6",
          paddingTop: "140px", // accounts for fixed nav height
        }}
      >
        <div className="about-us-container">
          {/* Page Title */}
          <h1 className="about-us-title">ABOUT US</h1>

          {/* Intro Paragraph */}
          <p className="about-us-body">
            Rushabhayan is an international conference and art forum that
            explores India&apos;s civilizational roots through research,
            dialogue, and cultural expression.
          </p>

          {/* First Edition */}
          <div className="about-us-block">
            <h2 className="about-us-subheading flex flex-col  ">
              <div className="about-us-subheading-italic">
                The First Edition
              </div>
              <div className="w-3/4 about-us-underline" aria-hidden="true">
                <img
                  src="/assets/images/about/underlin.png"
                  alt="underline"
                  className=" w-full"
                />
              </div>
            </h2>

            <p className="about-us-body">
              The first edition in 2024 brought together more than 90 scholars
              from India and abroad, and led to the publication of the
              Rushabhayan Granth, a 700-page collection of original papers.
            </p>
          </div>

          {/* Second Edition */}
          <div className="about-us-block">
            <h2 className="about-us-subheading flex flex-col">
              <span className="about-us-subheading-italic">
                The Second Edition
              </span>
              <span className="about-us-divider w-[90%] " aria-hidden="true">
                <img
                  src="/assets/images/about/underlin.png"
                  alt="underline"
                  className="about-us-underline"
                />
              </span>
            </h2>
            <p className="about-us-body">
              The second edition, held in 2025, expanded both its scale and
              scope. Hosted in Mumbai, the conference featured keynote
              addresses, research paper presentations, panel discussions,
              exhibitions, and artistic showcases that reflected the depth and
              continuity of India&apos;s knowledge traditions.
            </p>
            {!isCollapsed && (
              <>
                <p className="about-us-body" style={{ marginTop: "1.5rem" }}>
                  A defining highlight of the second edition was the launch and
                  exhibition of over 1,100 publications, manuscripts, and rare
                  works, making it one of the most significant contemporary
                  efforts to document and present research related to Bhagwan
                  Rushabhdev and India&apos;s civilizational heritage. The forum
                  witnessed an overwhelming public response, with more than
                  1,00,000 visitors attending across its duration.
                </p>
                <p className="about-us-body" style={{ marginTop: "1.5rem" }}>
                  The event was attended and addressed by eminent dignitaries,
                  including the Union Minister Piyush Goyal and the Hon&apos;ble
                  Chief Minister of Maharashtra Devendra Fadnavis, along with
                  respected acharyas, monks, scholars, and thought leaders from
                  diverse traditions.
                </p>
                <p className="about-us-body" style={{ marginTop: "1.5rem" }}>
                  Organized by the Labdhi Vikram Jan Seva Trust in association
                  with the Government of Maharashtra, Rushabhayan connects
                  ancient knowledge systems with today&apos;s world and invites
                  people to rediscover where civilization began.
                </p>
              </>
            )}
            <p
              onClick={() => setIsCollapsed(true)}
              className="text-[#FFF2D6]  cursor-pointer text-[24px] pt-8 flex items-center gap-2"
            >
              <span className="underline underline-offset-4 ">
                {" "}
                Read {isCollapsed ? "More" : "Less"}{" "}
              </span>
              <span>{isCollapsed ? <CaretDownIcon /> : <CaretUpIcon />} </span>
            </p>

            <div className="pt-4 md:pt-20">
              <Button
                variant="primary"
                size="md"
                className="text-[24px] mt-8 md:mt-0 bg-cream-light text-brown-medium w-fit md:w-auto"
              >
                CONNECT WITH US
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section bg-[url('/assets/images/background.webp')] bg-cover bg-center bg-no-repeat">
        <h2 className="partners-title relative">
          Our <span className="partners-italic">Partners</span>
        </h2>
        <div className="flex overflow-hidden w-full">
          <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around">
            <img
              src="/assets/images/about/01.png"
              alt="Partner 1"
              className="partner-logo"
            />
            <img
              src="/assets/images/about/02.png"
              alt="Partner 2"
              className="partner-logo"
            />
            <img
              src="/assets/images/about/03.png"
              alt="Partner 3"
              className="partner-logo"
            />
            <img
              src="/assets/images/about/04.png"
              alt="Partner 4"
              className="partner-logo"
            />
          </div>
          <div
            className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around"
            aria-hidden="true"
          >
            <img
              src="/assets/images/about/01.png"
              alt="Partner 1"
              className="partner-logo"
            />
            <img
              src="/assets/images/about/02.png"
              alt="Partner 2"
              className="partner-logo"
            />
            <img
              src="/assets/images/about/03.png"
              alt="Partner 3"
              className="partner-logo"
            />
            <img
              src="/assets/images/about/04.png"
              alt="Partner 4"
              className="partner-logo"
            />
          </div>
        </div>
      </section>

      {/* The Forum Presents Section */}
      <section className="forum-section bg-[url('/assets/images/background.webp')] bg-cover bg-center bg-no-repeat">
        <div className="forum-container ">
          {/* Left Column */}
          <div className="forum-left relative z-10 w-full md:w-1/3 px-4 md:px-0 md:pl-10 mb-8 md:mb-0">
            <h2 className="forum-left-title">The Forum Presents</h2>
            <p className="forum-left-desc">
              Rushabhayan is designed as a living civilizational experience,
              where knowledge is not only presented, but seen, heard, and
              experienced. Visitors can expect:
            </p>
          </div>

          {/* Right Column */}
          <div className="forum-right w-full md:w-1/2 px-4 md:px-0">
            <div className="forum-timeline">
              {forumItems.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="forum-item relative z-10"
                  style={{
                    opacity: activeIndex === index ? 1 : 0.6,
                    transition: "opacity 0.4s ease",
                  }}
                >
                  <div className="forum-dot" />
                  <div className="forum-item-content">
                    <h3 className="forum-item-title">{item.title}</h3>
                    <p className="forum-item-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .about-us-section {
          width: 100%;
        }

        .about-us-container {
          max-width: 100%;
          margin: 0 auto;
          padding: 80px 145px 100px;
        }

        .about-us-title {
          font-family: "Didot Title", "Didot", serif;
          font-size: 64px;
          font-weight: 400;
          color: #fff2d6;
          letter-spacing: 0.06em;
          line-height: 1.1;
          margin: 0 0 48px 0;
        }

        .about-us-body {
          font-family: "Manrope", sans-serif;
          font-size: 24px;
          font-weight: 400;
          color: #fff2d6;
          line-height: 1.65;
          margin: 0;
        }

        .about-us-block {
          margin-top: 64px;
        }

        .about-us-subheading {
          font-family: "Didot", serif;
          font-size: 40px;
          font-weight: 400;
          color: #fff2d6;

          gap: 6px;
          width: fit-content;
        }

        .about-us-subheading-italic {
          width: fit-content;
        }

        .about-us-divider {
        }

        .about-us-underline {
          height: auto;
          margin-top: -10px;
          margin-bottom: 20px;
        }

        /* ── Partners Section ── */
        .partners-section {
          width: 100%;

          background-color: transparent;
          color: #fff2d6;
          padding: 10px 0;
          overflow: hidden;
        }

        .partners-title {
          font-family: "Didot Title", "Didot", serif;
          font-size: 32px;
          font-weight: 400;
          color: #5e2a16;
          position: relative;
          z-index: 50;
          margin-left: 40px;
          margin-bottom: 10px;
        }

        .partners-italic {
          font-style: italic;
        }

        .partner-logo {
          height: auto;
          max-height: 200px;
          object-fit: contain;
          margin: 0 40px;
        }

        /* ── Forum Presents Section ── */
        .forum-section {
          width: 100%;
          background-color: transparent;
          color: #fff2d6;
        }

        .forum-container {
          display: flex;
          gap: 80px;
          padding: 130px 0;
          align-items: flex-start;
        }

        .forum-left {
          position: sticky;
          top: 140px;
        }

        .forum-left-title {
          font-family: "Didot Title", "Didot", serif;
          font-size: 48px;
          font-weight: 400;
          color: #5e2a16;
          line-height: 1.15;
          margin: 0 0 28px 0;
          letter-spacing: 0.02em;
        }

        .forum-left-desc {
          font-family: "Manrope", sans-serif;
          font-size: 24px;
          font-weight: 600;
          color: #5e2a16;
          margin: 0;
        }

        .forum-timeline {
          position: relative;
          padding-left: 36px;
        }

        .forum-timeline::before {
          content: "";
          position: absolute;
          left: 10px;
          top: 30px;
          bottom: 220px;
          width: 3px;
          background: #5e2a16;
        }
        @media (max-width: 768px) {
          .forum-timeline::before {
            bottom: 350px;
          }
        }

        .forum-item {
          position: relative;
          margin-bottom: 60px;
        }

        .forum-item:last-child {
          margin-bottom: 0;
        }

        .forum-dot {
          position: absolute;
          left: -36px;
          top: 20px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #5e2a16;
          flex-shrink: 0;
        }

        .forum-item-content {
          display: flex;
          flex-direction: column;
          gap: 26px;
        }

        .forum-item-title {
          font-family: "Didot", serif;
          font-size: 54px;
          font-weight: 400;
          color: #5e2a16;
          line-height: 1.1;
          margin: 0;
          letter-spacing: 0.01em;
        }

        .forum-item-desc {
          font-family: "Manrope", sans-serif;
          font-size: 24px;
          font-weight: 500;
          color: #5e2a16;
          margin: 0;
        }

        @media (max-width: 1280px) {
          .about-us-container {
            padding: 80px 80px 100px;
          }
          .forum-container {
            padding: 80px 80px;
          }
        }

        @media (max-width: 1024px) {
          .about-us-container {
            padding: 70px 60px 90px;
          }
          .about-us-title {
            font-size: 52px;
          }
          .about-us-subheading {
            font-size: 34px;
          }
          .about-us-body {
            font-size: 20px;
          }
          .forum-container {
            padding: 70px 60px;
            gap: 60px;
          }

          .forum-left-title {
            font-size: 38px;
          }
          .forum-left-desc {
            font-size: 18px;
          }
          .forum-item-title {
            font-size: 40px;
          }
          .forum-item-desc {
            font-size: 18px;
          }
        }

        @media (max-width: 768px) {
          .about-us-container {
            padding: 60px 16px 80px;
          }
          .about-us-title {
            font-size: 64px;
          }
          .about-us-subheading {
            font-size: 36px;
          }
          .about-us-body {
            font-size: 24px;
          }
          .partners-title {
            font-size: 32px;
          }
          .forum-container {
            padding: 60px 16px;
            flex-direction: column;
            gap: 40px;
          }
          .forum-left {
            position: static;
            flex: none;
          }
          .forum-left-title {
            font-size: 36px;
          }
          .forum-left-desc {
            font-size: 24px;
          }
          .forum-item-title {
            font-size: 32px;
          }
          .forum-item-desc {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .about-us-container {
            padding: 50px 16px 70px;
          }
          .about-us-title {
            font-size: 64px;
          }
          .about-us-subheading {
            font-size: 36px;
          }
          .about-us-body {
            font-size: 24px;
          }
          .partners-title {
            font-size: 32px;
            margin-left: 16px;
          }
          .forum-container {
            padding: 40px 0;
            flex-direction: column;
            gap: 20px;
          }
          .forum-left {
            position: static;
            flex: none;
            display: block;
          }
          .forum-left-title {
            font-size: 36px;
          }
          .forum-left-desc {
            font-size: 24px;
          }
          .forum-item-title {
            font-size: 32px;
          }
          .forum-item-desc {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}
