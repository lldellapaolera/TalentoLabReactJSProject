
function BotonEditarProducto({productoId}) { 

    const eliminarProducto = async (productoId, onClick) => { 
        const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este producto?'); 
        if (confirmar) { 
            try { 
                const respuesta = await fetch(`https://mockapi.io/api/v1/productos/${id}`, { 
                    method: 'DELETE', 
                }); 
                if (!respuesta.ok) { 
                    throw new Error('Error al eliminar el producto.'); 
                } 
                alert('Producto eliminado correctamente.'); 
            } catch (error) { 
                console.error(error.message); 
                alert('Hubo un problema al eliminar el producto.'); 
            } 
        } 
    };

    return ( 
        <span> 
            <a className='link link-warning' onClick={eliminarProducto}>Eliminar</a>
        </span> 
    ); 
} export default BotonEditarProducto;