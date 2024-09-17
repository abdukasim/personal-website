"use client";
import Hero from "@/components/hero";
import Links from "@/components/links";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main
      className={`max-w-2xl py-12 px-6 sm:py-24 pb-24 mx-auto space-y-10
    transition-all duration-1000 ease-out
          ${
            isVisible
              ? "opacity-100 blur-none translate-y-0"
              : "opacity-0 blur-sm translate-y-2"
          }
    `}
    >
      <Hero />
      <Links />
    </main>
  );
}
