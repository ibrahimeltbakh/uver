"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedText({
  children,
  as: Component = "span",
  className = "",
  start = "top 80%",
  delay = 0.07,
  duration = 0.3,
  triggerRef = null,
  ...props
}) {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    const triggerElement = triggerRef?.current || element;

    const originalText = element.innerHTML;

    // مسح النص الأصلي
    element.innerHTML = "";

    // تقسيم النص حسب <br> أو newline
    const lines = originalText.split(/<br\s*\/?>|\n/i);

    lines.forEach((line, lineIndex) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) {
        element.appendChild(document.createElement("br"));
        return;
      }

      const words = trimmedLine.split(/\s+/);
      words.forEach((word, wordIndex) => {
        const span = document.createElement("span");
        span.textContent = word + (wordIndex < words.length - 1 ? " " : "");
        span.style.opacity = "0";
        span.style.whiteSpace = "pre-wrap";
        element.appendChild(span);
      });

      if (lineIndex < lines.length - 1) {
        element.appendChild(document.createElement("br"));
      }
    });

    const wordSpans = Array.from(element.children).filter(
      (el) => el.tagName !== "BR"
    );

    gsap.fromTo(
      wordSpans,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerElement,
          start,
          toggleActions: "play none none none",
        },
      }
    );
  }, [children, triggerRef, start, delay, duration]);

  return (
    <Component ref={textRef} className={className} {...props}>
      {children}
    </Component>
  );
}
