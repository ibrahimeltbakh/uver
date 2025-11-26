import React from "react";
import { Star, Calendar } from "lucide-react";
import Image from "next/image";

const StatusBadge = ({ status }) => {
  let colorClass = "";
  let bgColorClass = "";

  switch (status) {
    case "RECEIVED":
      colorClass = "text-blue-700";
      bgColorClass = "bg-blue-100";
      break;
    case "UNDER REVIEW":
      colorClass = "text-yellow-700";
      bgColorClass = "bg-yellow-100";
      break;
    case "ACCEPTED":
      colorClass = "text-green-700";
      bgColorClass = "bg-green-100";
      break;
    case "REJECTED":
      colorClass = "text-red-700";
      bgColorClass = "bg-red-100";
      break;
    default:
      colorClass = "text-gray-700";
      bgColorClass = "bg-gray-100";
      break;
  }

  return (
    <span
      className={`inline-block px-2 py-0.5 mt-2 rounded-full text-xs font-bold ${colorClass} ${bgColorClass}`}>
      {status}
    </span>
  );
};
export default function ApplicationCard({
  name,
  applicationDate,
  rating,
  imageUrl,
  status,
}) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-start bg-white rounded-xl my-2 py-2 border-b border-gray-100 last:border-b-0">
      <div className="w-16 h-16 rounded-lg bg-gray-200 shrink-0 mr-4 shadow-sm overflow-hidden">
        <Image
          src={imageUrl}
          alt={`${name} building`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grow">
        <h3 className="text-base font-semibold text-gray-800">{name}</h3>
        <div className="flex items-center text-yellow-500 my-1">
          {[...Array(fullStars)].map((_, i) => (
            <Star
              key={`full-${i}`}
              size={14}
              fill="currentColor"
              stroke="none"
              className="mr-0.5"
            />
          ))}
          {hasHalfStar && (
            <Star
              key="half"
              size={14}
              fill="currentColor"
              strokeWidth={1}
              className="mr-0.5"
            />
          )}
        </div>

        <div className="flex items-center text-gray-500 text-xs">
          <Calendar size={14} className="mr-1 shrink-0" />
          <p className="leading-tight">
            Application date:{" "}
            <span className="font-medium text-gray-700">{applicationDate}</span>
          </p>
        </div>

        <StatusBadge status={status} />
      </div>
    </div>
  );
}
