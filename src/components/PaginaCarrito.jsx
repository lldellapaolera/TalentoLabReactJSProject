import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MostrarCarrito from "./MostrarCarrito";

function PaginaCarrito() {
  
  return ( 
    <div className="text-center">
      <Header></Header>
      <MostrarCarrito></MostrarCarrito>
      <Footer></Footer>
    </div>
  );
}

export default PaginaCarrito
