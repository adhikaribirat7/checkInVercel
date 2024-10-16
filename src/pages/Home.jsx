import React, { useEffect, useState } from "react";

import Hero from "../components/Hero/Hero";
import Brands from "../components/Hero/Brands";
import NewArrival from "../components/products/NewArrivals";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../slices/featureProduct";
import { getProduct } from "../api/dynamicImages";
// import TopSelling from "../components/products/TopSelling";
import TopSellings from "../components/products/TopSellings";
import BrowseByStyle from "../components/Hero/BrowseByStyle";


const Home = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState();

  const productImage = () => {
    const fetchData = async () => {
      const result = await getProduct();
      setProducts(result);
    dispatch(fetchProducts(result));

    };
    fetchData();
  };

  useEffect(() => {
    productImage();
  }, []);

  // useEffect(() => {
  //   dispatch(fetchProducts(products));
  // }, [products]);

  return (
    <>
      <Hero />
      <Brands/>
      <NewArrival/>
      <TopSellings/>
      <BrowseByStyle/>

    </>
  );
};

export default Home;
