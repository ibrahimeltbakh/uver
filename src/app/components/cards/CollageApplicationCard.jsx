import React from "react";
import Image from "next/image";

export default function CollageApplicationCard({ image }) {
  return (
    <div className="bg-gray-300 min-h-1/2 p-4 pb-0 flex justify-center items-center rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-2 ">
      <div className="w-[90%] h-full bg-gray-200">
        <Image
          src={image.imageUrl}
          alt="University Image"
          className="w-full h-full object-cover"></Image>
      </div>
    </div>
  );
}
