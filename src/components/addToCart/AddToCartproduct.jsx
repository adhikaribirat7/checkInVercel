import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToCartSingleDetail from "./AddToCartSingleDetail";
import { TbMoodEmptyFilled } from "react-icons/tb";

const AddToCartproduct = () => {
  const quantity = useSelector((state) => state.productReducer.addToCart);
  const products_all = useSelector((state) => state.productReducer.products);
  // useEffect(() => {
  //   console.log(products_all);
  // }, [products_all]);

  const [list, setlist] = useState([]);

  useEffect(() => {
    setlist(quantity.map((object) => object.quantity));
  }, [quantity]);

  const [addToCartId, setaddToCartId] = useState([]);
  const [totalNUmberOfProducts, setTotalNUmberOfProducts] = useState();

  const [isFull, setisFull] = useState(false);
  const objectId = useSelector((state) => state.productReducer.addToCart);
  const handleCartFull = () => {
    if (Array.isArray(addToCartId) && addToCartId.length > 0) {
      setisFull(true);
    } else if (Array.isArray(addToCartId) && addToCartId.length === 0) {
      setisFull(false);
    }
  };

  // }
  const handleTotaLNumberOfProducts = (newObject) => {
    setTotalNUmberOfProducts(newObject.quantity);
  };

  useEffect(() => {
    setaddToCartId((prev) => objectId);
    // console.log(objectId);
  }, [objectId]);

  useEffect(() => {
    handleCartFull();
  }, [addToCartId]);

  return (
    <div className=" w-full flex justify-center items-center  p-3 lg:flex-row gap-3 flex-col ">
      <div className="flex flex-col w-full  gap-2  rounded-3xl">
        {isFull ? (
          addToCartId.map((element) => (
            <AddToCartSingleDetail
              key={element.id}
              element={element}
              title={element.title}
              addToCartId={element.id}
              price={element.price}
              handleTotaLNumberOfProducts={handleTotaLNumberOfProducts}
            />
          ))
        ) : (
          <h1 className="flex text-red-500 font-semibold gap-4 items-center justify-center sm:text-5xl text-xl  w-full ">
            EMPTY !!
            <TbMoodEmptyFilled className="text-red-500 sm:text-5xl text-6xl" />
          </h1>
        )}
      </div>

      {isFull && (
        <div className="border-4 rounded-xl justify-start items-center flex flex-col gap-4 border-bg-grey h-auto self-start lg:w-[40%] w-full p-3">
          <span className="text-4xl font-semibold">Order Summary</span>
          <div className="flex flex-col w-full gap-2">
            <span className="text-xl text-bg-gray"></span>
            <span className="text-xl text-bg-gray">Total Price: </span>
            <span className="text-xl text-bg-gray">Discount:</span>
            <span className="text-xl text-bg-gray">Delivery Fee:</span>
            <span className="text-xl text-bg-gray">
              Total Number of Products:
              {list.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
              }, 0)}
            </span>
            <hr className="sm:w-full bg-white border-2 "></hr>
            <span className="text-xl">Final Total:</span>
          </div>
          <button className="w-full border-2 border-white text-white bg-black p-3 rounded-full text-xl">
            Check Out
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCartproduct;
