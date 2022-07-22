import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
import FIlterCitas from "./components/FIlterCitas";


function App() {
  const getLocalStorage = JSON.parse(localStorage.getItem("citas"));

  if (!getLocalStorage) {
    localStorage.setItem("citas", JSON.stringify([]));
  }

  // crear state de citas

  const [citas, guardarCita] = useState(
    getLocalStorage
  );

  //estado para almacenar citas filtradas

  const [getCItas, setGetCitas] = useState([]);

  //useeffect para realizar ciertas operaciones cuando el state cambia

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

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

  const titulo =
    citas.length === 0 ? "No hay turnos" : "Administra tus turnos";
  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <h2>{titulo}</h2>
          <div className="one-half column">
            <FIlterCitas citas={citas} setGetCitas={setGetCitas} />
            {getCItas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
          <h2>Todas los turnos</h2>
            <div className="twelve columns">
             
              {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  );
}

export default App;
