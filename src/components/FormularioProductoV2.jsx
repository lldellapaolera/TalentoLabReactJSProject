import React, { useState } from 'react'; 
function FormularioProductoV2({ onAgregar }) { 
    const [errores, setErrores] = useState({}); 
    const [producto, setProducto] = useState({ name: '', price: '', description: ''}); 
    const handleChange = (e) => { 
        const { name, value } = e.target; setProducto({ ...producto, [name]: value }); 
    }; 
    const validarFormulario = () => { 
        
        
        const nuevosErrores = {}; 
        if (!producto.name.trim()) { 
            nuevosErrores.name = 'El nombre es obligatorio.'; 
        } 
        if (!producto.price || producto.price <= 0) { 
            nuevosErrores.price = 'El precio debe ser mayor a 0.'; 
        } 
        if (!producto.description.trim() || producto.description.length < 10) { 
            nuevosErrores.description = 'La descripción debe tener al menos 10 caracteres.'; 
        } 
        setErrores(nuevosErrores); 
        return Object.keys(nuevosErrores).length === 0; 
    }; 
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        if (validarFormulario()) { 
            onAgregar(producto); 
            setProducto({ name: '', price: '', description: '' }); 
            setErrores({}); 
        } 
    };
    return ( 
        <div>
            
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Agregar producto
            </button>

            <form onSubmit={handleSubmit}> 
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Agregar producto</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
                        {/* <h2>Agregar Producto</h2>  */}
                        {
                            errores.name && <p style={{ color: 'red' }}>{errores.name}</p>
                        } 
                        {
                            errores.price && <p style={{ color: 'red' }}>{errores.price}</p>
                        } 
                        {
                            errores.description && <p style={{ color: 'red' }}>{errores.description}</p>
                        } 
                        
                        <div className='row text-center'>
                            <div className='col-12 col-sm-6 col-lg-6'> 
                                <label htmlFor='name'>Nombre:</label> 
                                <input className='form-control mb-4' type="text" id='name' name="name" value={producto.name} onChange={handleChange} required /> 
                            </div>
                            <div className='col-12 col-sm-6 col-lg-6'> 
                                <label htmlFor='price'>Precio:</label> 
                                <input className='form-control mb-4' type="number" id='price' name="price" value={producto.price} 
                                    onChange={handleChange} required min="0" 
                                /> 
                            </div> 
                            <div className='col-12 col-sm-6 col-lg-6'> 
                                <label htmlFor='description'>Descripción:</label> 
                                <textarea className='form-control mb-4' id='description' name="description" value={producto.description} onChange={handleChange} required /> 
                            </div> 
                            {/* <button className='btn btn-primary' type="submit">Agregar Producto</button>  */}
                        </div>
                        
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
                
                </div>
            </div>
            
            </div>
            </form> 
        </div>
        
    ); 
} 
export default FormularioProducto;
