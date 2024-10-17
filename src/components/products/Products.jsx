import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { GiSettingsKnobs } from "react-icons/gi";
import { useSelector } from "react-redux";
import { MdArrowForwardIos } from "react-icons/md";
import AllProducts from "./AllProducts";
import { MdOutlineDangerous } from "react-icons/md";

const Products = () => {
  const [setProducts, setsetProducts] = useState([]);
  const products = useSelector((state) => state.productReducer.products);
  const searchedProducts = useSelector(
    (state) => state.productReducer.searchBar
  );
  useEffect(() => {
    console.log(searchedProducts);
    if (searchedProducts.length > 0) {
      setsetProducts(searchedProducts);
    } else {
      setsetProducts(products);
    }
  }, [searchedProducts]);

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
      <div className="col-span-12 lg:mt-20  flex  flex-col justify-center p-3 lg:gap-4 gap-2  ">
        {setProducts.length > 0 && (
          <p className="flex lg:justify-center justify-evenly  lg:w-[50%] w-full m-auto lg:text-3xl text-2xl font-semibold">
            All products
            <GiSettingsKnobs className="text-bg-gray lg:hidden block" />
          </p>
        )}
        <div className="flex justify-center items-start ">
          <div className=" border-4 lg:basis-1/4 border-x-bg-grey lg:border-none lg:flex hidden flex-col p-4 rounded-3xl  bg-white items-start justify-start gap-2">
            <p className="text-2xl font-semibold flex justify-between w-full">
              Filters
              <GiSettingsKnobs className="text-bg-gray lg:block hidden" />
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
          <div className=" lg:basis-7/12  flex justify-center flex-wrap gap-4   rounded-3xl p-3">
            {setProducts.length > 0 ? (
              setProducts.map((product) => (
                <AllProducts
                  key={product.id}
                  product={product}
                  title={product.title}
                  image={products.image}
                  id={product.id}
                  price={product.price}
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
      </div>
    </>
  );
};

export default Products;
