"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`text-center
      
    `}
      id="hero"
    >
      <h1
        className={`
          inline-block text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none
        
        `}
      >
        Hi, I'm Abdu
      </h1>
      <p
        className={`md:text-xl mt-2 mb-8 inline-block text-white
        `}
      >
        Software Engineer turned Entrepreneur. I love building things and
        helping people. Very active on Twitter.
      </p>

      <Button variant={"secondary"}>About</Button>
    </section>
  );
}
