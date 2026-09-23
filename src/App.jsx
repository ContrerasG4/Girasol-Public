import { useState } from "react";
import PantallaInicio from "./components/PantallaInicio";
import ValidacionNombre from "./components/ValidacionNombre";
import Girasol from "./components/Girasol";

function App() {

  const [pantalla, setPantalla] = useState("inicio");

  return (
    <>
      {pantalla === "inicio" && (
        <PantallaInicio
          onEntrar={() => setPantalla("nombre")}
        />
      )}

      {pantalla === "nombre" && (
        <ValidacionNombre
          onValidar={() => setPantalla("girasol")}
        />
      )}

      {pantalla === "girasol" && (
        <Girasol />
      )}
    </>
  );
}

export default App;