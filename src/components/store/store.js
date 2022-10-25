import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productStore'
import cartProductsReducer from './cartStore'

export default  configureStore({
  reducer: {
   products: productsReducer,
   cart: cartProductsReducer,
  }
})