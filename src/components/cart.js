import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { increment, decrement, productsOnCart } from "./store/cartStore";
import { BackLink } from "./backLink";


export default function Cart(){
  const products = useSelector(productsOnCart)
  const dispatch = useDispatch(increment)
  

  function addCount(element){
    dispatch(increment(element.element.id))
  }
  function subtractCount(element){
    dispatch(decrement(element.element.id))

  }

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
        {products.map(element=> 
          <tr key={element.id}>
            <td>{element.title}</td>
            <td><img src={element.images[0]}/></td>
            <td>{element.price}</td>
            <td>
              <button 
                className="changeCount"
                onClick={()=> {subtractCount({element})}}
              >-</button>
              {element.count}
              <button
                className="changeCount"
                onClick={()=> {addCount({element})}}
              >+</button>
            </td>
          </tr> 
        )}
      </tbody>
    </table>
    <BackLink/>
    </>
    
    
    
  )
}