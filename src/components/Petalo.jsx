import { useState } from "react";

function Petalo({
  mensaje,
  posicion,
  indice,
  seleccionado,
  regresando,
  onClick
}) {
  const [entradaTerminada, setEntradaTerminada] = useState(false);

  return (
    <div
      className="contenedor-caida"
      style={{
        "--retraso": `${indice * 2}s`
      }}
    >
      <button
        className={`
          petalo
          ${!entradaTerminada ? "petalo-armandose" : ""}
          ${seleccionado ? "petalo-seleccionado" : ""}
          ${regresando ? "petalo-regresando" : ""}
        `}
        style={{
          "--posicion": `${posicion}deg`
        }}
        onClick={onClick}
        onAnimationEnd={(e) => {
          if (e.animationName === "insertarPetalo") {
            setEntradaTerminada(true);
          }
        }}
      >
        
      </button>
    </div>
  );
}

export default Petalo;