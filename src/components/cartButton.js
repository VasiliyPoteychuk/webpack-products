import { addToCart, productsOnCart } from "./store/cartStore"
import { useDispatch } from "react-redux";

export  function CartButton(product){
  const dispatch = useDispatch()

  function saveToCart(product){
    
       dispatch(addToCart(product))
  }

  return(
    <button 
      onClick={()=> saveToCart(product)} 
      className='addCartButton'
    >
      &#11015;добавить в корзину
    </button>
  )
}