import Products from "./components/products";
import Product from "./components/product";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Cart from "./components/cart";
import './App.css'

export default function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Products/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/products/:id" element={<Product/>}/> 
    <Route path="/cart" element={<Cart/>}/>
  </Routes>
  </BrowserRouter>  
  
  );
}

