import { useAuthContext } from "../context/AuthContext";
import Footer from "./Footer";
//import FormularioProducto from "./FormularioProducto";
import Header from "./Header";
import { Navigate } from 'react-router-dom';
import ListaProductos from "./ListaProductos";
import { ProductsProvider } from "../context/ProductsContext";
import FormularioEdicion from "./FormularioEdicion";
import FormularioProducto from "./FormularioProducto";
import { useState } from "react";

function Admin(){
    // const salir = () => {
    //     setIsAuthenticated(false);
    // };
    const {logout} = useAuthContext();    
    

    const agregarProducto = async (producto) => { 
      try { 
        const respuesta = await fetch(
          'https://68f643aa6b852b1d6f16ac75.mockapi.io/Productos', 
          { method: 'POST', 
            headers: { 'Content-Type': 'application/json', }, 
            body: JSON.stringify(producto),
          }
        ); 
        if (!respuesta.ok) { 
          throw new Error('Error al agregar el producto.'); 
        } 
        const data = await respuesta.json(); 
        console.log('Producto agregado:', data); 
        alert('Producto agregado correctamente'); 
      } 
      catch (error) { 
        console.error(error.message); 
        alert('Hubo un problema al agregar el producto.');    
      } 
    }; 


    return (
        <div>
            <Header></Header>
            <div className="container text-center">
                <h1>Administracion</h1>
                <p>En esta pagina podra gestionar la informacion del sitio.</p>
                <button onClick={logout} className="btn btn-link">Cerrar sesion</button>
                
                
                
                <ProductsProvider>
                  {/* <FormularioProducto onAgregar={agregarProducto} /> */}
                  {/* <h2>Gestión de Productos</h2>  */}
                  {/* <a className="link link-primary" onClick={setModo('agregar')}>Agregar producto</a> */}
                  <ListaProductos></ListaProductos>
                  
                  {/* <FormularioProducto modo={modo}></FormularioProducto> */}
                  {/* <FormularioProducto></FormularioProducto> */}
                </ProductsProvider>
            </div>
            <Footer></Footer>
        </div>
        
    );
}
export default Admin