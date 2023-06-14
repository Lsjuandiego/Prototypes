import React from "react";
import TablaInversiones from "./tablaInversiones";
import { Link } from "react-router-dom";

const Inversiones = () => {
  const inversiones = [
    { entidad: "Banco A", tasa: 5.2, riesgos: "Bajo", calificacion: "A" },
    { entidad: "Banco B", tasa: 4.8, riesgos: "Medio", calificacion: "B" },
    { entidad: "Banco C", tasa: 5.5, riesgos: "Alto", calificacion: "C" },
    { entidad: "Banco D", tasa: 6.1, riesgos: "Bajo", calificacion: "A" },
  ];

  const handleElegirMejorOpcion = (mejorOpcion) => {
    console.log("Mejor opción seleccionada:", mejorOpcion);
  };

  return (
    <div>
      <h1>Inversiones</h1>
      <Link to="/vencimiento-inversiones">Vencimientos</Link>
      <TablaInversiones
        inversiones={inversiones}
        onElegirMejorOpcion={handleElegirMejorOpcion}
      />
    </div>
  );
};

export default Inversiones;
