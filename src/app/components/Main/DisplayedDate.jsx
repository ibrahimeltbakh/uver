"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import PhoneMock from "../PhoneMock";

export default function DisplayedDate({ data, phoneContainerRef }) {
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(h1Ref.current, {
      opacity: 1,
      x: 50,
      duration: 0.8,
    }).from(
      pRef.current,
      {
        opacity: 1,
        x: 50,
        duration: 0.8,
      },
      "-=0.4"
    );
  }, [data]);

  return (
    <>
      <section className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap justify-center items-center lg:items-start lg:justify-start gap-8  w-full h-full">
        <div className="flex flex-col h-full py-10 w-full lg:w-1/2 justify-center lg:justify-start items-center lg:items-start gap-4 lg:gap-8">
          <h1
            ref={h1Ref}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold  ">
            {data.h1}
          </h1>

          <p
            ref={pRef}
            className="text-gray-500 text-sm md:text-md lg:text-lg text-center lg:text-left indent-20">
            {data.p}
          </p>
        </div>

        <div
          ref={phoneContainerRef}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
          <PhoneMock content={data.phoneContent} />
        </div>
      </section>
    </>
  );
}
