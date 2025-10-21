import { useContext, useState } from "react";
import Boton from "../Boton";
import CarritoBotonVaciarOVacio from "./CarritoBotonVaciarOVacio";
import { CarritoContext } from "../context/CarritoContext";

function MostrarCarrito() {

  const {carrito,vaciarCarrito}=useContext(CarritoContext);
  return (
    <div className="align-items-center">
      <h1>Carrito de compras</h1>
      {
        carrito.length > 0 ? (
          <ul className="list-unstyled">
            {
              carrito.map((producto, index) => (
                <li key={index}>
                  {producto.name} -
                  ${producto.price}
                </li>
              ))
            }
          </ul>
        ) : (
          <p>El carrito esta vacio</p>
        )
      }
      {
        carrito.length > 0 && <button className="btn btn-primary" onClick={vaciarCarrito}>Vaciar carrito</button>
      }
    </div>
  );
  
  // const deleteItemById = (idToDelete) => {
  //   // Use the filter method to create a new array excluding the item with the specified ID
  //   const updatedItems = carrito.filter(item => item.id !== idToDelete);
  //   // Update the state with the new array
  //   setCarrito(updatedItems);
  // };

    

  // if (carrito) {
  //   return (
  //     <div>
  //       <button onClick={() => setCarrito([])} >Vaciar</button>
  //     </div>

  //   );
  // } else {
  //   return (
  //     <div>
  //       <p className="text-warning">El carrito esta vacio.</p>
  //     </div>
      
  //   );
  // }

  // return ( 
  //   <div>
  //     <h3>Carrito</h3>
      
  //     <CarritoBotonVaciarOVacio carrito={carrito} setCarrito={setCarrito}></CarritoBotonVaciarOVacio>
      
      
  //     <ul>
  //       {carrito.map((item, index) => (
  //         <li key={index}>
  //           {item.name} -  
  //           $ {item.price}
  //           <button className="btn btn-link"  onClick={() => deleteItemById(item.id)} >Quitar</button>
  //         </li>          
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default MostrarCarrito
