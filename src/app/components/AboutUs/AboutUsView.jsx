import React from "react";
import AnimatedText from "../animations/AnimatedText";

export default function AboutUsView() {
  return (
    <section className="relative  bg-(--secondary-color) py-24 md:py-32 lg:py-40 min-h-screen rounded-b-3xl overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/aboutUsVideo.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col md:flex-row  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white ">
        <div className="mb-8 w-full md:w-1/3">
          <AnimatedText
            as="h2"
            className="  border-l-3 border-l-(--main-color) px-3 py-1 text-md md:text-xl lg:text-2xl font-medium text-white ">
            About Us
          </AnimatedText>
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left py-5">
          <AnimatedText
            as="h2"
            className="text-xl sm:text-2xl lg:text-3xl font-normal indent-30 leading-tight mb-8">
            At UVER, we&apos;re on a mission to simplify the college search and
            application process. We value personalized support, equal access to
            education, and making the journey effortless for students worldwide.
          </AnimatedText>

          <AnimatedText
            as="p"
            className="text-lg md:text-xl text-gray-100 my-10 max-w-2xl indent-30 ">
            Our mission is to revolutionize college search and applications,
            providing personalized support and equal opportunities. We aim to
            simplify the process and empower students to make informed decisions
            for their educational journey.
          </AnimatedText>

          <button className=" px-4 py-3 rounded-full bg-[#4c8bff] text-white text-md font-medium hover:bg-[#1951bf] active:bg-[#0d3a8f] cursor-pointer whitespace-nowrap touch-manipulation transition-all duration-200 shadow-sm hover:shadow-md active:scale-95">
            Go To Careers 👉
          </button>
        </div>
      </div>
    </section>
  );
}
