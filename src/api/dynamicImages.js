import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  method: "get",
});

export const getProduct = async () => {
  // const asin ="B0CFSX431Z"
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const newArrivals = async () => {
  // const asin ="B0CFSX431Z"
  try {
    const response = await api.get(`/products?limit=5`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
