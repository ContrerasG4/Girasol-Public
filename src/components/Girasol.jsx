import '../App.css'
import mensajes from '../data/Mensaje'
import Petalo from '../components/Petalo'
import { useState } from 'react'
import ModalMensaje from './ModalMensaje'
function Girasol() {

const [petaloSeleccionado, setPetaloSeleccionado] = useState (null)
const [mostrarMensaje, setMostrarMensaje] = useState(false);
const [regresandoPetalo, setRegresandoPetalo] = useState(false);

 const seleccionarPetalo = (mensaje) => {
  setPetaloSeleccionado(mensaje);

  setTimeout(() => {
    setMostrarMensaje(true);
  }, 800);
};

  return (
    <main className="pantalla-girasol">
        <div className="girasol">

        <div className="petalos">
        {mensajes.map((mensaje, posicion) =>{
        const grados = posicion * 72;

          return(
          <Petalo
          key = {mensaje.id}
          mensaje = {mensaje.texto}
          posicion = {grados}
          indice = {posicion}
          seleccionado={petaloSeleccionado?.id === mensaje.id}
          regresando={regresandoPetalo && petaloSeleccionado?.id === mensaje.id}
          onClick = {() => seleccionarPetalo(mensaje)}
          
          />

          );
           })}
        </div>

         <div className="centro-girasol">
          ☀️
        </div>

      </div>

      <p className="instruccion">
        Toca un pétalo 🌻
      </p>

   {petaloSeleccionado && mostrarMensaje && (
  <ModalMensaje
    mensaje={petaloSeleccionado}
   onCerrar={() => {
  setMostrarMensaje(false);
  setRegresandoPetalo(true);

  setTimeout(() => {
    setPetaloSeleccionado(null);
    setRegresandoPetalo(false);
  }, 500);
}}
  />
)}

    </main>
  );
}

export default Girasol;