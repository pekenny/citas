import React, { Fragment, useState, useEffect } from "react";

const FIlterCitas = ({ citas, setGetCitas }) => {
  // estado para guardar input

  const [fecha, setFecha] = useState({
    dia: "",
    buscar: ""
  });
  
  const {dia,buscar} = fecha;

  useEffect(() => {
    console.log(buscar)
    filterCitas(dia, buscar);

    
  }, [dia, buscar,citas]);

  const addFecha = (e) => {
    // setFecha(e.target.value);
    setFecha({
      [e.target.name]: e.target.value
    });
  };

  //FIltrarCItas

  const filterCitas = (dia, buscar) => {
    const citasFiltradas = citas.filter((e) => e.fecha === dia || e.mascota.toLowerCase().indexOf(buscar) > -1);
    setGetCitas(citasFiltradas);
  };

  return (
    <Fragment>
      <label>Buscar ...</label>

      <input
        className="u-full-width"
        name="dia"
        type="date"
        onChange={addFecha}
        value={dia}
      />
      <input
        className="u-full-width"
        name="buscar"
        type="text"
        onChange={addFecha}
        value={buscar}
        placeholder="Buscar ..."
      />
    </Fragment>
  );
};

export default FIlterCitas;
