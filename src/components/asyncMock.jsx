const productos = [
    {
        id:"1",
        nombre:"Silla nordica negra",
        precio:10000,
        categoria:"silla",
        img:'../images/silla nordica negra.jpg',
        stock:100,
        descripcion:"Silla estilo nordico color negro"
    },

    {
        id:"2",
        nombre:"Silla nordica blanca",
        precio:10000,
        categoria:"silla",
        img:'../images/silla nordic blanca.jpg',
        stock:100,
        descripcion:"Silla estilo nordico color blanco"
    },

    {
        id:"3",
        nombre:"Mesa nordica blanca",
        precio:60000,
        categoria:"mesa",
        img:'../images/mesa nordica.jpg',
        stock:100,
        descripcion:"Mesa estilo nordico color blanco"
    }
    
]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(productos)
        }, 1500)
    })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(productos.find (prod => prod.id ===productId))
        }, 1500)
    })
}