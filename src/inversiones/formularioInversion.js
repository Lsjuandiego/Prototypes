import React, { useState } from "react";

const FormularioInversion = () => {
  const [tiempo, setTiempo] = useState("");
  const [tasa, setTasa] = useState("");
  const [periodicidad, setPeriodicidad] = useState("");
  const [fechaConstitucion, setFechaConstitucion] = useState("");
  const [fechaVencimiento, setFechaVencimiento] = useState("");
  const [valorConstituir, setValorConstituir] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailSubject = "Datos del formulario de inversión";
    const emailBody = `Tiempo: ${tiempo}\nTasa: ${tasa}\nPeriodicidad de los rendimientos: ${periodicidad}\nFecha de constitución: ${fechaConstitucion}\nFecha de vencimiento: ${fechaVencimiento}\nValor a constituir: ${valorConstituir}`;

    const gmailLink = `mailto:?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = gmailLink;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Formulario de Inversión</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="tiempo" className="block font-medium">
              Tiempo:
            </label>
            <input
              type="text"
              id="tiempo"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={tiempo}
              onChange={(e) => setTiempo(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tasa" className="block font-medium">
              Tasa:
            </label>
            <input
              type="number"
              id="tasa"
              step="0.01"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={tasa}
              onChange={(e) => setTasa(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="periodicidad" className="block font-medium">
              Periodicidad de los rendimientos:
            </label>
            <input
              type="text"
              id="periodicidad"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={periodicidad}
              onChange={(e) => setPeriodicidad(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fechaConstitucion" className="block font-medium">
              Fecha de constitución:
            </label>
            <input
              type="date"
              id="fechaConstitucion"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={fechaConstitucion}
              onChange={(e) => setFechaConstitucion(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fechaVencimiento" className="block font-medium">
              Fecha de vencimiento:
            </label>
            <input
              type="date"
              id="fechaVencimiento"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={fechaVencimiento}
              onChange={(e) => setFechaVencimiento(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="valorConstituir" className="block font-medium">
              Valor a constituir:
            </label>
            <input
              type="number"
              id="valorConstituir"
              step="0.01"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={valorConstituir}
              onChange={(e) => setValorConstituir(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioInversion;
