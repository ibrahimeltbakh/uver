"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Hourglass } from "lucide-react";

export default function Countdown() {
  const countdownRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!countdownRef.current) return;

    const digitEls = countdownRef.current.querySelectorAll(
      "[data-countdown-digit]"
    );

    const timeline = gsap.timeline({ delay: 0.3 });

    if (textRef.current) {
      timeline.fromTo(
        textRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }

    timeline.fromTo(
      digitEls,
      { yPercent: 60, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.12,
      },
      "-=0.2"
    );

    return () => timeline.kill();
  }, []);

  const countdownBlocks = [
    { label: "days", value: "23" },
    { label: "hours", value: "22" },
    { label: "minutes", value: "43" },
  ];

  return (
    <section
      ref={countdownRef}
      className="flex flex-col gap-3 sm:gap-4 md:gap-5 transition-all duration-300">
      <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-md flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 transition-all duration-300">
        <Hourglass className="text-gray-600" size={16} strokeWidth={1.5} />
        <span ref={textRef}>Launching starts in</span>
      </p>
      <div className="text-gray-600 flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 transition-all duration-300">
        {countdownBlocks.map((block, index) => (
          <div
            key={block.label}
            className="text-gray-600 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex flex-col justify-center transition-all duration-300"
            data-countdown-digit>
            <span className="leading-none">
              {block.value}
              {`${index !== countdownBlocks.length - 1 ? ":" : ""}`}
            </span>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-xl font-normal mt-0.5 sm:mt-1">
              {block.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
