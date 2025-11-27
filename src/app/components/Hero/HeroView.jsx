"use client";
import React, { forwardRef } from "react";
import Navbar from "./Navbar";
import PhoneMock from "../PhoneMock";
import PhoneContent from "./HeroPhoneContent";
import Topics from "./Topics";
import UverWord from "./UverWord";
import HeroData from "./HeroData";

const HeroView = forwardRef(function HeroView({ phoneRef }, ref) {
  return (
    <>
      <section className=" py-6 px-4 sm:py-6 sm:px-6 md:px-8 lg:px-10 bg-white w-full min-h-screen flex flex-col rounded-3xl ">
        <Navbar />
        <section className="flex flex-col lg:flex-row justify-evenly items-center  gap-8 lg:gap-4 pt-8 pb-12 ">
          <HeroData />
          <div className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2">
            <div ref={phoneRef}>
              <PhoneMock content={<PhoneContent />} />
            </div>
          </div>
          <Topics />
        </section>

        <UverWord />
      </section>
    </>
  );
});

export default HeroView;
