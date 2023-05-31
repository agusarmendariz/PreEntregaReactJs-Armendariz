import{useState, useEffect} from 'react';
import {getProducts,getProductsById} from './asyncMock';
import ItemList from './ItemList';

import {useParams} from 'react-router-dom'

const ItemListContainer=({greeting})=>{

const [products, setProducts] = useState ([])
const {categoryId}= useParams()

useEffect(()=>{
    const asynFunc = categoryId ? getProductsByCategory :getProducts
    
    asynFunc(categoryId)
    .then(response => {
        setProducts(response)
    })
    .catch(error => {
    console.error(error)
    })
    
}, [categoryId])



    return(
        <div>
            <h4>{greeting}</h4>
            <ItemList products ={products}/>
        </div>
    )
}

export default ItemListContainer;