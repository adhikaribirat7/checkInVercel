import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import NavDropDown from "./NavDropDown";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { HiOutlineEmojiSad } from "react-icons/hi";

const Nav = () => {
  const [totalProducts, settotalProducts] = useState();

  const array_length = useSelector((state) => state.productReducer.addToCart);
  useEffect(() => {
    settotalProducts(array_length.length);
  }, [array_length]);
  return (
    <div className="  col-span-12 flex sticky top-0 bg-white justify-evenly items-center p-2 ">
      <div className="flex justify-evenly   items-center sm:basis-1/6">
        <RxHamburgerMenu className="sm:hidden block" />
        <Link to="/" className="font-extrabold sm:text-3xl text-xl">
          VINTAGE SPORTS
        </Link>
      </div>

      <div className="hidden sm:flex items-center justify-center sm:basis-2/5 gap-2 p-2">
        <NavDropDown />
        <Link
          to={"/all_products"}
          className="flex w-full justify-evenly"
        >
          <span className="text-sm cursor-pointer">On sale</span>
          <span className="text-sm cursor-pointer">New arrivals</span>
          <span className="text-sm cursor-pointer">Brands</span>
        </Link>
      </div>

      <div className=" p-2 basis-1/4 flex items-center h-full justify-center">
        <IoIosSearch className="p-2 bg-bg-grey font-semibold h-10 rounded-l-full w-12 text-gray-500 ml-5" />
        <input
          type="text"
          className="w-full h-10 border-none outline-none  bg-bg-grey rounded-l-sm rounded-r-full"
        />
      </div>
      <div className="text-sm basis-24 h-full  items-center  flex justify-around">
        <Link to="/cart" className="flex items-center gap-2 justify-center">
          <span className="text-sm flex-col">
            {totalProducts == 0 ? "" : totalProducts}
          <CiShoppingCart className="text-2xl " />

          </span>

          <IoPersonOutline className="text-xl self-end" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
