"use client";
import React, { forwardRef } from "react";
import Navbar from "./Navbar";
import PhoneMock from "../PhoneMock";
import Countdown from "./Countdown";
import { Eye, MessageCircle, Pencil, Search } from "lucide-react";
import PhoneContent from "./HeroPhoneContent";

const HeroView = forwardRef(function HeroView({ phoneRef }, ref) {
  let topics = [
    { name: "search", icon: Search },
    { name: "chat", icon: MessageCircle },
    { name: "apply", icon: Pencil },
    { name: "track", icon: Eye },
  ];

  return (
    <>
      <section className="py-6 px-4 sm:py-6 sm:px-6 md:px-8 lg:px-10 bg-white w-full min-h-screen flex flex-col rounded-3xl ">
        <Navbar />
        <section className="flex flex-col lg:flex-row justify-evenly items-center  gap-8 lg:gap-4 pt-8 pb-12 ">
          <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 w-full lg:w-1/3 order-2 lg:order-1">
            <p className="text-gray-500 text-sm sm:text-base md:text-md font-bold w-full lg:w-auto mt-4 lg:mt-16 text-center lg:text-left">
              Discover, apply, succeed — UVER makes college search effortless.
              Your future starts here.
            </p>
            <Countdown />
          </div>
          <div className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2">
            <div ref={phoneRef}>
              <PhoneMock content={<PhoneContent />} />
            </div>
          </div>
          <div className="text-gray-500 w-full lg:w-1/3 flex justify-center lg:justify-center items-center ps-0 lg:ps-8 order-3 ">
            <ul className="flex flex-row lg:flex-col gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start">
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
        </section>
      </section>
    </>
  );
});

export default HeroView;
