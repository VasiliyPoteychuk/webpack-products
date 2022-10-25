import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { selectProducts, fetchProducts, productsStatus} from './store/productStore';
import { Link } from "react-router-dom";
import Spinner from "./spinner";
import { CartButton } from "./cartButton";

export default function Products(){
   const products=useSelector(selectProducts);
   const status=useSelector(productsStatus);
 
   const dispatch=useDispatch();
   
   useEffect(()=>{
      if(status==='idle'){
         dispatch(fetchProducts())
      }
   },[dispatch])
   
  
   return(
      <>
      {status==='loading'? <Spinner/>: ''}
      <Link to={`/cart`}><h2>Перейти к покупкам &#128722;</h2></Link>
      <div className="productsList">
     
      
      {products.map(product=>
         <article 
            key={product.id}
         > 
            <Link to={`products/${product.id}`}>
               <section className="sectionProduct">
                  <h3>{product.title}</h3>
                  <img src={product.images[0]}/>
                  <span>$ {product.price}</span>
               </section>
               
            </Link> 
            <CartButton product={product}/>
         </article>)}   
      </div>
      </>
      
   )
}