import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ronaldo from "../../assets/ronaldo.jpg.png";

import { useDispatch } from "react-redux";
import { productsCart } from "../../slices/featureProduct";

const TopSelling = ({ title, id, price, image }) => {
  const dispatch = useDispatch();
  const handleChnage = (id) => {
    dispatch(productsCart(id));
  };
  return (
    <div
      key={id}
      className="lg:basis-1/5   flex flex-col justify-center items-center sm:p-2 "
    >
      <div className="rounded-2xl p-3  flex bg-bg-grey  flex-col justify-center items-center h-[298px] w-[295px] ">
        {/* <div className="rounded-2xl  flex  sm:flex-col justify-center items-center sm:h-[300px] sm:w-[300px] h-[200px] w-[200px] bg-bg-grey"> */}
        <img
          src={image}
          alt=""
          className="rounded-xl sm:h-[270px] h-[200px] w-[200px] sm:w-[260px]"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-sm">{title}</span>
          <span className="text-xl hidden">{id}</span>
          <span className="text-xl font-semibold flex gap-3">
            Price:
            <span>{price}</span>
          </span>
        </div>
      </div>

      <Link
        to="/single_products"
        className="sm:w-full flex flex-col items-center m-4 justify-center w-[50%]"
      >
        <button
          type="submit"
          onClick={() => handleChnage(id)}
          // onClick={() =>setsingleProduct(products.id)}
          className="text-black border-2 outline-none border-bg-grey  flex justify-center items-center font-semibold bg-white rounded-3xl sm:p-3 text-sm h-8 sm:w-[50%] w-full"
        >
          See More
        </button>
      </Link>
    </div>
  );
};

export default TopSelling;
