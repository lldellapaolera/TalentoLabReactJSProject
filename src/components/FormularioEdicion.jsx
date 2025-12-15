import { useEffect, useState } from "react";
function FormularioEdicion({ productoSeleccionado }) {
    const [producto, setProducto] = useState(productoSeleccionado);
    useEffect(() => {
        console.log(productoSeleccionado);
        setProducto(productoSeleccionado);
    }, [productoSeleccionado]);
    const handleChange = (e) => {
        const { name, value } = e.target; 
        setProducto({ ...producto, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const respuesta = await fetch(`https://68f643aa6b852b1d6f16ac75.mockapi.io/Productos/${producto.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(producto),
            });
            if (!respuesta.ok) {
                throw new Error('Error al actualizar el producto.');
            }
            const data = await respuesta.json();
            //onActualizar(data);
            alert('Producto actualizado correctamente.');
        }
        catch (error) {
            console.error(error.message);
            alert('Hubo un problema al actualizar el producto.');
        }
    };
    return (
        <span>

            <a className="link link-warning" data-bs-toggle="modal" data-bs-target={`#formularioEdicionModal_${producto.id}`}>
            Actualizar producto
            </a>

            <form onSubmit={handleSubmit}> 
            <div className="modal fade" id={`formularioEdicionModal_${producto.id}`} tabindex="-1" aria-labelledby={`formularioEdicionModal_${producto.id}Label`} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id={`formularioEdicionModal_${producto.id}Label`}>Actualizar producto</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    
                        {/* <h2>Agregar Producto</h2>  */}
                        {/* {
                            errores.name && <p style={{ color: 'red' }}>{errores.name}</p>
                        } 
                        {
                            errores.price && <p style={{ color: 'red' }}>{errores.price}</p>
                        } 
                        {
                            errores.description && <p style={{ color: 'red' }}>{errores.description}</p>
                        }  */}
                        
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
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
                
                </div>
            </div>
            
            </div>
            </form> 

        </span>
        


        // <form onSubmit={handleSubmit}>
        //     <h2>Editar Producto</h2>
        //     <div>
        //         <label>Nombre:</label>
        //         <input type="text" name="nombre" value={producto.nombre || ''} onChange={handleChange} required />
        //     </div>
        //     <div> 
        //         <label>Precio:</label> 
        //         <input type="number" name="precio" value={producto.precio || ''} onChange={handleChange} required min="0" /> 
        //     </div> 
        //     <div> 
        //         <label>Descripción:</label> 
        //         <textarea name="descripcion" value={producto.descripcion || ''} onChange={handleChange} required /> 
        //     </div> 
        //     <button type="submit">Actualizar Producto</button> 
        // </form>
    );
}
export default FormularioEdicion;