import { useEffect, useState } from "react";
import Productos from "./Productos";
import MostrarCarrito from "./MostrarCarrito";
import Header from "./Header";
import Footer from "./Footer";

function PaginaProductos() {
   

  return ( 
  <div>
    <Header></Header>

    <div className="text-center">
      <h3 className="card-title">Products</h3>
      <Productos></Productos>
      
    </div>
    <Footer></Footer>
  </div>
  );
}

export default PaginaProductos
