import React, { useState, useContext } from 'react'; 
import { ProductsContext } from '../context/ProductsContext'; 
function FormularioEditarProducto({ 
    productoInicial = {}, 
    onCerrar }) { 
        const [producto, setProducto] = useState(productoInicial); 
        const { agregarProducto, editarProducto } = useContext(ProductsContext); 
        const handleChange = (e) => { const { name, value } = e.target; 
        setProducto({ ...producto, [name]: value }); 
    }; 
    const [errores, setErrores] = useState({}); 
    const validarFormulario = () => { 
        const nuevosErrores = {}; 
        if (!producto.name) 
            nuevosErrores.name = 'El nombre es obligatorio.'; 
        if (producto.price <= 0) 
            nuevosErrores.price = 'El precio debe ser mayor a 0.'; 
        if (!producto.description || producto.description.length < 10) 
            nuevosErrores.description = 'La descripción debe tener al menos 10 caracteres.'; 
        return nuevosErrores; 
    }; 
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        const nuevosErrores = validarFormulario(); 
        if (Object.keys(nuevosErrores).length > 0) { 
            setErrores(nuevosErrores); return; 
        } 
        editarProducto(producto); 
        
        onCerrar(); 
    };

    
    

    return (
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#editarProducto${producto.id}Modal`}>
                Editar
            </button>
                    
            <div class="modal fade" id={`editarProducto${producto.id}Modal`} tabindex="-1" aria-labelledby={`editarProducto${producto.id}ModalLabel`} aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id={`editarProducto${producto.id}ModalLabel`}><h2>Editar producto</h2> </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <form onSubmit={handleSubmit}> 
                                <div> 
                                    <label>Nombre:</label> 
                                    <input type="text" name="name" value={producto.name || ''} onChange={handleChange} required /> 
                                    {errores.name && <p className="alert alert-danger">{errores.name}</p>}
                                </div> 
                                <div> 
                                    <label>Precio:</label> 
                                    <input type="number" name="price" value={producto.price || ''} onChange={handleChange} required min="0" /> 
                                    {errores.price && <p className="alert alert-danger">{errores.price}</p>}
                                </div> 
                                <div>
                                    <label>Descripción:</label> 
                                    <textarea name="description" value={producto.description || ''} onChange={handleChange} required />
                                    {errores.description && <p className="alert alert-danger">{errores.description}</p>}
                                </div>
                                <button type="submit">Guardar</button> 
                            </form> 
                        </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    
                </div>
                
                </div>
            </div>
            
            </div>
        </div>
        
        
            
            

        


        
        ); 
    } export default FormularioEditarProducto;