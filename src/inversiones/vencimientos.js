import React, { useState } from "react";
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

  const [showModal, setShowModal] = useState(false);
  const [selectedEntidad, setSelectedEntidad] = useState(null);

  const handleCancelar = (entidad) => {
    setSelectedEntidad(entidad);
    setShowModal(true);
  };

  const handleConfirmCancel = () => {
    // Aquí realizarías la lógica de eliminación de la fila o cualquier otra acción necesaria
    console.log("Se canceló la inversión en", selectedEntidad);

    // Redirigir a Gmail con mensaje de cancelación y datos de la fila
    const emailSubject = "Cancelación de inversión";
    const emailBody = `Se ha cancelado la inversión en la entidad "${selectedEntidad}". Datos de la inversión:\n\n${getFormattedRow(
      selectedEntidad
    )}`;
    const gmailLink = `mailto:?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = gmailLink;
  };

  const handleCancelModal = () => {
    setShowModal(false);
    setSelectedEntidad(null);
  };

  const getFormattedRow = (entidad) => {
    const row = vencimientosData.find(
      (vencimiento) => vencimiento.entidad === entidad
    );
    if (row) {
      return `Entidad bancaria: ${row.entidad}\nTasa: ${row.tasa}\nMonto: ${row.monto}\nFecha de vencimiento: ${row.fechaVencimiento}`;
    }
    return "";
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-4">Vencimientos</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="bg-gray-200 py-2 px-4">Entidad bancaria</th>
            <th className="bg-gray-200 py-2 px-4">Tasa</th>
            <th className="bg-gray-200 py-2 px-4">Monto</th>
            <th className="bg-gray-200 py-2 px-4">Fecha de vencimiento</th>
            <th className="bg-gray-200 py-2 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vencimientosData.map((vencimiento, index) => (
            <tr key={index}>
              <td className="border py-2 px-4">{vencimiento.entidad}</td>
              <td className="border py-2 px-4">{vencimiento.tasa}</td>
              <td className="border py-2 px-4">{vencimiento.monto}</td>
              <td className="border py-2 px-4">
                {vencimiento.fechaVencimiento}
              </td>
              <td className="border py-2 px-4">
                <button
                  onClick={() => handleCancelar(vencimiento.entidad)}
                  className="rounded-full bg-red-500 text-white py-1 px-4 mr-2 hover:bg-red-700 transition-colors duration-300"
                >
                  Cancelar
                </button>
                <Link to="/formulario-inversion">
                  <button className="rounded-full bg-green-500 text-white py-1 px-4 hover:bg-green-700 transition-colors duration-300">
                    Reinvertir
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Confirmar cancelación</h2>
            <p>
              ¿Estás seguro de que deseas cancelar la inversión en "
              {selectedEntidad}"?
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="rounded-full bg-red-500 text-white py-1 px-4 mr-2 hover:bg-red-700 transition-colors duration-300"
                onClick={handleConfirmCancel}
              >
                Confirmar
              </button>
              <button
                className="rounded-full bg-gray-300 text-gray-700 py-1 px-4 hover:bg-gray-400 transition-colors duration-300"
                onClick={handleCancelModal}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vencimientos;
