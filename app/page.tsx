import HeroSection from "./components/landing/HeroSection";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import StampComponent from "./components/landing/StampComponent";
import RollingBadge from "./components/landing/RollingBadge";
import AboutSection from "./components/landing/AboutSection";
import RecentlyPublished from "./components/landing/RecentlyPublished";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full max-w-screen">
      {/* Background - Removed "absolute", kept "fixed" */}
      <Image
        src="/assets/images/background.jpg"
        alt="Background"
        width={1920}
        height={1080}
        className="object-cover fixed  z-0  inset-0 -z-10 w-screen h-screen"
      />

      <div className="sticky top-0 z-50">
        <Marquee />
        <Navbar />
      </div>

      <HeroSection />

      <div className="relative z-20   h-screen ">
        <Image
          src="/assets/images/maskImage.png"
          alt="Image"
          fill
          className="object-cover fixed inset-0 -z-10 pointer-events-none"
          priority
        />

        <RollingBadge />
      </div>

      <StampComponent />
      <AboutSection />
      <RecentlyPublished />
    </div>
  );
}
