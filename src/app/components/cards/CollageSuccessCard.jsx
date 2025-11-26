import React from "react";

export default function CollageSuccess({ icon, title, description }) {
  return (
    <div className="relative bg-blue-600 p-6 rounded-xl shadow-lg flex flex-col h-full hover:shadow-2xl transition-shadow duration-300">
      {/* Curved top-left folder corner */}
      <div className="absolute -top-5 left-0 w-24 h-8 bg-blue-600 rounded-tl-[20px] rounded-tr-[90px]"></div>

      <div className="flex items-center justify-start mb-4">
        <div className="text-4xl text-white">{icon}</div>
      </div>

      <div className="grow">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-blue-200 text-sm">{description}</p>
      </div>
    </div>
  );
}
