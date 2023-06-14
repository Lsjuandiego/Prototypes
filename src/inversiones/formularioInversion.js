import React from "react";

const FormularioInversion = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
  };

  return (
    <div>
      <h1>Formulario de Inversión</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="tiempo">Tiempo:</label>
          <input type="text" id="tiempo" />
        </div>
        <div>
          <label htmlFor="tasa">Tasa:</label>
          <input type="number" id="tasa" step="0.01" />
        </div>
        <div>
          <label htmlFor="periodicidad">
            Periodicidad de los rendimientos:
          </label>
          <input type="text" id="periodicidad" />
        </div>
        <div>
          <label htmlFor="fechaConstitucion">Fecha de constitución:</label>
          <input type="date" id="fechaConstitucion" />
        </div>
        <div>
          <label htmlFor="fechaVencimiento">Fecha de vencimiento:</label>
          <input type="date" id="fechaVencimiento" />
        </div>
        <div>
          <label htmlFor="valorConstituir">Valor a constituir:</label>
          <input type="number" id="valorConstituir" step="0.01" />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioInversion;
