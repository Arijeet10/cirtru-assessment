"use client";

import { CarsContext } from "@/context/CarsContextProvider";
import { LoadingContext } from "@/context/LoadingContextProvider";
import { sample } from "@/helpers/sampleData";
import { FiltersType } from "@/types/types";
import { useContext, useState } from "react";

const Filters = () => {
  const { setCarsData } = useContext(CarsContext);
  const { setLoading } = useContext(LoadingContext);

  const [filterData, setFilterData] = useState<FiltersType>({
    year: "",
    make: "",
    model: "",
    price: "",
  });

  const yearOptions: string[] = [
    ...new Set(sample.map((item) => item.year)),
  ].sort();
  const makeOptions: string[] = [
    ...new Set(sample.map((item) => item.make)),
  ].sort();
  const modelOptions: string[] = [
    ...new Set(sample.map((item) => item.model)),
  ].sort();

  const handleResetFilter = () => {
    setFilterData({
      year: "",
      make: "",
      model: "",
      price: "",
    });
    setCarsData(sample);
  };

  const handleFilter = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    if (
      !filterData.year &&
      !filterData.make &&
      !filterData.model &&
      !filterData.price
    ) {
      setLoading(false);
      setCarsData(sample);
    } else {
      const filteredData = sample.filter(
        (item) =>
          (!filterData.year || item.year.toString() === filterData.year) &&
          (!filterData.make ||
            item.make.toLowerCase().includes(filterData.make.toLowerCase())) &&
          (!filterData.model ||
            item.model
              .toLowerCase()
              .includes(filterData.model.toLowerCase())) &&
          (!filterData.price || item.price.toString() === filterData.price)
      );

      setTimeout(() => (setLoading(false), setCarsData(filteredData)), 2000);
    }
  };

  return (
    <>
      <div className=" p-[1rem] my-[1.5rem] bg-[#ffffff] shadow-sm rounded-md">
        <form
          onSubmit={(e) => handleFilter(e)}
          className=" text-[calc(0.9rem+0.1vw)]"
        >
          <div className="grid grid-cols-3 gap-[1vw]">
            <div className="p-[0.3rem]  border rounded-md ">
              <select
                className="w-full focus:outline-none bg-transparent hide-default-scrollbar"
                value={filterData.year}
                onChange={(e) =>
                  setFilterData({ ...filterData, year: e.target.value })
                }
              >
                <option value="">Year</option>
                {yearOptions.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>
            <div className="p-[0.3rem] border rounded-md">
              <select
                className="w-full focus:outline-none bg-transparent hide-default-scrollbar"
                value={filterData.make}
                onChange={(e) =>
                  setFilterData({ ...filterData, make: e.target.value })
                }
              >
                <option value="">Make</option>
                {makeOptions.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>
            <div className="p-[0.3rem] border rounded-md">
              <select
                className="w-full focus:outline-none bg-transparent hide-default-scrollbar"
                value={filterData.model}
                onChange={(e) =>
                  setFilterData({ ...filterData, model: e.target.value })
                }
              >
                <option value="">Model</option>
                {modelOptions.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>
            <div className="p-[0.3rem] border rounded-md">
              <input
                type="text"
                placeholder="Price"
                className="w-full focus:outline-none bg-transparent"
                value={filterData.price}
                onChange={(e) =>
                  setFilterData({ ...filterData, price: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex gap-[2vw] justify-end">
            <button
              onClick={() => handleResetFilter()}
              className="p-[0.3rem] w-[20vw] border rounded-md bg-pink-600 hover:bg-pink-700 text-[#ffffff] font-medium"
            >
              Reset
            </button>
            <button className="p-[0.3rem] w-[20vw] border rounded-md bg-indigo-500 hover:bg-indigo-700 text-[#ffffff] font-medium">
              Filter
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Filters;
