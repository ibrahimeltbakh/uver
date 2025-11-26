import React from "react";
import CollageApplicationHeader from "./CollageApplicationHeader";
import CollageApplicationCard from "../cards/CollageApplicationCard";
import cahtImage from ".././../../../public/chat.png";
import recommendationImage from ".././../../../public/recommendations.png";
import graduationImage from ".././../../../public/graduationImage.png";

export default function CollageApplicationView() {
  const images = [
    { imageUrl: recommendationImage },
    { imageUrl: recommendationImage },
    { imageUrl: cahtImage },
    { imageUrl: cahtImage },
  ];

  return (
    <div className="min-h-screen bg-white p-8 rounded-b-3xl">
      <CollageApplicationHeader />

      <div className="bg-white py-16 px-4 md:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5 items-center justify-center md:justify-between gap:3  w-full">
          <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8  ">
            {images.map((image, index) => (
              <CollageApplicationCard key={index} image={image} />
            ))}
          </div>
          <div
            className="w-full lg:w-1/4 h-full rounded-2xl shadow-2xl overflow-hidden flex flex-col p-6 "
            style={{
              backgroundImage: `url('${graduationImage.src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <div className="text-6xl mb-10">
              <span role="img" aria-label="Graduation Cap">
                🧑‍🎓
              </span>
            </div>
            <div className="hidden lg:block min-h-[500px] "></div>
            <div className=" text-white">
              <p className=" text-xl md:text-2xl text-gray-500  leading-tight mb-8 lg:min-h-[300px] ">
                Get ready to experience the future of college applications with
                UVER
              </p>
              <button className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-white bg-transparent text-white hover:bg-white/10 transition">
                <span className="text-2xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
