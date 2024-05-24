"use client";

import { sample } from "@/helpers/sampleData";
import { CarsType } from "@/types/types";
import { ReactNode, SetStateAction, createContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface CarsContextProps {
  carsData: CarsType[];
  setCarsData: React.Dispatch<SetStateAction<CarsType[]>>;
}

export const CarsContext = createContext<CarsContextProps>({
  carsData: [
    {
      image_url: "",
      make: "",
      model: "",
      year: "",
      price: "",
    },
  ],
  setCarsData: () => {},
});

const CarsContextProvider: React.FC<Props> = ({ children }) => {
  const [carsData, setCarsData] = useState<CarsType[]>(sample);

  return (
    <CarsContext.Provider value={{ carsData, setCarsData }}>
      {children}
    </CarsContext.Provider>
  );
};

export default CarsContextProvider;
