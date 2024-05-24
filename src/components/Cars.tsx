"use client";

import CarsCard from "./CarsCard";
import { useContext } from "react";
import { CarsContext } from "@/context/CarsContextProvider";
import { CarsType } from "@/types/types";
import { LoadingContext } from "@/context/LoadingContextProvider";
import Loading from "./Loading";

const Cars = () => {
  const { carsData } = useContext(CarsContext);
  const { loading } = useContext(LoadingContext);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="px-[0.3rem] py-[1.5rem]  grid gap-[1vw] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {carsData &&
            carsData.map((car: CarsType, index: number) => {
              return <CarsCard key={index} car={car} />;
            })}
        </div>
      )}
    </>
  );
};

export default Cars;
