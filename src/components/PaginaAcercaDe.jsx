import Header from "./Header";
import Footer from "./Footer";

function PaginaAcercaDe(){
    return (
        <div>
            <Header></Header>
            <div className="text-center">
                <h3>Acerca de</h3>
                <div className="container my-5">

        <section className="row mb-5 py-4 border-bottom">
            <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="p-4 bg-light rounded-3 h-100 shadow-sm">
                    <i className="feature-icon bi bi-flag-fill d-block mb-3"></i> <h2 className="text-primary">Nuestra Misión</h2>
                    <p className="fs-5">
                        Ofrecer una plataforma de **e-commerce eficiente y segura** que conecte a clientes con una amplia gama de **productos de calidad**, asegurando una experiencia de compra **transparente** y un soporte al cliente excepcional en toda Argentina.
                    </p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="p-4 bg-light rounded-3 h-100 shadow-sm">
                    <i className="feature-icon bi bi-eye-fill d-block mb-3"></i> <h2 className="text-primary">Nuestra Visión</h2>
                    <p className="fs-5">
                        Ser el **referente tecnológico y comercial** del e-commerce argentino, reconocido por su **innovación constante**, su compromiso con el **talento local** y por ser el canal preferido para la venta de productos variados.
                    </p>
                </div>
            </div>
        </section>

        <section className="mb-5">
            <h2 className="text-center text-primary mb-4 border-bottom pb-2">Talento Tech: Origen y Desarrollo</h2>
            <div className="row align-items-center">
                <div className="col-md-7">
                    <p className="lead">
                        Fundada en [Año de Fundación, ej: 2019] en la vibrante capital de **Buenos Aires**, Talento Tech E-Commerce nació de la convicción de que la tecnología argentina podía transformar la experiencia de compra online. Vimos una oportunidad para crear una plataforma más **robusta, local y centrada en el usuario**.
                    </p>
                    <p>
                        Desde nuestros inicios, hemos apostado por desarrollar toda nuestra infraestructura y sistemas "in-house" con **ingenieros y diseñadores argentinos**. Este enfoque en el **talento tech local** no solo garantiza la calidad y seguridad de nuestra plataforma, sino que también contribuye al ecosistema digital de nuestro país. Hoy, vendemos una variedad de productos, desde electrónica y hogar hasta indumentaria.
                    </p>
                </div>
                <div className="col-md-5 text-center">
                    <img src="https://placehold.co/400x250" className="img-fluid rounded shadow-lg" alt="Ilustración del equipo Talento Tech Argentina"/>                </div>
            </div>
        </section>

        <section className="text-center mb-5">
            <h2 className="text-primary mb-4 border-bottom pb-2">Valores que nos Impulsan</h2>
            <div className="row g-4">
                
                <div className="col-md-6 col-lg-3">
                    <div className="card p-3 h-100 shadow">
                        <i className="feature-icon bi bi-lightbulb-fill mx-auto mb-3"></i>
                        <h4 className="card-title">Innovación</h4>
                        <p className="card-text">Buscamos constantemente la mejora tecnológica para ofrecer la mejor experiencia de compra.</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="card p-3 h-100 shadow">
                        <i className="feature-icon bi bi-shield-lock-fill mx-auto mb-3"></i>
                        <h4 className="card-title">Confianza</h4>
                        <p className="card-text">Garantizamos transacciones seguras y el respaldo total de todos nuestros productos.</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="card p-3 h-100 shadow">
                        <i className="feature-icon bi bi-people-fill mx-auto mb-3"></i>
                        <h4 className="card-title">Talento Local</h4>
                        <p className="card-text">Impulsamos el desarrollo de profesionales IT y el ecosistema productivo argentino.</p>
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-3">
                    <div className="card p-3 h-100 shadow">
                        <i className="feature-icon bi bi-hand-thumbs-up-fill mx-auto mb-3"></i>
                        <h4 className="card-title">Excelencia</h4>
                        <p className="card-text">Comprometidos con la calidad de servicio y la rapidez en la logística y entrega.</p>
                    </div>
                </div>

            </div>
        </section>
        
    </div>
            </div> 
            <Footer></Footer>
        </div>
        
    );
}
export default PaginaAcercaDe;