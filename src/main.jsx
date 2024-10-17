import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store.js";
import Layout from "./pages/layout.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import { Provider } from "react-redux";
import Product from "./components/previewProducts/Product.jsx";
import AddToCart from "./components/addToCart/AddToCart.jsx";
import Products from "./components/products/Products.jsx";
import SignUp from "./components/login&signup/SignUp.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/single_products" element={<Product />} />
      <Route path="/cart" element={<AddToCart />} />
      <Route path="/all_products" element={<Products />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router} />
  </Provider>
);
