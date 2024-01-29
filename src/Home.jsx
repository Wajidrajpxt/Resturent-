import React, { useState } from "react";
import { Data } from "./Data";
import Cate from "./Cate";

export default function Home() {
  const [data, setdata] = useState(Data);

  const func = (e) => {
    const selectedCategory = e.target.innerText;
    // console.log(selectedCategory,"selectedCategory");

    if (selectedCategory === "All") {
      setdata(Data);
      return;
    }


    
    const newItems = Data.filter((item) => item.categor === selectedCategory);
    setdata(newItems);
    
  };

  return (
    <>
      <div className=" flex justify-around bg-[silver] items-center flex-col">
        <h1 className="font-mono text-[60px] font-semibold text-[#21213e] pt-5 ">RESTURANT MENU</h1>

        <div className="h-[auto] w-[90%] ">
          <div className="flex pt-5 justify-around items-center">
            <button
              onClick={(e) => func(e)}
              className="h-[50px] w-[200px] bg-[blue]  text-white text-2xl"
            >
              All
            </button>
            <button
              onClick={(e) => func(e)}
              className="h-[50px] w-[200px] bg-[blue]  text-white text-2xl"
            >
              Breakfast
            </button>
            <button
              onClick={(e) => func(e)}
              className="h-[50px] w-[200px] bg-[blue]  text-white text-2xl"
            >
              Lunch
            </button>
            <button
              onClick={(e) => func(e)}
              className="h-[50px] w-[200px] bg-[blue]  text-white text-2xl"
            >
              Dinner
            </button>
            <button
              onClick={(e) => func(e)}
              className="h-[50px] w-[200px] bg-[blue] text-white text-2xl"
            >
              Drinks
            </button>
          </div>

          <div className="p-5 ">
            <Cate data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
