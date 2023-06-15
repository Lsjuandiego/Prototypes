import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TablaInversiones = ({
  inversiones,
  onElegirMejorOpcion,
  tableClassName,
  thClassName,
  tdClassName,
  trClassName,
  buttonClassName,
}) => {
  const [mejorOpcion, setMejorOpcion] = useState(null);
  const navigate = useNavigate(); // Hook useNavigate para la redirección

  const elegirMejorOpcion = () => {
    let mejorTasa = -Infinity;
    let mejorRiesgo = Infinity;
    let mejorInversion = null;

    inversiones.forEach((inversion) => {
      const riesgoValue = getRiesgoValue(inversion.riesgos);

      if (inversion.tasa > mejorTasa && riesgoValue < mejorRiesgo) {
        mejorTasa = inversion.tasa;
        mejorRiesgo = riesgoValue;
        mejorInversion = inversion;
      }
    });

    setMejorOpcion(mejorInversion);
    onElegirMejorOpcion(mejorInversion);
  };

  const getRiesgoValue = (riesgo) => {
    switch (riesgo) {
      case "Bajo":
        return 1;
      case "Medio":
        return 2;
      case "Alto":
        return 3;
      default:
        return 0;
    }
  };

  const handleNotificarEntidad = () => {
    // Aquí realizamos la redirección al formulario
    navigate("/formulario-inversion");
  };

  return (
    <div>
      <table className={tableClassName}>
        <thead>
          <tr>
            <th className={thClassName}>Entidad bancaria</th>
            <th className={thClassName}>Tasa</th>
            <th className={thClassName}>Riesgos</th>
            <th className={thClassName}>Calificación</th>
          </tr>
        </thead>
        <tbody>
          {inversiones.map((inversion, index) => (
            <tr
              key={index}
              className={trClassName}
              style={{
                textDecoration:
                  mejorOpcion === inversion ? "underline" : "none",
                backgroundColor:
                  mejorOpcion === inversion ? "yellow" : "transparent",
              }}
            >
              <td className={tdClassName}>{inversion.entidad}</td>
              <td className={tdClassName}>{inversion.tasa}</td>
              <td className={tdClassName}>{inversion.riesgos}</td>
              <td className={tdClassName}>{inversion.calificacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {mejorOpcion ? (
        <button onClick={handleNotificarEntidad} className={buttonClassName}>
          Notificar a la entidad
        </button>
      ) : (
        <button onClick={elegirMejorOpcion} className={buttonClassName}>
          Elegir mejor opción
        </button>
      )}
    </div>
  );
};

export default TablaInversiones;
