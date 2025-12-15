import React, { createContext, useEffect, useState } from 'react'; 
export const ProductsContext = createContext(); 
export const ProductsProvider = ({ children }) => { 
    const [productos, setProductos] = useState([]); 

    useEffect(() => { 

        const eliminarProductoAPITest = (id) => { 
        const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este producto?'); 
        if (confirmar) { 
            try { 
                const respuesta = fetch(`https://68f643aa6b852b1d6f16ac75.mockapi.io/Productos/${id}`, { 
                    method: 'DELETE', 
                }); 
                //if (!respuesta.ok) { 
                    //console.log(respuesta.error.message)
                    //throw new Error('Error al eliminar el producto.'); 
                //} 
                alert('Producto eliminado correctamente.'); 
            } catch (error) { 
                console.error(error.message); 
                alert('Hubo un problema al eliminar el producto.'); 
            } 
        } 
    };
            
            const fetchProductos = async () => { 
                try { const respuesta = await fetch('https://68f643aa6b852b1d6f16ac75.mockapi.io/Productos'); 
                    if (!respuesta.ok) { 
                        throw new Error('Error al obtener los productos.'); 
                    } 
                    const data = await respuesta.json(); 
                    setProductos(data); 
                } 
                catch (error) { 
                    console.error(error.message); 
                } 
            }; 

            

            fetchProductos();


        }, []); 

    const editarProducto = (productoActualizado) => {
        try { 
            const respuesta = fetch(`https://68f643aa6b852b1d6f16ac75.mockapi.io/Productos/${productoActualizado.id}`, {
                method: 'PUT', 
                headers: { 'Content-Type': 'application/json', }, 
                body: JSON.stringify(productoActualizado), }); 
            // if (!respuesta.ok) { 
            //     throw new Error('Error al actualizar el producto.'); 
            // } 
            //const data = respuesta.json(); 
            //onActualizar(data); 
            alert('Producto actualizado correctamente.'); 
            setProductos( 
                productos.map((producto) => producto.id === productoActualizado.id ? productoActualizado : producto)
            );
        
        } 
        catch (error) { 
            console.error(error.message); 
            alert('Hubo un problema al actualizar el producto.'); 
        } 
    };

    const eliminarProductoAPI = (id) => { 
        const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este producto?'); 
        if (confirmar) { 
            try { 
                const respuesta = fetch(`https://68f643aa6b852b1d6f16ac75.mockapi.io/Productos/${id}`, { 
                    method: 'DELETE', 
                }); 
                //if (!respuesta.ok) { 
                    //console.log(respuesta.error.message)
                    //throw new Error('Error al eliminar el producto.'); 
                //} 
                alert('Producto eliminado correctamente.'); 
                return true;
            } catch (error) { 
                console.error(error.message); 
                alert('Hubo un problema al eliminar el producto.'); 
            }
            
        } 
        return false;
    };

    const agregarProductoAPI= async (producto) => { 
      try { 
        const respuesta = fetch(
          'https://68f643aa6b852b1d6f16ac75.mockapi.io/Productos', 
          { method: 'POST', 
            headers: { 'Content-Type': 'application/json', }, 
            body: JSON.stringify(producto),
          }
        ); 
        // if (!respuesta.ok) { 
        //   throw new Error('Error al agregar el producto.'); 
        // } 
        //const data = respuesta.json(); 
        console.log('Producto agregado.'); 
        alert('Producto agregado correctamente'); 
        
      } 
      catch (error) { 
        console.error(error.message); 
        alert('Hubo un problema al agregar el producto.');    
      } 
    }; 


    function agregarProducto(nuevoProducto) { 
        
        agregarProductoAPI(nuevoProducto);
        

        setProductos([...productos, nuevoProducto]); 
        //console.log("producto agregado")
    }; 
    
    const eliminarProducto = (id) => {
        if(eliminarProductoAPI(id)){
            setProductos(productos.filter((producto) => producto.id !== id)); 
        }
        
        
    }; 
    return ( 
        <ProductsContext.Provider value={{ 
            productos, agregarProducto, editarProducto, eliminarProducto
            }} > {children} 
        </ProductsContext.Provider> 
    );
};
