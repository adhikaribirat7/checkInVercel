import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/featureProduct"
// import productsCart from "../slices/singleProduct";


const rootReducer = combineReducers({
  productReducer:productReducer, 
})
export const store = configureStore({
  reducer:rootReducer,
  
})
