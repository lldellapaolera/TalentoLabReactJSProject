import { Navigate } from "react-router-dom";

function RutaProtegida({ isAuthenticated,children }){
    if(!isAuthenticated){
        return <Navigate to='/login' replace></Navigate>;
    }
    return children;
}
export default RutaProtegida;