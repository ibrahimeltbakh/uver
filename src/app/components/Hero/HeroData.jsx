"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Countdown from "./Countdown";
export default function HeroData() {
  const pRef = useRef(null);
  useEffect(() => {
    const element = pRef.current;
    if (!element) return;

    gsap.set(element, {
      x: -100,
      opacity: 0,
    });

    gsap.to(element, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);
  return (
    <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 w-full lg:w-1/3 order-2 lg:order-1">
      <p
        ref={pRef}
        className="text-gray-500 text-sm sm:text-base md:text-md font-bold w-full lg:w-auto mt-4 lg:mt-16 text-center lg:text-left">
        Discover, apply, succeed — UVER makes college search effortless. Your
        future starts here.
      </p>
      <Countdown />
    </div>
  );
}
