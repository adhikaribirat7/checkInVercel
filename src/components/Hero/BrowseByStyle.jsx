import React from "react";
import ronaldo from "../../assets/ronaldo.jpg.png";

function BrowseByStyle() {
  return (
    <div className=" bg-bg-grey rounded-3xl m-auto gap-4 p-3 col-span-12 mt-20 flex flex-col justify-center items-center">
      <span className="text-4xl font-extrabold">BROWSE BY CATEGORY</span>
      <div className="flex flex-wrap gap-2 justify-center ">
        <div className="bg-white p-3 rounded-3xl lg:basis-1/5 basis-4/5">
          <span>
            Football Accecories
            <img
              src={ronaldo}
              alt=""
              className="rounded-xl sm:h-[270px] h-[200px] w-[200px] sm:w-[260px]"
            />
          </span>
        </div>
        <div className="bg-white p-3 rounded-3xl lg:basis-3/4 basis-4/5">
          <span>G.K</span>
          <img
            src={ronaldo}
            alt=""
            className="rounded-xl sm:h-[270px] h-[200px] w-[200px] sm:w-[260px]"
          />
        </div>
        <div className="bg-white p-3 rounded-3xl basis-4/5 lg:basis-3/4">
          <span>Track shuit</span>
          <img
            src={ronaldo}
            alt=""
            className="rounded-xl sm:h-[270px] h-[200px] w-[200px] sm:w-[260px]"
          />
        </div>
        <div className="lg:basis-1/5 basis-4/5 bg-white p-3 rounded-3xl">
          <span>GYM</span>
          <img
            src={ronaldo}
            alt=""
            className="rounded-xl sm:h-[270px] h-[200px] w-[200px] sm:w-[260px]"
          />
        </div>
      </div>
    </div>
  );
}

export default BrowseByStyle;
