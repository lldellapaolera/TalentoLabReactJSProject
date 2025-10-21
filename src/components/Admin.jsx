import Footer from "./Footer";
import Header from "./Header";
import { Navigate } from 'react-router-dom';

function Admin({setIsAuthenticated}){
    const salir = () => {
        setIsAuthenticated(false);
    };
    return (
        <div>
            <Header></Header>
            <div className="container text-center">
                <h1>Administracion</h1>
                <p>En esta pagina podra gestionar la informacion del sitio.</p>
                <button onClick={salir} className="btn btn-link">Cerrar sesion</button>
            </div>
            <Footer></Footer>
        </div>
        
    );
}
export default Admin