import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/featureProduct"
// import productsCart from "../slices/singleProduct";


const rootReducer = combineReducers({
  productReducer:productReducer, 
  // productsCart:productsCart,
})
export const store = configureStore({
  reducer:rootReducer,
  
})
