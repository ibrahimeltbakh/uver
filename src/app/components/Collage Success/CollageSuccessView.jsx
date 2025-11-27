import React from "react";

import HowItWorksHeader from "./HowItWorkHeader";
import university from "../../../../public/university-california-los-angeles.png";
import GetEarlyAccess from "../buttons/GetEarlyAccess";
import Features from "./Features";

export default function CollageSuccessView() {
  return (
    <div className="min-h-screen bg-white p-8 rounded-b-3xl">
      <HowItWorksHeader />

      <div className="max-w-6xl mx-auto">
        <div className="grid gap-y-10 gap-x-6  sm:grid-cols-2 lg:grid-cols-3">
          <Features />
          <div
            className="p-6  rounded-xl shadow-lg flex flex-col justify-end min-h-[250px] lg:col-span-1 hover:shadow-2xl transition-all duration-300 hover:-translate-2"
            style={{
              backgroundImage: `url(${university.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <h2 className="text-xl font-semibold text-white mb-4 ">
              Discover, apply, succeed – UVER app makes college search
              effortless.
            </h2>
            <GetEarlyAccess />
          </div>
        </div>
      </div>
    </div>
  );
}
