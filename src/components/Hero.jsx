function Hero(){
    return (
        <div className="text-secondary px-4 py-5 text-center">
        <div className="py-5">
            <h1 className="display-5 fw-bold text-white">Welcome to TalentoLab E-Commerce</h1>
            <div className="col-lg-6 mx-auto">
              <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"> 
                <button type="button" className="btn btn-primary">Custom button</button> 
                <button type="button" className="btn btn-secondary">Secondary</button> 
              </div>
            </div>
        </div>
      </div>
    );
}

export default Hero