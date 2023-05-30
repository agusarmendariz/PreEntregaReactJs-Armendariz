const Item = ({id,nombre,img,precio,stock})=>{

        return (
            <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src="{img}" alt={nombre}/>
                  <span class="card-title">Card Title</span>
                  <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                </div>
                <div className="card-content">
                  <p>Precio:${precio}</p>
                  <p>Cantidad en stock{stock}</p>
                </div>
                <a class="btn-floating btn-large waves-effect waves-orange accent-2"><i class="material-icons">add</i></a>
              </div>
            </div>
          </div>
        )
        

}