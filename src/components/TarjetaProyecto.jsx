
function TarjetaProyecto({titulo,descripcion,botonTexto}) {
  const estiloTarjeta = { textAlign: "center",}
  // document.querySelector('button').addEventListener('click', () => { 
  //   console.log("Explorando: [titulo]"); 
  // });



  return (
      
     <div style={estiloTarjeta}>
      <h1>Tarjetas de proyecto</h1>
      <div className="tarjeta-titulo">{titulo}</div>
      <div className="tarjeta-descripcion">{descripcion}</div>
      <button onClick={() => console.log('Explorando: [' + titulo + ']')}>{botonTexto}</button>
     </div>
  );
}



export default TarjetaProyecto
