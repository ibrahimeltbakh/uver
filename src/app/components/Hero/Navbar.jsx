import React from "react";
import { Menu } from "lucide-react";
import GetEarlyAccess from "../buttons/GetEarlyAccess";

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
      <GetEarlyAccess />
    </nav>
  );
}
