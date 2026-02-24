import ComingSoon from "../components/ui/ComingSoon";
import Navbar from "../components/Navbar";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full max-w-screen">
      <Image
        src="/assets/images/background.webp"
        alt="Background"
        width={1920}
        height={1080}
        className="object-cover fixed inset-0 -z-10 w-screen h-screen"
      />

      <div className="fixed w-full top-0 z-50">
        <Marquee />
        <Navbar />
      </div>

      <div className="pt-32">
        <ComingSoon title="About Us" />
      </div>

      <Footer />
    </div>
  );
}
