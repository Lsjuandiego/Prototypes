import React from "react";

const FormularioInversion = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
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
