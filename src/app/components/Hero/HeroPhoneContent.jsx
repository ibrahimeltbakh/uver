import React from "react";
import { Search, MapPin, Bell, Star, Settings2 } from "lucide-react"; // Using lucide-react for icons
import Image from "next/image";
import University1 from "../../../../public/University of Southern California.png";
import PhoneNavbar from "./../PhoneNavbar";
import UniversityCard from "./../cards/UniversityCard";

const SubjectTag = ({ icon, label, isActive = false }) => (
  <button
    className={`flex items-center px-2 py-1 rounded-full text-[10px] font-medium  transition-colors ${
      isActive
        ? "bg-blue-600 text-white"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}>
    {icon && <span className="mr-2 text-sm">{icon}</span>}
    {label}
  </button>
);

export default function PhoneContent() {
  const userName = "John";

  const universityData = [
    {
      name: "University of Southern California",
      location: "Los Angeles, California, 90089, United States",
      rating: 4.5,
      deadline: "",
      imageUrl: University1,
    },
  ];

  return (
    <div className="max-w-md mx-auto h-full  ">
      <header className=" flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
          <p className="text-gray-800 text-base text-ms">Hello,{userName}</p>
        </div>
        <Bell size={24} className="text-gray-600 " />
      </header>

      <main className="py-4">
        <h1 className="text-md font-bold text-gray-600">
          Search and apply to the best universities
        </h1>

        <div className="flex justify-center md:justify-between gap-2 md:gap-1 items-center flex-wrap md:flex-nowrap   md:py-3 my-2">
          <div className="flex items-center  md:p-1">
            <button className="p-1 rounded-lg text-gray-600 hover:bg-gray-200">
              <Search />
            </button>
            <input
              type="text"
              placeholder="Search university, location"
              className="bg-transparent outline-none text-gray-700 text-sm"
            />
          </div>
          <button className="md:p-1 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-200">
            <Settings2 />
          </button>
        </div>

        <div className="flex flex-wrap space-x-2  mb-4 text-sm">
          <SubjectTag
            className=""
            label="Accounting"
            isActive={true}
            icon="📊"
          />
          <SubjectTag label="Architecture" icon="🏛️" />
          <SubjectTag label="Art" icon="🎨" />
          <SubjectTag label="Design" icon="📐" />
          <SubjectTag label="Business" icon="🔴" />
          <button className="px-2 py-1 rounded-full text-sm font-medium text-blue-600 bg-white border border-gray-200 hover:bg-gray-50">
            Show 30+
          </button>
        </div>

        <p className="text-gray-700 font-medium mb-1 text-sm">
          <span className="text-(--main-color)">220</span> UNIVERSITIES FOUND
        </p>

        {universityData.map((uni, index) => (
          <UniversityCard key={index} {...uni} />
        ))}
      </main>

      <PhoneNavbar component="hero" />
      <div className="h-12"></div>
    </div>
  );
}
