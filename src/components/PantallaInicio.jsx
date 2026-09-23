import '../css/PantallaIncio.css'
function PantallaInicio({onEntrar}) {
  return (
    <main className="pantalla-inicio">
      <div className="tarjeta-bienvenida">
        <p className="etiqueta">PARA ALGUIEN MUY ESPECIAL</p>

        <h1>Hola, (Nombre de la persona).</h1>

        <p className="descripcion">
          He preparado algo especial para ti.
        </p>

        <button className="boton-entrar"onClick={onEntrar}>
          Entrar
        </button>
      </div>
    </main>
  );
}

export default PantallaInicio
