import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


export const cartProductSlice = createSlice({
  name: 'cart',
  initialState:{
    items: []
  },
  reducers: {
    addToCart(state, action){

      state.items.push(action.payload)
    },
    increment(state, action){
      state.items[action.payload-1].count += 1
    },
    decrement(state, action){
      state.items[action.payload-1].count -= 1
      state.items= state.items.filter(item=> item.count>0)
    },
  },
});

export default cartProductSlice.reducer
export  const {addToCart, increment, decrement} = cartProductSlice.actions;
export const productsOnCart =state=>state.cart.items;


