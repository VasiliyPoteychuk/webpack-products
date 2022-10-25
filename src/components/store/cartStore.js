import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


export const cartProductSlice = createSlice({
  name: 'cart',
  initialState:{
    items: []
  },
  reducers: {
    addToCart(state, action){
      
       if (state.items.some(item=> item.id===action.payload.id)) {
        state.items.filter(item=> item.id===action.payload.id).count += 1//додомать логику
         state.items[action.payload.id-1].count += 1
       }else{
        state.items.push(action.payload)  
       }
          
        
      
    },
    increment(state, action){
      state.items[action.payload.id-1].count += 1
    },
    decrement(state, action){
      state.items[action.payload.id-1].count -= 1
      state.items= state.items.filter(item=> item.count>0)
    },
  },
});

export default cartProductSlice.reducer
export  const {addToCart, increment, decrement} = cartProductSlice.actions;
export const productsOnCart =state=>state.cart.items;


