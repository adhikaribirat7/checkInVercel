import React, { useEffect, useState } from "react";

import { GiSettingsKnobs } from "react-icons/gi";
import { useSelector } from "react-redux";
import { MdArrowForwardIos } from "react-icons/md";
import AllProducts from "./AllProducts";
import { MdOutlineDangerous } from "react-icons/md";
import Filter from "./Filter";

const Products = () => {
  const [isFilterVisisble, setIsFilterVisisble] = useState(false);

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

  return (
    <>
      <div className="col-span-12 lg:mt-20  flex  flex-col justify-center p-3 lg:gap-4 gap-2  ">
        {setProducts.length > 0 && (
          <div className="flex lg:justify-center justify-evenly  lg:w-[50%] w-full m-auto lg:text-3xl text-2xl font-semibold  ">
            All products
            <GiSettingsKnobs
              className="text-bg-gray lg:hidden block"
              onClick={() => setIsFilterVisisble((prev) => !prev)}
            />
            {isFilterVisisble && (
              <div className="z-50 lg:hidden h-auto bg-white   border-1  translate-x-8 translate-y-8 rounded-xl flex flex-col lg:p-1 absolute pr-4 bshadow-md max-w-60 px-2  shadow-lg ring-1 ring-black ring-opacity-5">
                <Filter />
              </div>
            )}
          </div>
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
            <Filter />

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
