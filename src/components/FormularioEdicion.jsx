import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";

function FormularioEdicion({ productoSeleccionado, onActualizar }) { 
    const [producto, setProducto] = useState(productoSeleccionado); 
    const [isEditing, setIsEditing] = useState(false);
    const { eliminarProducto, productos, editarProducto } = useContext(ProductsContext)

    useEffect(
        () => { 
            setProducto(productoSeleccionado); 
        }, [productoSeleccionado]
    ); 
    
    const handleChange = (e) => { 
        const { name, value } = e.target; 
        setProducto({ ...producto, [name]: value }); 
    }; 
    const handleSubmit = async (e) => { 
        e.preventDefault(); 

        editarProducto(producto);
        setIsEditing(false);
        // try { 
        //     const respuesta = await fetch(`https://mockapi.io/api/v1/productos/${producto.id}`, {
        //         method: 'PUT', 
        //         headers: { 'Content-Type': 'application/json', }, 
        //         body: JSON.stringify(producto), }); 
        //     if (!respuesta.ok) { 
        //         throw new Error('Error al actualizar el producto.'); 
        //     } 
        //     const data = await respuesta.json(); 
        //     //onActualizar(data); 
        //     alert('Producto actualizado correctamente.'); 
        // } 
        // catch (error) { 
        //     console.error(error.message); 
        //     alert('Hubo un problema al actualizar el producto.'); 
        // } 
    };
    
    const cancelEditing = () => {
        setProducto(productoSeleccionado);
        setIsEditing(false);
    }
    return ( 
        <div>
            { isEditing ? (<>
            
             <form onSubmit={handleSubmit}> 
                <h2>Editar Producto</h2> 
                <div> 
                    <label>Nombre:</label> 
                    <input type="text" name="name" value={producto.name || ''} onChange={handleChange} required /> 
                </div> 
                <div> 
                    <label>Precio:</label> 
                    <input type="number" name="price" value={producto.price || ''} onChange={handleChange} required min="0" /> 
                </div> 
                <div> 
                    <label>Descripción:</label> 
                    <textarea name="description" value={producto.description || ''} onChange={handleChange} required /> 
                </div> 
                <button type="submit">Actualizar</button> | <button type="button" onClick={()=>cancelEditing()}>Cancelar</button>
            </form> 
            
            </>) : (<>
            
            
            
            <li key={producto.id}>
                            <strong>
                                {producto.name}
                            </strong>: 
                            ${producto.price}
                            <p>{producto.description}</p>
                            <button onClick={()=>setIsEditing(true)} className="btn btn-link">Editar</button> |
                            <button onClick={()=>eliminarProducto(producto.id)} className="btn btn-link">Eliminar</button>
                            
                        </li>
            
            </>) }
        </div>

        // <form onSubmit={handleSubmit}> 
        //     <h2>Editar Producto</h2> 
        //     <div> 
        //         <label>Nombre:</label> 
        //         <input type="text" name="name" value={producto.name || ''} onChange={handleChange} required /> 
        //     </div> 
        //     <div> 
        //         <label>Precio:</label> 
        //         <input type="number" name="price" value={producto.price || ''} onChange={handleChange} required min="0" /> 
        //     </div> 
        //     <div> 
        //         <label>Descripción:</label> 
        //         <textarea name="description" value={producto.description || ''} onChange={handleChange} required /> 
        //     </div> 
        //     <button type="submit">Actualizar Producto</button> 
        // </form> 
    ); 
}

export default FormularioEdicion