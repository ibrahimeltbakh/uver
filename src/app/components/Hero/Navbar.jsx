import React from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-3 sm:mb-4 gap-2 sm:gap-3 md:gap-4 transition-all duration-300">
      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal uppercase text-gray-400 transition-all duration-300">
        uver
      </h1>
      <div className="flex items-center touch-manipulation">
        <button className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 touch-manipulation">
          <Menu color="#757778" size={18} className="sm:w-5 sm:h-5" />
        </button>
      </div>
      <button className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full bg-[#4c8bff] text-white text-[11px] sm:text-xs md:text-sm lg:text-base font-medium hover:bg-[#1951bf] active:bg-[#0d3a8f] cursor-pointer whitespace-nowrap touch-manipulation transition-all duration-200 shadow-sm hover:shadow-md active:scale-95">
        <span className="hidden sm:inline">Get Early Access </span>
        <span className="sm:hidden">Access</span>
        <span className="hidden sm:inline">📱</span>
      </button>
    </nav>
  );
}
