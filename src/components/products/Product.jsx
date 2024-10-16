import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PreviewProduct from "./PreviewProduct";
import NewArrivals from "./NewArrivals";

function Product() {
  const id = useSelector((state) => state.productReducer.produt);
  const product_single = useSelector((state) => state.productReducer.products);
  const [object, setobject] = useState("");
  const valid_product = product_single.find((product) => product.id === id);
  useEffect(() => {
    if (valid_product && valid_product !== object) {
      setobject(valid_product);
    }
  }, [valid_product, object]);

  return (
    <div className="sm:col-span-12 col-span-7  flex  flex-col p-3 gap-4 justify-center items-center h-auto">
      <div className="flex sm:flex-row rounded-3xl flex-col gap-4 justify-center items-center w-full">
        <PreviewProduct product_object={object} />
      </div>
      <NewArrivals title={"YOU MIGHT ALSO LIKE"}/>
    </div>
  );
}

export default Product;
