import { useState } from "react"

const itemCount =({stock,initial,onAdd})=>{
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
        <div className ='Counter'>
            <div className="Controls">
            <a class="waves-effect waves-light btn" onClick={decrement}>button</a>
            </div>
            <h4></h4>
        </div>
     )
    
    
    
    
    
    return (

    )
}









export default{

}