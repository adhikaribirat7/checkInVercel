import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { GiSettingsKnobs } from "react-icons/gi";
import { useSelector } from "react-redux";
import { MdArrowForwardIos } from "react-icons/md";
import AllProducts from "./AllProducts";
import { MdOutlineDangerous } from "react-icons/md";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);

  const list_of_Products = [
    "Jersey's",
    "Socks",
    "Football boots",
    "Football Socks",
    "Inner's",
    "Shin Pads",
    "Retro Kit's",
    "Ball Bags",
    "Grip Socks",
    "Sports T-Shirt",
    "Foot ball's",
    "Basket Ball's",
    "Volley Ball's",
    "Football net",
    "Volley ball net",
    "Cutting Socks",
    "BasketBall net",
    "Cricket Balls",
    "Custom Jersey",
    "Hand Grip",
    "Sports Pants",
    "Flags",
  ];
  const list_Size = [
    "small",
    "Medium",
    "Large",
    "X-large",
    "XX-Large",
    "XXX-large",
  ];
  return (
    <>
      <div className="col-span-12 mt-20  flex lg:flex-row flex-col justify-center p-3 gap-4 ">
        <div className="lg:basis-1/4 border-4 border-x-bg-grey lg:border-none lg:flex hidden flex-col p-4 rounded-3xl  bg-white items-start justify-start gap-2">
          <p className="text-2xl font-semibold flex justify-between w-full">
            Filters
            <GiSettingsKnobs className="text-bg-gray" />
          </p>
          <hr className="w-full mt-1 bg-white border-1 "></hr>
          <div className="lg:flex hidden  gap-2 flex-wrap pl-2">
            {list_of_Products.map((product) => (
              <span
                key={product}
                className="flex  items-center  justify-between w-full"
              >
                {product}
                <MdArrowForwardIos />
              </span>
            ))}

            <hr className="w-full bg-white border-1 mt-5"></hr>
          </div>

          <div className="mt-5 w-full">
            <Box sx={{ width: "full" }}>
              <p className="text-2xl font-semibold ">Price</p>
              <Slider
                defaultValue={150}
                aria-label="Default"
                valueLabelDisplay="auto"
                sx={{ color: "#000", width: "50%" }}
              />
            </Box>
          </div>

          <p className="text-2xl font-semibold flex flex-col ">Size</p>
          <div className="flex flex-wrap gap-2 ">
            {list_Size.map((size) => (
              <button
                key={size}
                className=" text-sm border-2 border-bg-gray p-2 w-[100px] h-[30px] flex justify-center items-center text-black  rounded-3xl  cursor-pointer"
              >
                {size}
              </button>
            ))}
            <hr className="w-full mt-5 bg-white border-1 "></hr>
          </div>

          <button className="bg-black p-2 mt-5 w-20 rounded-md text-white text-xl">
            Filter
          </button>
        </div>

        <div className="  basis-7/12 flex justify-center flex-wrap gap-4   rounded-3xl p-3">
          {products.length > 0 ? (
            products.map((product) => (
              <AllProducts
                key={product.id}
                product={product}
                title={product.title}
                id={product.id}
              />
            ))
          ) : (
            <h1 className="text-5xl text-red-600 font-semibold flex gap-4 items-center justify-center">
              Please first visit home page
              <MdOutlineDangerous />
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
