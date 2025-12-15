import React, { useContext, useEffect, useState } from 'react'; 
import BotonEliminarProducto from './BotonEliminarProducto';
import FormularioEdicion from './FormularioEdicion';
//import FormularioProducto from './FormularioProducto';

import FormularioEditarProducto from './FormularioEditarProducto';
import FormularioAgregarProducto from './FormularioAgregarProducto';
import FormularioProducto from './FormularioProducto';
import { ProductsContext } from '../context/ProductsContext';




    



function ListaProductos() { 

    
    const { eliminarProducto, productos } = useContext(ProductsContext)
    const [modo, setModo] = useState('agregar'); 
    const [productoInicial, setProductoInicial] = useState({}); 
    //const [productos, setProductos] = useState([]); 

    

    
    // useEffect(() => { 
    //     const eliminarProducto = async (id) => { 
    //         const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este producto?'); 
    //         if (confirmar) { 
    //             try { 
    //                 const respuesta = await fetch(`https://68f643aa6b852b1d6f16ac75.mockapi.io/Productos/${id}`, { 
    //                     method: 'DELETE', 
    //                 }); 
    //                 if (!respuesta.ok) { 
    //                     throw new Error('Error al eliminar el producto.'); 
    //                 } 
    //                 alert('Producto eliminado correctamente.'); 
    //             } catch (error) { 
    //                 console.error(error.message); 
    //                 alert('Hubo un problema al eliminar el producto.'); 
    //             } 
    //         } 
    //     };

        



    //     const fetchProductos = async () => { 
    //         try { const respuesta = await fetch('https://68f643aa6b852b1d6f16ac75.mockapi.io/Productos'); 
    //             if (!respuesta.ok) { 
    //                 throw new Error('Error al obtener los productos.'); 
    //             } 
    //             const data = await respuesta.json(); 
    //             setProductos(data); 
    //         } 
    //         catch (error) { 
    //             console.error(error.message); 
    //         } 
    //     }; 
    //     fetchProductos();
    // }, []); 

    // function setearModoEdicion(modo,producto){
    //     setProductoInicial(producto);
    //     setModo(modo);

    // }

    // function setearModoAdicion(modo){
    //     setModo(modo);

        

    // }

    
    function onCerrarAgregarProducto(){
        
    }

    
    return ( 
        <div> 
            {/* <a className='link link-primary' href="/agregar-producto">Agregar</a> */}
            {/* <FormularioProducto></FormularioProducto> */}
            {/* <FormularioAgregarProducto></FormularioAgregarProducto> */}

            
            
            <h2>Lista de productos</h2>
            {/* <button onClick={() => setearModoAdicion('agregar')} className="btn btn-link">Agregar producto</button> */}
            <ul style={{ listStyleType: "none" }}>
                {
                    productos.map((producto) => (
                        <li key={producto.id}>
                            <strong>
                                {producto.name}
                            </strong>: 
                            ${producto.price}
                            <p>{producto.description}</p>
                            <button onClick={()=>setearModoEdicion('editar',producto)} className="btn btn-link btn-adicion">Editar</button> |
                            <button onClick={()=>eliminarProducto(producto.id)} className="btn btn-link">Eliminar</button>
                            
                        </li>
                    ))
                }
            </ul>
            


            



            {/* <h2>Lista de Productos</h2> 
            <table className='table table-active'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto) => ( 
                            <tr key={producto.id}>
                                <td>{producto.name}</td> 
                                <td>{producto.price}</td>
                                <td>
                                    <a href="#" onClick={eliminarProducto(producto.id)}>eliminar</a> |
                                    <FormularioEditarProducto productoInicial={producto}></FormularioEditarProducto> 
                                     */}
                                    {/* <FormularioProducto productoInicial={producto} modo='edicion'></FormularioProducto> */}
                                {/* </td>
                            </tr>
                            
                        ))
                    }

                </tbody>
                
            </table> */}

            <FormularioProducto onCerrar={onCerrarAgregarProducto}></FormularioProducto>
                 
            
        </div> 

        
    ); 

    
} export default ListaProductos;