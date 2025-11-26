"use client";

import React, { useState } from "react";
import { menu } from "./MainSectiondata";
export default function Sidebar({ setDataToDisplay }) {
  const [active, setActive] = useState("College Search");

  return (
    <section>
      <ul className="flex flex-row  lg:flex-col flex-wrap justify-center lg:justify-start gap-4 ">
        {menu.map((item) => (
          <li
            key={item.key}
            onClick={() => {
              setActive(item.key);
              setDataToDisplay(item.data);
            }}
            className={`
              cursor-pointer px-3 py-2 rounded-lg transition-all
              ${
                active === item.key
                  ? "border-l-2 border-l-(--main-color) text-white font-medium shadow"
                  : "text-gray-700 hover:bg-gray-100"
              }
            `}>
            {item.key}
          </li>
        ))}
      </ul>
    </section>
  );
}
