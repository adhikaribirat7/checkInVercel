import React, { useState } from "react";
import { useSelector } from "react-redux";
import TopSelling from "./TopSelling"

const TopSellings = () => {
  const [length, setLength] = useState(15);
  const [isviewMore, setIsViewMore] = useState(false);
  const products = useSelector((state) => state.productReducer.products);
  const lengthHandeler = () => {
    setIsViewMore((prev) => !prev);
    if (isviewMore) {
      setLength(15);
    } else {
      setLength(20);
    }
  };
  return (
    <div
      className="sm:col-span-12  p-3  col-span-7 w[100%] flex mt-24  
flex-col justify-center items-center gap-4 "
    >
      <p className="sm:text-6xl text-3xl font-extrabold">
       Top Sellings
      </p>
      <div className="w-full flex  flex-wrap justify-center  ">
        {products.slice(10, length).map((obj) => (
          <TopSelling
            key={obj.id}
            id={obj.id}
            title={obj.title}
            price={obj.price}
            image={obj.image}
          />
        ))}
      </div>
      <button
        type="submit"
        onClick={() => lengthHandeler()}
        className="border-2 border-gray-300 p-2 rounded-full
       w-44 text-sm font-semibold"
      >
        {!isviewMore ? " View More" : "View Less"}
      </button>
      {/* <hr className="sm:w-full bg-white border-2 "></hr> */}
    </div>
  );
};

export default TopSellings;
