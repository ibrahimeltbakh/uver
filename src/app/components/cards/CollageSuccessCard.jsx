import React, { useRef } from "react";
import AnimatedText from "../AnimatedText";

export default function CollageSuccess({ icon, title, description }) {
  return (
    <div className="relative bg-blue-600 p-6 rounded-xl shadow-lg flex flex-col h-full hover:shadow-2xl transition-all duration-300 hover:-translate-2  ">
      <div className="absolute -top-5 left-0 w-24 h-8 bg-blue-600 rounded-tl-[20px] rounded-tr-[90px]"></div>

      <div className="flex items-center justify-start mb-4">
        <div className="text-4xl text-white">{icon}</div>
      </div>

      <div className="grow">
        <AnimatedText as="h3" className="text-xl font-semibold text-white mb-2">
          {title}
        </AnimatedText>
        <AnimatedText as="p" className="text-blue-200 text-sm">
          {description}
        </AnimatedText>
      </div>
    </div>
  );
}
