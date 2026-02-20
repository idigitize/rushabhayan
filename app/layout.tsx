import type { Metadata } from "next";
import "./globals.css";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import { Manrope } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "Rushabhayan - Home",
  description: "Discover the latest in premium fashion and accessories.",
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased font-manrope " + manrope.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
