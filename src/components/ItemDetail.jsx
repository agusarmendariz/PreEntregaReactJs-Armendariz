import ItemCount from './ItemCount'

const ItemDetail = ({id,nombre,img,precio,categoria,stock,descripcion})=>{
    return (
        <div className="row">
            <div className="col s4">
              <div className="card medium">
                <div className="card-image">
                  <img src={img} alt=""/>
                </div>
                <span className="card-title">{nombre}</span>
                <div className="card-content">
                  <p> Categoría: {categoria}</p>
                  <p>Precio:$ {precio}</p>
                  <p>Cantidad en stock: {stock}</p>
                </div>
                <div> 
                <ItemCount  initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada',quantity)}/>
                </div>
                
              </div>
            </div>
          </div>
    )
}

export default ItemDetail