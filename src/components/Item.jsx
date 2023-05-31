const Item = ({id,nombre,img,precio,stock})=>{

        return (
            <div className="container">
            <div className="row">
            <div className="col s4">
              <div className="card medium">
                <div className="card-image">
                  <img src={img} alt=""/>
                </div>
                <span className="card-title">{nombre}</span>
                <div className="card-content">
                  <p>Precio:$ {precio}</p>
                  <p>Cantidad en stock: {stock}</p>
                </div>
                <div className="link">
                <Link to = {'/item/${id}'} >Ver detalle</Link>
                </div>
                
                
              </div>
            </div>
          </div>
          </div>
        )
        

}
export default Item