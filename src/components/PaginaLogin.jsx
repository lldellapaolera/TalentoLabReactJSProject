

import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function PaginaLogin() {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuthContext();
    const navigate = useNavigate(); 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulación de autenticación 
        if (usuario === 'admin' && password === '1234') {
            login(usuario); 
            navigate('/admin');
        } else {
            alert('Credenciales incorrectas');
        }
    };

  return ( 
  <div>
    <Header></Header>
    
    <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow-lg p-4 p-md-5" >
            
            <div className="text-center mb-4">
                <i className="bi bi-person-circle display-4 text-primary"></i>
                <h2 className="h3 mt-2 fw-bold text-primary">Iniciar Sesión</h2>
                <p className="text-muted">Accede a tu cuenta de Talento Tech</p>
            </div>

            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label forhtml="usuario" className="form-label fw-semibold">Usuario</label>
                    <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="usuario" 
                            placeholder="user" 
                            value={usuario} 
                            onChange={(e) => setUsuario(e.target.value)} 
                            required 
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <label forhtml="password" className="form-label fw-semibold">Contraseña</label>
                    <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
                        <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                        <label className="form-check-label" forhtml="rememberMe">
                            Recordarme
                        </label>
                    </div>
                    <a href="#" className="text-decoration-none small">¿Olvidaste tu contraseña?</a>
                </div>

                <div className="d-grid gap-2">
                    {/* <button type="submit" className="btn btn-primary btn-lg">
                        <i className="bi bi-box-arrow-in-right me-2"></i> Entrar
                    </button> */}
                    <button type="submit" className="btn btn-primary btn-lg">
                        <i className="bi bi-box-arrow-in-right me-2"></i> Entrar
                    </button>
                </div>

                <p className="text-center mt-3 text-muted">
                    ¿No tienes cuenta? <a href="#" className="text-decoration-none fw-semibold">Regístrate aquí</a>
                </p>

            </form>

        </div>
    </div>    
    <Footer></Footer>
  </div>
  );
}
export default PaginaLogin


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuthContext } from '../context/AuthContext';
// function Login() {
//     const [usuario, setUsuario] = useState('');
//     const [password, setPassword] = useState('');
//     const { login } = useAuthContext();
//     const navigate = useNavigate(); const handleSubmit = (e) => {
//         e.preventDefault();
//         // Simulación de autenticación 
//         if (usuario === 'admin' && password === '1234') {
//             login(usuario); navigate('/dashboard');
//         } else {
//             alert('Credenciales incorrectas');
//         }
//     };
//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Iniciar sesión</h2>
//             <div>
//                 <label>Usuario:</label>
//                 <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
//             </div>
//             <div>
//                 <label>Contraseña:</label>
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </div>
//             <button type="submit">Iniciar sesión</button>
//         </form>
//     );
// }
// export default Login;


