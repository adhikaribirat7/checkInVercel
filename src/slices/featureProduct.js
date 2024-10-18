import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  produt: [],
  addToCart: [],
  searchBar:[],

};

export const productSlice = createSlice({
  name: "featureProduct",
  initialState,
  reducers: {
    fetchProducts: (state, action) => {

      action.payload.forEach((product) => {
        const newProduct = {
          id: nanoid(),
          title: product.title,
          price:product.price,
          rating:product.rating,
          description:product.description,
        };
        state.products.push(newProduct);

      });
    },
    productsCart: (state, action) => {
      // console.log(action.payload.image)
      state.produt = action.payload;
    },
    addToCart: (state, action) => {
      state.addToCart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.addToCart = state.addToCart.filter(

        (product) => product.id !== action.payload
      );
    },
    updateCartQuantity(state, action) {
      const {id,quantity} =action.payload
      console.log(id,quantity)
      const productInCart = state.addToCart.find((product) => product.id === id);

      if (productInCart) {
        productInCart.quantity = quantity;
      }
      
      
    },
    updateSearchProducts(state,action){
      console.log(action.payload)
      state.searchBar=action.payload

    }
  },
});

export const { fetchProducts, productsCart, addToCart, removeFromCart, updateCartQuantity,updateSearchProducts } =
  productSlice.actions;
export default productSlice.reducer;
