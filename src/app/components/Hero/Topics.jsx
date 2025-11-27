"use client";
import React, { useEffect, useRef } from "react";
import { Eye, MessageCircle, Pencil, Search } from "lucide-react";
import { gsap } from "gsap";

export default function Topics() {
  const topicsRef = useRef(null);
  const topics = [
    { name: "search", icon: Search },
    { name: "chat", icon: MessageCircle },
    { name: "apply", icon: Pencil },
    { name: "track", icon: Eye },
  ];

  useEffect(() => {
    const items = topicsRef.current?.children;
    if (!items) return;

    gsap.set(items, {
      x: 100,
      opacity: 0,
    });

    gsap.to(items, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.15,
    });
  }, []);

  return (
    <div className="text-gray-500 w-full lg:w-1/3 flex justify-center lg:justify-center items-center ps-0 lg:ps-8 order-3 ">
      <ul
        ref={topicsRef}
        className="flex flex-row lg:flex-col gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start">
        {topics.map((item) => (
          <li
            key={item.name}
            className="flex justify-start items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <item.icon className="text-gray-600" size={18} />
            <span className="capitalize">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
