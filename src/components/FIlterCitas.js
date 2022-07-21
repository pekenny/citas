import React, { Fragment, useState, useEffect } from "react";

const FIlterCitas = ({ citas, setGetCitas }) => {
  // estado para guardar input

  const [fecha, setFecha] = useState("");

  useEffect(() => {
    filterCitas(fecha);
  }, [fecha, citas]);

  const addFecha = (e) => {
    setFecha(e.target.value);
  };

  //FIltrarCItas

  const filterCitas = (fecha) => {
    const citasFiltradas = citas.filter((e) => e.fecha === fecha);
    setGetCitas(citasFiltradas);
  };

  return (
    <Fragment>
      <label>Buscar ...</label>

      <input
        className="u-full-width"
        name="fecha"
        type="date"
        onChange={addFecha}
        value={fecha}
      />
    </Fragment>
  );
};

export default FIlterCitas;
