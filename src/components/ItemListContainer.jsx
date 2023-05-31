import{useState, useEffect} from 'react';
import {getProducts,getProductsById} from './asyncMock';
import ItemList from './ItemList';

import {useParams} from 'react-router-dom'

const ItemListContainer=({greeting})=>{

const [products, setProducts] = useState ([])
const {id}= useParams()

useEffect(()=>{
    const asynFunc = id ? getProductsById : getProducts
    
    asynFunc(categoryId)
    .then(response => {
        setProducts(response)
    })
    .catch(error => {
    console.error(error)
    })
    
}, [id])



    return(
        <div>
            <h4>{greeting}</h4>
            <ItemList products ={products}/>
        </div>
    )
}

export default ItemListContainer;