import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewArrivals from "../products/NewArrivals";
import PreviewProduct from "./PreviewProduct";


function Product() {
  const id = useSelector((state) => state.productReducer.produt);
  const product_single = useSelector((state) => state.productReducer.products);
  // const [object, setobject] = useState([]);
  const valid_product = product_single.find((product) => product.id === id);
  // useEffect(() => {
  //   console.log(valid_product)
  //   setobject(valid_product)
  // }, [product_single]);
  return (
    <div className="col-span-12  flex  flex-col p-3 gap-4 justify-center items-center h-auto">
      <div className="flex lg:flex-row rounded-3xl flex-col gap-4 justify-center  items-center w-full">
        <PreviewProduct valid_product={valid_product} />
      </div>
      <NewArrivals title={"YOU MIGHT ALSO LIKE"}/>
    </div>
  );
}

export default Product;
