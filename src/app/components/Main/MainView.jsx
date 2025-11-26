"use client";

import React, { useState } from "react";

import DisplayedDate from "./DisplayedDate";
import Sidebar from "./Sidebar";
import { menu } from "./MainSectiondata";

export default function MainView({ phoneContainerRef }) {
  const [DataToDisplay, setDataToDisplay] = useState(menu[0].data);

  return (
    <>
      <main className="bg-(--secondary-color) py-6 md:py-8 lg:py-28 px-2 md:px-4 lg:px-6 w-full min-h-screen flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start rounded-b-3xl gap-6 lg:gap-2 ">
        <div className="w-full lg:w-[15%] flex justify-center lg:justify-start items-start ">
          <Sidebar setDataToDisplay={setDataToDisplay} />
        </div>
        <div className="w-full lg:w-[85%] flex justify-center lg:justify-start items-center lg:items-start">
          <DisplayedDate
            data={DataToDisplay}
            phoneContainerRef={phoneContainerRef}
          />
        </div>
      </main>
    </>
  );
}
