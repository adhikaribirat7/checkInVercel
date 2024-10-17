import React, { useEffect, useState } from "react";
import ronaldo from "../../assets/ronaldo.jpg.png";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../../slices/featureProduct";

const AddToCartSingleDetail = ({
  title,
  addToCartId,
  price,
  handleTotaLNumberOfProducts,
  image,
  element,
}) => {
  
  const cartProducts= useSelector((state)=>state.productReducer.addToCart)
  const initialQuantity = cartProducts.find((product) => product.id === element.id)?.quantity || 0;
  const [cartNumber, setCartNumber] = useState(initialQuantity);


  const dispatch = useDispatch();

  const handleDispatch = (addToCartId) => {
    dispatch(removeFromCart(addToCartId));
  };

  const handleCartChange = (event) => {
    if (event.target.innerText === "-") {
      if (cartNumber > 0) {
        setCartNumber((prev) => prev - 1);
      }
    } else if (event.target.innerText === "+") {
      setCartNumber((prev) => prev + 1);
    }
  };

  useEffect(() => {
    dispatch(updateCartQuantity({ ...element, quantity: cartNumber }))
  }, [cartNumber ]);
  return (
    <div className="border-4 rounded-xl bg-bg-grey  w-full lg:p-3 flex lg:gap-4 justify-start items-center sm:flex-row flex-col ">
      <div className="p-3">
        <img
          src={ronaldo}
          alt=""
          className="w-[250px]  border-2 border-white"
          srcSet=""
        />
      </div>
      <div className="  lg:w-[50%] p-2 flex h-full flex-col justify-evenly ">
        <div>
          <p>{title}</p>
          <p>{price}</p>
          <p>color</p>
          <p>Price</p>
        </div>
        <div className="flex flex-col justify-between items-center ">
          <button onClick={() => handleDispatch(addToCartId)}>
            <MdDelete className="text-4xl" />
          </button>
          <div className="flex">
            <button
              className="text-white text-center text-4xl font-semibold  rounded-l-xl px-1 w-14 bg-gray-800 "
              onClick={(event) =>
                 handleCartChange(event, addToCartId)
              }
            >
              -
            </button>
            <div className="flex w-8/12">
              <input
                type="text"
                value={cartNumber}
                readOnly
                className="bg-white text-sm text-gray-900 text-center focus:outline-none border  border-gray-600  w-full"
              />
            </div>
            <button
              className="text-white text-center text-4xl font-semibold  rounded-r-xl px-1 w-14 bg-gray-800 "
              onClick={(event) => handleCartChange(event)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartSingleDetail;
