import React from "react";
import { Search, Menu } from "lucide-react";

import University1 from ".././../../../../public/University of Southern California.png";
import University2 from ".././../../../../public/University of California, Los Angeles.png";
import PhoneNavbar from "./../../PhoneNavbar";
import UniversityCard from "../../cards/UniversityCard";

const RecommendationsContent = () => {
  const resultsCount = 24;
  const currentSearch = "Los Angeles, California";

  const universityData = [
    {
      name: "University of Southern California",
      location: "Los Angeles, California, 90089, United States",
      rating: 4.8,
      deadline: "Aug 28",
      imageUrl: University1,
    },
    {
      name: "University of California, Los Angeles",
      location: "Los Angeles, California, 90095, United States",
      rating: 5.0,
      deadline: "Nov 30",
      imageUrl: University2,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-md mx-auto p-4 ">
        <header className="flex justify-between items-center mb-4">
          <div className="flex items-center grow bg-gray-50 p-2 pl-4 rounded-xl border border-gray-200">
            <Search size={20} className="text-gray-400 mr-2 shrink-0" />
            <span className="text-gray-800 text-base font-medium">
              {currentSearch}
            </span>
          </div>

          <button className="ml-3 p-2 rounded-xl bg-white text-gray-600 hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm">
            <Menu size={20} />
          </button>
        </header>

        <p className="text-sm font-semibold text-gray-700 mb-2">
          <span className="text-blue-600 font-extrabold">{resultsCount}</span>{" "}
          UNIVERSITIES FOUND
        </p>

        <main className="pb-3">
          {universityData.map((uni, index) => (
            <UniversityCard key={index} {...uni} />
          ))}
        </main>
      </div>

      <PhoneNavbar component="recomendations" />

      <div className="h-12"></div>
    </div>
  );
};

export default RecommendationsContent;
