import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  produt: [],
  addToCart: [],

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
      
      
    }
  },
});

export const { fetchProducts, productsCart, addToCart, removeFromCart, updateCartQuantity } =
  productSlice.actions;
export default productSlice.reducer;
