import React, { useState, useContext } from 'react'; 
import { ProductsContext } from '../context/ProductsContext';

function FormularioProducto( { productoInicial = {}, modo = 'agregar', onCerrar } ) { 
    const [producto, setProducto] = useState(productoInicial); 
    const { agregarProducto, editarProducto } = useContext(ProductsContext); 
    
    //setProducto(productoInicial);
    producto.name=productoInicial.name;

    const handleChange = (e) => { 
        const { name, value } = e.target; 
        setProducto({ ...producto, [name]: value }); 
    }; 
    const handleSubmit = (e) => 
        { e.preventDefault(); 
            if (modo === 'agregar') { 
                agregarProducto({ ...producto, id: Date.now() }); 
            } else { 
                editarProducto(producto); 
            } 
            resetForm();
            //onCerrar(); 
        };

    const resetForm = () => { 
        setProducto({});
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <h2>{modo === 'agregar' ? 'Agregar Producto' : 'Editar Producto'}</h2> 
                <div> 
                    <label>Nombre:</label> <input type="text" name="name" value={producto.name || ''} onChange={handleChange} required /> 
                </div> 
                <div> 
                    <label>Precio:</label> <input type="number" name="price" value={producto.price || ''} onChange={handleChange} required min="0" /> 
                </div> 
                <div>        
                    <label>Descripción:</label> <textarea name="description" value={producto.description || ''} onChange={handleChange} required /> 
                </div> 
                <button type="submit">{modo === 'agregar' ? 'Agregar' : 'Actualizar'}</button> 
            </form>
        </div>
        
    );
} 
export default FormularioProducto;
