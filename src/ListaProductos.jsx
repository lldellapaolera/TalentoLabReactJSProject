import Boton from "./Boton";

function ListaProductos({misProductos}){
    
    return (
        <div>
            <h2>Lista de productos</h2>
            <ul>
                {misProductos.map((item, index) => (
                <li key={index}>{item} <Boton texto={'Ir al producto'} color={'red'}></Boton></li>
                ))}
            </ul>
        </div>
    );
}

export default ListaProductos;