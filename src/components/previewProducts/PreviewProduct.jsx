import React, { useEffect, useState } from "react";
import ronaldo from "../../assets/ronaldo.jpg.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slices/featureProduct";

function PreviewProduct({ valid_product }) {


  const dispatch = useDispatch();
  const [singleProduct, setsingleProduct] = useState(0);
  const cartItems = useSelector((state) => state.productReducer.addToCart);

  const handleAddToCart = (id) => {
    setsingleProduct(id);
  };
  useEffect(() => {
    if (singleProduct && !cartItems.some((item) => item === singleProduct)) {
      dispatch(addToCart(singleProduct));
    }
  }, [singleProduct]);

  return (
    <>
      <div className=" h-[100%]  lg:w-[50%] w-full flex justify-center items-center lg:flex-row flex-col gap-5 p-3 ">
        <div className="flex lg:flex-row flex-col h-full w-full lg:flex-wrap   gap-2 justify-center items-center ">
          <div className="bg-bg-grey lg:basis-56 rounded-lg flex justify-center w-full">
            <img
              src={valid_product && valid_product.image}
              alt=""
              className="rounded-xl sm:h-[270px] h-[200px] w-[200px] sm:w-auto"
            />
          </div>
        
          <div className="bg-bg-grey lg:basis-56 rounded-lg flex justify-center w-full">
            <img
              src={valid_product && valid_product.image}
              alt=""
              className="rounded-xl sm:h-[270px] h-[200px] w-[200px] sm:w-auto"
            />
          </div>
        
          <div className="bg-bg-grey lg:basis-56 rounded-lg flex justify-center w-full">
            <img
              src={valid_product && valid_product.image}
              alt=""
              className="rounded-xl sm:h-[270px] h-[200px] w-[200px] sm:w-auto"
            />
          </div>
  
        
        </div>
    
      </div>
      <div className=" h-[100%] lg:w-[50%] p-3  flex flex-col sm:justify-start justify-center items-center sm:items-start gap-2">
        {valid_product ? (
          <div className="flex flex-col justify-center items-start">
            <p className=" flex items-center justify-center gap-2">
              <span className="text-2xl">
                {valid_product.title}
              </span>
            </p>
            <p className=" flex items-center justify-center gap-2">
              <span>Price:</span>
              <span className="text-gray-400 text-sm">
                {valid_product.price}
              </span>
            </p>

            <p className=" flex items-center justify-center gap-2">
              <span>Ratings:</span>
              <span className="text-gray-400 text-sm">
                {valid_product.rating.rate}
              </span>
            </p>

            <p className="flex flex-wrap gap-1">
              <span>Description:</span>
              <span className="text-gray-300 text-sm">
                {valid_product.description}
              </span>
            </p>
          </div>
        ) : (
          <span className="sm:text-6xl text-4xl font-extrabold">
            {valid_product ? valid_product.title : "first select product"}
          </span>
        )}

        <hr className="w-full bg-bg-grey border-1 "></hr>
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-2xl text-gray-400 semibold">Choose Size</p>
          <div className="flex sm:flex-row flex-wrap gap-3">
            <button
              className="w-20 h-8 flex justify-center items-center bg-bg-grey rounded-full  text-sm font-semibold"
              type="submit"
            >
              Small
            </button>
            <button
              className="w-20 h-8 flex justify-center items-center bg-bg-grey rounded-full  text-sm font-semibold"
              type="submit"
            >
              Medium
            </button>
            <button
              className="w-20 h-8 flex justify-center items-center bg-bg-grey rounded-full  text-sm font-semibold"
              type="submit"
            >
              Large
            </button>
            <button
              className="w-20 h-8 flex justify-center items-center bg-bg-grey rounded-full  text-sm font-semibold"
              type="submit"
            >
              x-large
            </button>
          </div>
        </div>
        <hr className="w-full bg-bg-grey border-1 "></hr>

        <div className="flex  gap-3 justify-evenly  items-center w-full h-20">
          <div className="sm:w-1/2 w-full">
            <button
              type="submit"
              className="text-white bg-black rounded-full p-2 sm:text-2xl w-full"
              onClick={() => handleAddToCart(valid_product )}
            >
              Add to cart
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default PreviewProduct;
