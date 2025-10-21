import { useEffect } from "react";

function PruebaUseEffect() {
  
  useEffect(() => {
    console.log('El componente se ha montado.');

    return () => {
      console.log('El componente se ha desmontado.');
    };
  }, []);

  return ( <h1>Hola, React!</h1> );
}



export default PruebaUseEffect
