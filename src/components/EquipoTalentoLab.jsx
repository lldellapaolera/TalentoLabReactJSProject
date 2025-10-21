import Boton from "../Boton";

function EquipoTalentoLab({equipo}) {
  const estiloImg = { "borderRadius": "25px", };
  const estiloEquipo  = { "paddingBottom":"1em", };
  const estiloDiv  = { "textAlign": "center", "paddingBottom":"1em", };
  
  return (
    <div style={estiloDiv}>

      
        
        <h1>Equipo Talento Lab</h1>
        {equipo.map((item, index) => (
          <div key={index} className="equipo" style={estiloEquipo}>
            <img className="equipo-img" style={estiloImg} src={item.image}></img>
            <div className="equipo-titulo"><strong>{item.nombre}</strong></div>
            <div className="equipo-rol">{item.rol}</div>
          </div>
          
        ))}
      
    </div>
  );
}

export default EquipoTalentoLab
