import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

function ProductoDetalle(){
    const { id } = useParams();
   
    return (

        

        <div className="text-center">
            <Header></Header>
            <h1>Detalle de producto</h1>
            <p>
                Este es el detalle de producto con ID: {id} 
            </p>
            <Footer></Footer>
        </div>
    );
}
export default ProductoDetalle