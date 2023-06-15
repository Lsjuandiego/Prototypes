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
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-4">Inversiones</h1>
      <Link
        to="/vencimiento-inversiones"
        className="text-blue-500 hover:text-blue-700 mb-4"
      >
        Ver todas las inversiones
      </Link>
      <TablaInversiones
        inversiones={inversiones}
        onElegirMejorOpcion={handleElegirMejorOpcion}
        tableClassName="w-full border-collapse"
        thClassName="bg-gray-200 py-2 px-4 border-b"
        tdClassName="border py-2 px-4"
        trClassName="border-b"
        buttonClassName="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      />
    </div>
  );
};

export default Inversiones;
