import { useState } from "react";

const ItemCount =({stock,initial,onAdd})=>{
    const [quantity,setQuantity]=useState(initial)
     const increment =()=>{

        if(quantity < stock){
            setQuantity(quantity+1)
        }
     }
     const decrement = ()=>{
        if(quantity > 1){
            setQuantity(quantity -1)
        }
     }
    
     return (
        <div className ='container'>
            <div className="row">
                <div className="col s">
                <a class="waves-effect waves-light btn orange accent-2 " onClick={decrement}>-</a>
                </div>
            
                <div className="col s">
                <h4>{quantity}</h4>
                </div>
                <div className="col s">
                <a class="waves-effect waves-light btn orange accent-2" onClick={increment}>+</a>
                </div>
           
            </div>
            <div className="row">
                <div className="col s">
                <a class="waves-effect waves-light btn orange accent-2" onClick={()=> onAdd(quantity)} disabled ={!stock}>
            Agregar al carrito
            </a>
                </div>
          

            </div>
           
        </div>
     )
    
}



export default ItemCount