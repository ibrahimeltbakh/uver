import React, { useState } from "react";
import { X, Search } from "lucide-react";

const MapSvg = ({ colorClass = "fill-gray-300", activeRegions = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 50"
    className="w-full h-auto max-h-16">
    {/* Base World Outline */}
    <path
      d="M 0 25 C 20 5, 80 5, 100 25 L 100 50 L 0 50 Z"
      className="fill-gray-100 stroke-gray-300 stroke-[0.5]"
    />

    {/* Active regions (Simplified placeholders) */}
    <g className={activeRegions}>
      {/* Any Place (All blue) */}
      {activeRegions.includes("fill-blue-600") &&
        activeRegions.includes("any-place") && (
          <path d="M 0 25 C 20 5, 80 5, 100 25 Z" />
        )}
      {/* USA */}
      {activeRegions.includes("usa") && (
        <path d="M 20 20 L 30 10 L 40 15 L 35 25 Z" />
      )}
      {/* EU */}
      {activeRegions.includes("eu") && (
        <path d="M 50 25 L 65 20 L 70 30 L 55 35 Z" />
      )}
      {/* Canada */}
      {activeRegions.includes("canada") && (
        <path d="M 30 10 L 45 5 L 60 10 L 55 20 Z" />
      )}
    </g>
  </svg>
);

// --- Helper Component: Location Selection Card (Map Grid Item) ---

const LocationCard = ({ label, mapClass, isActive = false }) => {
  // Generate the map visualization based on the label
  let mapSvg;
  let regions = "";

  switch (label) {
    case "Any place":
      regions = "any-place fill-blue-600";
      break;
    case "USA":
      regions = "usa fill-blue-600";
      break;
    case "EU":
      regions = "eu fill-blue-600";
      break;
    case "Canada":
      regions = "canada fill-blue-600";
      break;
    default:
      regions = "";
  }

  mapSvg = <MapSvg activeRegions={regions} />;

  return (
    <div
      className={`flex flex-col items-center justify-center p-3 rounded-xl h-40 cursor-pointer transition-all duration-300 ${
        isActive
          ? "border-2 border-blue-600 bg-blue-50 shadow-lg"
          : "border border-gray-200 bg-white hover:border-gray-300"
      }`}>
      <div className="h-24 w-full flex items-center justify-center p-2">
        {mapSvg}
      </div>
      <p
        className={`text-base font-medium mt-1 ${
          isActive ? "text-blue-700 font-semibold" : "text-gray-700"
        }`}>
        {label}
      </p>
    </div>
  );
};

const TabToggle = ({ activeTab, onTabChange }) => (
  <div className="flex bg-gray-100 p-1 rounded-full w-fit">
    <button
      onClick={() => onTabChange("Location")}
      className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
        activeTab === "Location"
          ? "bg-blue-600 text-white shadow-md"
          : "text-gray-700 hover:bg-gray-200"
      }`}>
      Location
    </button>
    <button
      onClick={() => onTabChange("University")}
      className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
        activeTab === "University"
          ? "bg-blue-600 text-white shadow-md"
          : "text-gray-700 hover:bg-gray-200"
      }`}>
      University
    </button>
  </div>
);

export default function SearchContent() {
  const [activeTab, setActiveTab] = useState("Location");

  const locations = [
    { label: "Any place", isActive: true },
    { label: "USA", isActive: false },
    { label: "EU", isActive: false },
    { label: "Canada", isActive: false },
    { label: "Australia", isActive: false },
    { label: "Asia", isActive: false },
  ];

  return (
    <div className="bg-white ">
      <div className="max-w-md mx-auto p-6 ">
        <header className="flex items-center justify-start relative ">
          <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors z-10">
            <X size={20} />
          </button>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <TabToggle activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
        </header>

        <main className="pb-4">
          <h1 className="text-xl font-bold text-gray-800 my-4 leading-normal">
            Where do you want to study?
          </h1>

          <div className="flex items-center bg-gray-100 p-3 rounded-xl mb-5 border border-gray-200">
            <Search size={20} className="text-gray-400 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search location"
              className="bg-transparent outline-none text-gray-700 text-base w-full placeholder-gray-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {locations.slice(0, 4).map((location) => (
              <LocationCard
                key={location.label}
                label={location.label}
                isActive={location.isActive}
              />
            ))}
          </div>
        </main>

        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-5 bg-white shadow-[0_-10px_15px_-3px_rgb(0_0_0/0.05)] border-t border-gray-100 rounded-b-3xl">
          <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/50">
            Search
          </button>
        </div>
      </div>

      <div className="h-16"></div>
    </div>
  );
}
