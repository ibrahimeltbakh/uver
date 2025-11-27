"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function PhoneMock({ content }) {
  const phoneRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    gsap.set(contentRef.current, {
      y: 100,
      opacity: 0,
    });

    gsap.to(contentRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2,
    });
  }, [content]);

  const handlePhoneMove = (event) => {
    if (!phoneRef.current) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 14;
    const rotateX = (0.5 - (event.clientY - bounds.top) / bounds.height) * 14;

    gsap.to(phoneRef.current, {
      rotationY: rotateY,
      rotationX: rotateX,
      z: 24,
      duration: 0.4,
      ease: "power2.out",
    });
  };
  const resetPhone = () => {
    if (!phoneRef.current) return;

    gsap.to(phoneRef.current, {
      rotationY: 0,
      rotationX: 0,
      z: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  return (
    <div
      className="hero-phone-wrapper perspective-distant "
      onMouseMove={handlePhoneMove}
      onMouseLeave={resetPhone}>
      <div
        ref={phoneRef}
        className="phone-mock w-[95%] transform transform-3d  bg-linear-to-r from-[#f4f4f4] to-[#ffffff] border-8 border-[#050505] rounded-4xl p-2">
        <div className="w-[50%] h-4 bg-[#050505] rounded-b-2xl m-auto my-1 " />

        <div ref={contentRef} className="h-full">
          {content}
        </div>
      </div>
    </div>
  );
}
