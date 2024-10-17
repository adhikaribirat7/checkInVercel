import React from "react";
import ronaldo from "../../assets/ronaldo.jpg.png";
import { Link } from "react-router-dom";

function BrowseByStyle() {
  return (
    <div className=" bg-bg-grey rounded-3xl m-auto gap-4 p-3 col-span-12 mt-20 flex flex-col justify-center items-center">
      <span className="text-4xl font-extrabold">BROWSE BY CATEGORY</span>
      <div className="flex flex-wrap gap-2 justify-center ">
        <div className="bg-white p-3 rounded-3xl lg:basis-1/5 basis-4/5">
          <Link
          to={"/all_products"}>
            Football Accecories
            <img
              src={ronaldo}
              alt=""
              className="rounded-xl sm:h-[270px] h-[200px] w-[200px] sm:w-[260px]"
            />
          </Link>
        </div>
        <div className="bg-white p-3 rounded-3xl lg:basis-3/4 basis-4/5"
       >
          <Link
          to={"all_products"}>G.K
          <img
            src={ronaldo}
            alt=""
            className="rounded-xl sm:h-[270px] h-[200px] w-[200px] sm:w-[260px]"
          />
          </Link>
        </div>
        <div className="bg-white p-3 rounded-3xl basis-4/5 lg:basis-3/4">
          <Link
          to={"all_products"}>Track shuit
          <img
            src={ronaldo}
            alt=""
            className="rounded-xl sm:h-[270px] h-[200px] w-[200px] sm:w-[260px]"
          />
          </Link>
        </div>
        <div className="lg:basis-1/5 basis-4/5 bg-white p-3 rounded-3xl">
          <Link
          to={"all_products"}
          >GYM
          <img
            src={ronaldo}
            alt=""
            className="rounded-xl sm:h-[270px] h-[200px] w-[200px] sm:w-[260px]"
          />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BrowseByStyle;
