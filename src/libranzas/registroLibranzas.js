import React, { useState } from "react";

const RegistroLibranza = () => {
  const [codigo, setCodigo] = useState("");
  const [entidad, setEntidad] = useState("");
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [montoAprobado, setMontoAprobado] = useState("");
  const [plazo, setPlazo] = useState("");
  const [valorCuota, setValorCuota] = useState("");
  const [retanqueo, setRetanqueo] = useState("");
  const [cuotaRetanqueo, setCuotaRetanqueo] = useState("");
  const [compraCartera, setCompraCartera] = useState("");
  const [entidadCartera, setEntidadCartera] = useState("");
  const [valorCuotaCartera, setValorCuotaCartera] = useState("");
  const [aprobacionEntidad, setAprobacionEntidad] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de envío del formulario
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header className="bg-blue-500 flex-shrink-0">
        {/* Contenido del header */}
      </header>
      <main className="flex-grow overflow-y-auto">
        <div className="flex justify-center">
          <div className="w-full sm:max-w-md bg-white rounded-lg p-6 shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Registro de Libranza</h1>
            <form onSubmit={handleSubmit}>
              {/* Campos del formulario */}
              <div className="mb-4">
                <label htmlFor="codigo" className="block font-medium">
                  Código:
                </label>
                <input
                  type="text"
                  id="codigo"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="entidad" className="block font-medium">
                  Entidad:
                </label>
                <input
                  type="text"
                  id="entidad"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  value={entidad}
                  onChange={(e) => setEntidad(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="cedula" className="block font-medium">
                  Cédula:
                </label>
                <input
                  type="text"
                  id="cedula"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  value={cedula}
                  onChange={(e) => setCedula(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="nombre" className="block font-medium">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="montoAprobado" className="block font-medium">
                  Monto Aprobado:
                </label>
                <input
                  type="text"
                  id="montoAprobado"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  value={montoAprobado}
                  onChange={(e) => setMontoAprobado(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="plazo" className="block font-medium">
                  Plazo:
                </label>
                <input
                  type="text"
                  id="plazo"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  value={plazo}
                  onChange={(e) => setPlazo(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="valorCuota" className="block font-medium">
                  Valor Cuota:
                </label>
                <input
                  type="text"
                  id="valorCuota"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  value={valorCuota}
                  onChange={(e) => setValorCuota(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="retanqueo" className="block font-medium">
                  Retanqueo SI/NO:
                </label>
                <select
                  id="retanqueo"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  value={retanqueo}
                  onChange={(e) => setRetanqueo(e.target.value)}
                >
                  <option value="">Seleccionar</option>
                  <option value="SI">SI</option>
                  <option value="NO">NO</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="cuotaRetanqueo" className="block font-medium">
                  Cuota Retanqueo:
                </label>
                <input
                  type="text"
                  id="cuotaRetanqueo"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  value={cuotaRetanqueo}
                  onChange={(e) => setCuotaRetanqueo(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="compraCartera" className="block font-medium">
                  Compra de Cartera Especificadas en el Desprendible SI/NO:
                </label>
                <select
                  id="compraCartera"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  value={compraCartera}
                  onChange={(e) => setCompraCartera(e.target.value)}
                >
                  <option value="">Seleccionar</option>
                  <option value="SI">SI</option>
                  <option value="NO">NO</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="entidadCartera" className="block font-medium">
                  Entidad Objeto Compra de Cartera:
                </label>
                <input
                  type="text"
                  id="entidadCartera"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  value={entidadCartera}
                  onChange={(e) => setEntidadCartera(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="valorCuotaCartera"
                  className="block font-medium"
                >
                  Valor Cuota de la Cartera a Comprar:
                </label>
                <input
                  type="text"
                  id="valorCuotaCartera"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  value={valorCuotaCartera}
                  onChange={(e) => setValorCuotaCartera(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="aprobacionEntidad"
                  className="block font-medium"
                >
                  Aprobación Entidad Pagadora:
                </label>
                <input
                  type="text"
                  id="aprobacionEntidad"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  value={aprobacionEntidad}
                  onChange={(e) => setAprobacionEntidad(e.target.value)}
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
      </main>
      <footer className="bg-blue-500 text-white text-center py-4">
        {/* Contenido del footer */}
      </footer>
    </div>
  );
};

export default RegistroLibranza;
