import React from "react";
import Image from "next/image";
import { MapPin, Star, Calendar } from "lucide-react";
export default function UniversityCard({
  name,
  location,
  deadline,
  rating,
  imageUrl,
}) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden my-4 border border-gray-100">
      <div className="h-32 bg-gray-200">
        <Image
          src={imageUrl}
          alt="University Image"
          className="w-full h-full object-cover"></Image>
      </div>

      <div className="p-3">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{name}</h3>

        <div className="flex items-center text-yellow-500 mb-2">
          {[...Array(fullStars)].map((_, i) => (
            <Star
              key={`full-${i}`}
              size={18}
              fill="currentColor"
              stroke="none"
              className="mr-0.5"
            />
          ))}
          {hasHalfStar && (
            <Star
              key="half"
              size={18}
              fill="currentColor"
              strokeWidth={1}
              className="mr-0.5"
            />
          )}
        </div>

        <div className="flex items-start text-gray-600 text-sm mb-2">
          <MapPin size={18} className="mr-2 mt-0.5 shrink-0 text-blue-500" />
          <p className="leading-tight font-medium">{location}</p>
        </div>

        <div className="flex items-center text-gray-500 text-sm">
          <Calendar size={18} className="mr-2 shrink-0" />
          <p className="leading-tight">
            Application deadline:{" "}
            <span className="font-medium text-gray-700">{deadline}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
