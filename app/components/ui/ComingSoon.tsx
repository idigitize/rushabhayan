"use client";
import React from "react";
import Link from "next/link";
import Button from "./Button";

interface ComingSoonProps {
  title: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title }) => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-[url('/assets/images/background.webp')] bg-cover bg-center">
      <h1 className="text-5xl md:text-8xl font-didot text-brown-dark mb-6 animate-fade-in">
        {title}
      </h1>
      <div className="w-24 h-px bg-brown-dark/30 mb-8" />
      <p className="text-xl md:text-2xl font-manrope text-brown-medium mb-12 max-w-2xl uppercase tracking-widest">
        Something extraordinary is in the works. Stay tuned.
      </p>
      <Link href="/">
        <Button variant="primary" size="md" className="text-lg">
          BACK TO HOME
        </Button>
      </Link>
    </div>
  );
};

export default ComingSoon;
