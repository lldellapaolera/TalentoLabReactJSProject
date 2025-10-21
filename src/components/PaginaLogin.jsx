import Header from "./Header";
import Footer from "./Footer";

function PaginaLogin({setIsAuthenticated}) {
  const autenticar = () => {
    setIsAuthenticated(true);
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

            <form action="#" method="POST">
                
                <div className="mb-3">
                    <label forhtml="email" className="form-label fw-semibold">Correo Electrónico</label>
                    <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
                        <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com" required />
                    </div>
                </div>

                <div className="mb-3">
                    <label forhtml="password" className="form-label fw-semibold">Contraseña</label>
                    <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
                        <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" required />
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
                    <button onClick={autenticar} className="btn btn-primary btn-lg">
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
