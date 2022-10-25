import { addToCart, productsOnCart } from "./store/cartStore"
import { useDispatch, useSelector } from "react-redux";

export  function CartButton(product){
  const dispatch = useDispatch()
  const cartProducts = useSelector(productsOnCart)
  

  function saveToCart(product){
    const item= {...product, count: 1}
    
    dispatch(addToCart(item))  
  }
       

  return(
    <button 
      onClick={()=> saveToCart(product.product)} 
      className='addCartButton'
    >
      &#11015;добавить в корзину
    </button>
  )
}