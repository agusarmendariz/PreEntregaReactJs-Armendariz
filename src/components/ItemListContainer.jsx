import{useState, useEffect} from 'react';
import {getProducts} from '../../asyncMock';
import ItemList from '../ItemList';


const ItemListContainer=({greeting})=>{

const [products, setProducts] = useState ([])

useEffect(()=>{
    getProducts()
    .then(response => {
        setProducts(response)
    })
    .catch(error => {
    console.error(error)
    })
    
}, [])





    return(
        <div>
            <h3>{greeting}</h3>
            <ItemList products ={products}/>
        </div>
    )
}

export default ItemListContainer;