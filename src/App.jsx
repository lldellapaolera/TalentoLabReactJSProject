import 'bootswatch/dist/cyborg/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState } from 'react';
import EquipoTalentoLab from './components/EquipoTalentoLab';
import GaleriaIntereses from './components/GaleriaIntereses';
import ListarProductos from './components/ListarProductos';
import MostrarCarrito from './components/MostrarCarrito';
import TarjetaProyecto from './components/TarjetaProyecto';
import ListaProductos from './ListaProductos';
import Producto from './Producto';
import Tarjeta from './Tarjeta'
import PruebaUseEffect from './components/PruebaUseEffect';
import Productos from './components/Productos';
import Header from './components/Header';
import Main from './components/PaginaProductos';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import PaginaInicio from './components/PaginaInicio';
import PaginaProductos from './components/PaginaProductos';
import PaginaCarrito from './components/PaginaCarrito';
import PaginaContacto from './components/PaginaContacto';
import PaginaAcercaDe from './components/PaginaAcercaDe';
import ProductoDetalle from './components/ProductoDetalle';
import PaginaLogin from './components/PaginaLogin';
import Admin from './components/Admin';
import RutaProtegida from './components/RutaProtegida';






function App() {
  const carritoInicial = [];
  const [carrito,setCarrito]=useState(carritoInicial);
  const [isAuthenticated,setIsAuthenticated]=useState(false);
  
  return (  
    
      <div>
        
          <Routes>          
            <Route exact path="/" element={<PaginaInicio />} />
            <Route path="/products" element={<PaginaProductos />} />
            <Route path="/cart" element={<PaginaCarrito></PaginaCarrito> } />
            <Route path="/about" element={<PaginaAcercaDe></PaginaAcercaDe> } />
            <Route path="/contact" element={<PaginaContacto></PaginaContacto> } />
            <Route path="/products/:id" element={<ProductoDetalle /> } />
            <Route path="/login" element={isAuthenticated ? <Navigate to="/admin" replace></Navigate> : <PaginaLogin setIsAuthenticated={setIsAuthenticated} /> } />
            <Route path="/admin" element={<RutaProtegida isAuthenticated={isAuthenticated}><Admin setIsAuthenticated={setIsAuthenticated}></Admin></RutaProtegida> } />
          </Routes>
        
        
      </div>
    

    
    

  )
  

  
  // const productos = ['Manzanas', 'Peras', 'Naranjas' ];
  // const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX/UI', 'Node.JS' ];

  // const equipo = [
  //     { nombre: 'Silvia', rol: 'Product Owner', image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_199daaa865f%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_199daaa865f%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'},
  //     { nombre: 'Luis', rol: 'Diseñador UX/UI', image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_199daaa865f%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_199daaa865f%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'},
  //     { nombre: 'Matias', rol: 'Desarrollador', image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_199daaa865f%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_199daaa865f%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'},
  //     { nombre: 'Sabrina', rol: 'Desarrolladora', image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_199daaa865f%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_199daaa865f%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'},
  //   ];

  // const productos = [
  //     { id: 1, nombre: 'Limón por kg', precio: 3000},
  //     { id: 2, nombre: 'Naranja por kg', precio: 1600},
  //     { id: 3, nombre: 'Banana por kg', precio: 2500},
  //     { id: 4, nombre: 'Manzana por kg', precio: 2200},
  // ];

  // const carritoInicial = [ ];

  // const [carrito,setCarrito]=useState(carritoInicial);

  return (
    
    <div>
      
      {/* <Header></Header>
      <Main></Main>
      <Footer></Footer> */}

      {/* <Tarjeta titulo="Oferta especial" descripcion="20% de descuento en todos los productos" botonTexto="Ver mas"></Tarjeta> */}

      {/* <ListaProductos misProductos={productos}></ListaProductos> */}
      
      {/* <TarjetaProyecto titulo="Talento Lab" descripcion="Mi primer desarrollo en React" botonTexto="Ver mas"></TarjetaProyecto>
      
      <EquipoTalentoLab equipo={equipo}></EquipoTalentoLab>

      <GaleriaIntereses intereses={intereses}></GaleriaIntereses> */}

      {/* <ListarProductos productos={productos} carrito={carrito} setCarrito={setCarrito}></ListarProductos> */}
      {/* <MostrarCarrito carrito={carrito} setCarrito={setCarrito}></MostrarCarrito> */}
      {/* <PruebaUseEffect></PruebaUseEffect>
      <Productos></Productos> */}
    </div>
  );
}

export default App
