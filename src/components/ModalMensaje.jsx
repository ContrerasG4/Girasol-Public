function ModalMensaje({ mensaje, onCerrar }) {
  return (
    <div className="modal-mensaje">
      <div className="contenido-mensaje">
        <span className="flor-modal">🌻</span>

        <p>{mensaje.texto}</p>

          <img
          src={mensaje.imagen}
          alt="Un recuerdo especial"
          className={`foto-modal foto-${mensaje.id}`}
         
        />
        <br/>
         {mensaje.youtube && (
          <a
            href={mensaje.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="boton-youtube"
          >
           Titulo a el enlace a youtube.
          </a>
        )}
        <br/>

        <button onClick={onCerrar}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default ModalMensaje;