import React, { Fragment, useState, useEffect} from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {

  //Citas en localstorage

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  
  // crear state de citas

  const [citas, guardarCita] = useState([]);
  
  //useeffect para realizar ciertas operaciones cuando el state cambia

  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem('citas',JSON.stringify(citas));
    }
  },[citas,citasIniciales]);


  //Funcion que tome las citas actuales y agregue las nuevas

  const crearCita = (cita) => {
    guardarCita([...citas, cita]);
  };

  //Eliminar citas del state

  const eliminarCita = (cita) => {
    const citasFiltradas = citas.filter((e) => e.id !== cita);

    guardarCita(citasFiltradas);
  };
 
  // Mensaje condicional

  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';
  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
