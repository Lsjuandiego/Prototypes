import React from "react";
import { Link } from "react-router-dom";

const Vencimientos = () => {
  const vencimientosData = [
    {
      entidad: "Banco A",
      tasa: 5.2,
      monto: 1000,
      fechaVencimiento: "2023-06-30",
    },
    {
      entidad: "Banco B",
      tasa: 4.8,
      monto: 2000,
      fechaVencimiento: "2023-07-15",
    },
    {
      entidad: "Banco C",
      tasa: 5.5,
      monto: 1500,
      fechaVencimiento: "2023-07-20",
    },
  ];

  const handleCancelar = (entidad) => {
    console.log("Se canceló la inversión en", entidad);
  };

  return (
    <div>
      <h1>Vencimientos</h1>
      <table>
        <thead>
          <tr>
            <th>Entidad bancaria</th>
            <th>Tasa</th>
            <th>Monto</th>
            <th>Fecha de vencimiento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vencimientosData.map((vencimiento, index) => (
            <tr key={index}>
              <td>{vencimiento.entidad}</td>
              <td>{vencimiento.tasa}</td>
              <td>{vencimiento.monto}</td>
              <td>{vencimiento.fechaVencimiento}</td>
              <td>
                <button onClick={() => handleCancelar(vencimiento.entidad)}>
                  Cancelar
                </button>
                <Link to="/formulario-inversion">
                  <button>Reinvertir</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vencimientos;
