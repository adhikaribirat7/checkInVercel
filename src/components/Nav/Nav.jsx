import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import NavDropDown from "./NavDropDown";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import InputSearchComponent from "./InputSearchComponent";
import { updateSearchProducts } from "../../slices/featureProduct";

const Nav = () => {
  const [totalProducts, settotalProducts] = useState();
  const [selectedProducts, setselectedProducts] = useState([]);
  const [onchange, setonchange] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenDiv, setIsDropdownOpenDiv] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  let timeoutId = null;

  useEffect(() => {
    handleChange(onchange);
  }, [onchange]);

  const handleChange = (event) => {
    if (event && event.trim() !== "") {
      const listOfData = products.filter((object) => {
        return object.title.toLowerCase().includes(event.toLowerCase());
      });
      setselectedProducts(listOfData);
      dispatch(updateSearchProducts(listOfData));
    }
  };
  const array_length = useSelector((state) => state.productReducer.addToCart);
  useEffect(() => {
    settotalProducts(array_length.length);
  }, [array_length]);

  const handleDropdownVisibility = (isVisible) => {
    if (isVisible) {
      clearTimeout(timeoutId);
      setIsDropdownOpen(true);
    } else {
      timeoutId = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 100);
    }
  };

  return (
    <div className="  col-span-12 flex sticky top-0 bg-white justify-evenly items-center p-2 h-16 ">
      <div className="flex justify-evenly  items-center gap-2 lg:basis-1/6">
        <RxHamburgerMenu className="lg:hidden block w-14 h-6" />
        <Link to="/" className="font-extrabold  lg:text-xl text-sm">
          VINTAGE SPORTS
        </Link>
      </div>

      <div className="hidden lg:flex items-center  justify-center sm:basis-2/5 gap-2 p-2">
        <NavDropDown />
        <Link to={"/all_products"} className="flex w-full justify-evenly">
          <span className="text-sm cursor-pointer">On sale</span>
          <span className="text-sm cursor-pointer">New arrivals</span>
          <span className="text-sm cursor-pointer">Brands</span>
        </Link>
      </div>

      <div className=" lg:p-2 z-50 lg:basis-1/4 flex flex-col  items-center h-full justify-center relative">
        <div className="flex w-full">
          <IoIosSearch className="p-2 bg-bg-grey font-semibold lg:h-10 h-8 rounded-l-full w-12 text-gray-500 ml-5" />
          <input
            onMouseEnter={() =>  handleDropdownVisibility(true)}
            onMouseLeave={() => handleDropdownVisibility( false)}
            type="text"
            onChange={(event) => setonchange(event.target.value)}
            className="w-full lg:h-10 h-8 border-none outline-none  bg-bg-grey rounded-l-sm rounded-r-full"
          />
        </div>

        {isDropdownOpen && (
          <div
            className="z-50 flex flex-col absolute top-full mt-1 bg-white shadow-md w-full"
            onMouseEnter={() =>  handleDropdownVisibility(true)}
            onMouseLeave={() => handleDropdownVisibility( false)}
          >
            {onchange.trim() !== "" &&
              selectedProducts.map((product) => {
                return (
                  <Link to="/all_products">
                    <InputSearchComponent
                      key={product.id}
                      title={product.title}
                    />
                  </Link>
                );
              })}
          </div>
        )}
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
