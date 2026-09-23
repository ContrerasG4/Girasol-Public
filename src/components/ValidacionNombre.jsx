import { useState } from "react";
import '../App.css'

function ValidacionNombre({onValidar}){

const [nombre, setNombre] = useState ("");
const [error, setError] = useState ("");


const validarNombre = () => {
if (nombre.trim().toLowerCase() == "maria alejandra"){
    onValidar();
    return
}
setError ("Ese no es el nombre que estoy buscando");
}

 return (
    <main className="pantalla-inicio">

      <div className="tarjeta-bienvenida">

        <p className="etiqueta">
          ANTES DE CONTINUAR...
        </p>

        <h1>¿Quién eres?</h1>

        <p className="descripcion">
          Escribe tu nombre para descubrir lo que preparé para ti.
        </p>

        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe tu nombre..."
        />

        {error && (
          <p className="mensaje-error">
            {error}
          </p>
        )}

        <button
          className="boton-entrar"
          onClick={validarNombre}
        >
          Continuar
        </button>

      </div>

    </main>
  );
}
export default ValidacionNombre