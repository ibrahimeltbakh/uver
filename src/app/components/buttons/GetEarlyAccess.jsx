import React from "react";

export default function GetEarlyAccess() {
  return (
    <button className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full bg-[#4c8bff] text-white text-[11px] sm:text-xs md:text-sm lg:text-base font-medium hover:bg-[#1951bf] active:bg-[#0d3a8f] cursor-pointer whitespace-nowrap touch-manipulation transition-all duration-200 shadow-sm hover:shadow-md active:scale-95">
      <span className="hidden sm:inline">Get Early Access </span>
      <span className="sm:hidden">Access</span>
      <span className="hidden sm:inline">📱</span>
    </button>
  );
}
