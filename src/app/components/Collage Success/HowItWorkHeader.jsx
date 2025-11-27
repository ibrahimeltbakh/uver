import React from "react";
import AnimatedText from "../animations/AnimatedText";

export default function HowItWorksHeader() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-5 items-center justify-center md:justify-between gap:3 flex-wrap w-full">
        <div className="flex items-center space-x-2">
          <div className="w-1 bg-blue-600 h-6 rounded-full"></div>
          <AnimatedText as="p" className="text-gray-700 text-lg font-medium">
            How It Works
          </AnimatedText>
        </div>

        <div className="grow text-center">
          <AnimatedText
            as="h1"
            className="text-xl md:text-2xl lg:text-6xl font-normal text-gray-900 leading-tight">
            Simple Steps to <br /> College Success
          </AnimatedText>
        </div>

        <div className="shrink-0 text-5xl">🎓</div>
      </div>
    </div>
  );
}
