import { createSlice } from "@reduxjs/toolkit";


export const cartProductSlice = createSlice({
  name: 'cart',
  initialState:{
    cartItems: []
  },
  reducers: {
    addToCart(state, action){
      state.cartItems.push(action.payload)
    }
  },
});


export default cartProductSlice.reducer
export  const {addToCart} = cartProductSlice.actions;
export const productsOnCart =state=>state.cart.cartItems;
