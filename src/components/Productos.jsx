import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";


function Productos() {

  const {agregarAlCarrito} = useContext(CarritoContext);

const estiloMitad = { "left": "50%", "right": "50%", };



  
  const [productos, setProductos] = useState([]); 
  const [cargando, setCargando] = useState(true); 
  const [error, setError] = useState(null);


  useEffect(() => { 
    
    fetch('https://68f643aa6b852b1d6f16ac75.mockapi.io/Productos') 
    //fetch('http://localhost:8080/productos') 
    .then((respuesta) => respuesta.json()) 
    .then((datos) => {
      setProductos(datos); 
      setCargando(false); 
    }) 
    .catch((error) => {
      setError('Hubo un problema al cargar los productos. Intente nuevamente mas tarde.'); 
      setCargando(false);
    }); }, []);

  if(cargando) return (
    <div className="spinner-border text-primary text-center" style={estiloMitad} role="status">
      <span className="visually-hidden">Cargando productos...</span>
    </div>
  );

  if (error){ 
    return (
      <div className="text-danger text-center">
        <strong> ¡Error! </strong>  
        {error}
      </div>
    );
  }

  return ( 
    <div>
      <div className="container text-center">
          
          <div className="row">
      {
        
      productos.map((producto) => ( 
        
        
        
            <div  key={producto.id} className="col-lg-4">
              <div className="card mb-3">
                {/* <h3 className="card-header">Producto</h3> */}
                <div className="card-body">
                  {/* <h5 className="card-title">{producto.name}</h5> */}
                  <h6 className="card-subtitle text-muted">{producto.name}</h6>
                </div>
                <img className="card-img" src={producto.avatar}></img>
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style="font-size:1.125rem;text-anchor:middle">
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                </svg> */}
                <div className="card-body">
                  <p className="card-text">$ {producto.price}</p>
                </div>
                {/* <ul className="list-group list-group-flush">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul> */}
                <div className="card-body">
                  {/* <a href="#" className="card-link">Agregar al carrito</a> */}
                  <Link className="btn btn-link" to={"/products/"+producto.id} > Ver</Link>
                  <button className="btn btn-secondary" key={producto.id} onClick={()=>agregarAlCarrito(producto)}> Agregar al carrito</button>
                  {/* <a href="#" className="card-link">Another link</a> */}
                </div>
                {/* <div className="card-footer text-muted">
                  2 days ago
                </div> */}
              </div>
            </div>    
      
      
      

      ))
      
    }
          </div>
        </div>
      
    </div>
      
    
    // <ul> {
    //   productos.map((producto) => ( 
    //   <li key={producto.id}>{producto.name}</li> 

    //   ))
    // }
    // </ul> 
  );
}

export default Productos
