import React from "react";
import AddToCartproduct from "./AddToCartproduct";

const AddToCart = () => {
  return (
    <div className="col-span-12 mt-20  gap-4 lg:px-20 flex flex-col justify-center items-center ">
      <span className="sm:text-6xl  text-4xl font-bold">YOUR CART</span>
      <AddToCartproduct />
    </div>
  );
};

export default AddToCart;
