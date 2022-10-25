import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productsOnCart } from "./store/cartStore";
import { BackLink } from "./backLink";


export default function Cart(){
  const products = useSelector(productsOnCart)
  
  return(
    <>
    <table>
      <thead>
        <tr>
          <th>Продукт</th>
          <th>Фото</th>
          <th>Цена</th>
          <th>Колличество</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product=> 
          <tr key={product.product.id}>
            <td>{product.product.title}</td>
            <td><img src={product.product.images[0]}/></td>
            <td>{product.product.price}</td>
            <td>
              <button className="changeCount">-</button>
              1
              <button className="changeCount">+</button>
            </td>
          </tr> 
        )}
      </tbody>
    </table>
    <BackLink/>
    </>
    
    
    
  )
}