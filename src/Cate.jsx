import React from "react";

const Cate = ({ data}) => {
  return (
    <>
      <div className="   flex justify-around flex-wrap gap-2">
        {data.map((items) => {
          return (
            <div className="h-[auto] w-[30%] border bg-[#6e6e98]  flex justify-around items-center flex-col  ">
              <div className=" h-[250px] w-[100%] ">
                <img className="h-[100%] w-[100%]" src={items.img} alt="" />
              </div>
              <div>
                <h4 className="text-[white] text-[20px]"> {items.name}</h4>
                <h2 className="text-[white] text-[20px]"> {items.price}</h2>
                <p className="text-[white] text-[20px]">{items.categor}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Cate;
