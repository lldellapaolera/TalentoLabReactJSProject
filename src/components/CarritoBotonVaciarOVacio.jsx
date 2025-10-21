
function CarritoBotonVaciarOVacio({carrito,setCarrito}) {
  if(carrito.length === 0){
    return <div className="text-warning">El carrito esta vacio.</div>;
  } else {
    return <button onClick={() => setCarrito([])} >Vaciar</button>;
  }
}

export default CarritoBotonVaciarOVacio
