import Header from "./Header";
import Footer from "./Footer";

function PaginaContacto(){
    return (
        <div>
            <Header></Header>
            <div className="text-center align-items-center">
                <h3>Contacto</h3>
                <div className="container">
                    <form className="form-row align-items-center" action="action_page.php">
                    <div className="form-group row">
                        <label htmlFor="nombre" className="col-sm-12 col-form-label col-form-label-sm">
                            Nombre
                        </label>
                        <div className="col-sm-12">
                            <input type="text" className="form-control form-control-sm" id="nombre" placeholder="Ingrese su nombre" />
                        </div>
                        <label htmlFor="email" className="col-sm-12 col-form-label col-form-label-sm mt-3">Email</label>
                        <div className="col-sm-12">
                            <input type="email" className="form-control form-control-sm" id="email" placeholder="Ingrese su email" />
                        </div>
                        <label htmlFor="mensaje" className="col-sm-12 col-form-label col-form-label-sm mt-3">Mensaje</label>
                        <div className="col-sm-12">
                            <textarea className="form-control form-control-sm" id="mensaje" placeholder="Ingrese su mensaje" />
                        </div>
                    </div>
                    <button className="btn btn-primary mt-3" type="submit" value="Submit">Enviar</button>
                    </form>
                    </div>
            </div> 
            <Footer></Footer>
        </div>
    );
}
export default PaginaContacto;