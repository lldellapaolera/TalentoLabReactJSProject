import { useState } from "react";
import Boton from "../Boton";

function ListarProductos({productos,carrito,setCarrito}) {
  const estiloProducto  = { "paddingBottom":"1em", };
  //const [carrito,setCarrito] = useState(carrito);
  
  //  const estiloBoton = { "backgroundColor": "white", "color": "red",  };
  //  const estiloBotonCliqueado = { "backgroundColor": "red", "color": "white",  };
  // // const estiloEquipo  = { "paddingBottom":"1em", };
  //  const estiloDiv  = { "textAlign": "center", "paddingBottom":"1em", };

  //  const cliquearBoton = (event) => {
  //   // Directly access the element that was clicked
  //   const clickedElement = event.target; 
    
  //   // Change the background color using plain JavaScript
  //   if(clickedElement.style.backgroundColor == 'white'){
  //     clickedElement.style.backgroundColor = 'lightblue';
  //   } else {
  //     clickedElement.style.backgroundColor = 'white';
  //   }
  // };

  return ( 
    <div>
      <h1>Productos</h1>
      {productos.map((item, index) => (
        
           <div key={index} className="producto" style={estiloProducto}>
             <div className="producto-nombre"><strong>{item.nombre}</strong></div>
             <div className="producto-precio">$ {item.precio}</div>
             <button key={index} onClick={()=>setCarrito([...carrito, item])}> Agregar al carrito</button>
           </div>
          
      ))}
    </div>
    // <div style={estiloDiv}>

      
        
    //     <h1>Galeria de intereses</h1>
    //     {intereses.map((item, index) => (
    //       <button style={estiloBoton} key={index} onClick={cliquearBoton}>{item}</button>
    //       // <div key={index} className="equipo" style={estiloEquipo}>
    //       //   <img className="equipo-img" style={estiloImg} src={item.image}></img>
    //       //   <div className="equipo-titulo"><strong>{item.nombre}</strong></div>
    //       //   <div className="equipo-rol">{item.rol}</div>
    //       // </div>
          
    //     ))}
      
    // </div>
  );
}

export default ListarProductos
