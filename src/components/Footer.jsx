import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  
  return ( 
    
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <Link className="nav-link px-2 text-body-secondary" to={"/"} > Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-2 text-body-secondary" to={"/products"} > Productos</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link px-2 text-body-secondary" to={"/cart"} > Carrito</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link px-2 text-body-secondary" to={"/about"} > Acerca de</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link px-2 text-body-secondary" to={"/contact"} > Contacto</Link>
        </li> 
      </ul> 
      <p className="text-center text-body-secondary">
        &copy; 2025 TalentoLab E-Commerce, Inc
      </p> 
    </footer> 
    
  );
}

export default Footer
