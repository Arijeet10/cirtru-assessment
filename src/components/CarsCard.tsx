"use client";

import { CarsType } from "@/types/types";
import { useState } from "react";

interface Props {
  car: CarsType;
}

const CarsCard: React.FC<Props> = ({ car }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="bg-[#ffffff] shadow-sm rounded-md ">
        <div
          className={`relative h-[70%] transition-transform ${
            isHovered ? "transform scale-105" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-full h-full">
            <img
              src={`${car.image_url}`}
              alt="car image"
              className={`w-full h-full object-cover ${isHovered?'rounded-md':'rounded-t-md'}`}
            />
          </div>
          <div className="p-[0.2rem] absolute top-2 right-2 text-[calc(0.9rem+0.1vw)] font-medium bg-slate-100 rounded-sm shadow-sm">
            {car.year}
          </div>
        </div>
        <div className="p-[0.3rem] text-slate-700 h-[30%]">
          <div className="text-[calc(1.3rem+0.1vw)] font-semibold ">
            {car.make}
          </div>
          <div className="text-[calc(0.9rem+0.1vw)] font-medium italic">
            {car.model}
          </div>
          <div className="">${car.price}</div>
        </div>
      </div>
    </>
  );
};

export default CarsCard;
