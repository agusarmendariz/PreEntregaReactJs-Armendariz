import {Link} from 'react-router-dom'


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
                <Link to= {"/item/" + id}>
                <a class="waves-effect waves-light btn">Ver producto</a>
              </Link>
            </div>
          </div>
          </div>
        </div>
        )
        

}
export default Item