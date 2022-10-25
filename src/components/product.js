import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BackLink } from "./backLink";
import { CartButton } from "./cartButton";

export default function Product(){
const {id}=useParams('id')
const [product,setProduct]=useState(null)

useEffect(()=>{
  ( async()=>{
      const response=await fetch(`https://dummyjson.com/products/${id}`)
      const json=await response.json()
      setProduct(json)
   })()
},[id,setProduct])
   
return(
     <div>
     <Link to={`/cart`}><h2>Перейти к покупкам &#128722;</h2></Link>
     <article>
         {product && 
            <section className="sectionProduct">
               <h1>{product.title}</h1>   
               <img src={product.images[0]} />
               <p>{product.description}</p>
               <span>$ {product.price}</span>
               
            </section>
         }
         <CartButton/>
     </article>
      <BackLink/>
     </div>
   )
}