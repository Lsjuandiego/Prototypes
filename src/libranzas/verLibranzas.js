import React from "react";
import { Link } from "react-router-dom";
const VerLibranzas = () => {
  return (
    <div>
      <Link
        to="/registro-libranza"
        className="text-blue-500 hover:text-blue-700 mb-4 ml-5"
      >
        Registrar libranza
      </Link>
      <table className="border-collapse w-full">
        <thead>
          <tr className="bg-gray-200">
            <th colSpan="13" className="py-2">
              FORMATO PARA EL REGISTRO DE LIBRANZAS
            </th>
          </tr>
          <tr className="bg-gray-200">
            <th colSpan="13" className="py-2">
              CODIGO: R-3215-I-GH-940 VERSIÓN: 1
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 py-2 px-4">ENTIDAD</th>
            <th className="border border-gray-300 py-2 px-4">CÉDULA</th>
            <th className="border border-gray-300 py-2 px-4">NOMBRE</th>
            <th className="border border-gray-300 py-2 px-4">Monto Aprobado</th>
            <th className="border border-gray-300 py-2 px-4">PLAZO</th>
            <th className="border border-gray-300 py-2 px-4">Valor Cuota</th>
            <th className="border border-gray-300 py-2 px-4">
              RETANQUEO SI/NO
            </th>
            <th className="border border-gray-300 py-2 px-4">
              CUOTA RETANQUEO
            </th>
            <th className="border border-gray-300 py-2 px-4">
              COMPRA DE CARTERA ESPECIFICADAS EN EL DESPRENDIBLE SI/NO
            </th>
            <th className="border border-gray-300 py-2 px-4">
              ENTIDAD OBJETO COMPRA DE CARTERA
            </th>
            <th className="border border-gray-300 py-2 px-4">
              VALOR CUOTA DE LA CARTERA A COMPRAR
            </th>
            <th className="border border-gray-300 py-2 px-4">
              APROBACIÓN ENTIDAD PAGADORA
            </th>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2 px-4">BANCO XXXXXXX</td>
            <td className="border border-gray-300 py-2 px-4">19191919191</td>
            <td className="border border-gray-300 py-2 px-4">
              PEPITO PEREZ PEREZ
            </td>
            <td className="border border-gray-300 py-2 px-4">$ 26.000.000</td>
            <td className="border border-gray-300 py-2 px-4">72</td>
            <td className="border border-gray-300 py-2 px-4">$ 625.165</td>
            <td className="border border-gray-300 py-2 px-4">NO</td>
            <td className="border border-gray-300 py-2 px-4">NA</td>
            <td className="border border-gray-300 py-2 px-4">NO</td>
            <td className="border border-gray-300 py-2 px-4">NA</td>
            <td className="border border-gray-300 py-2 px-4">NA</td>
            <td className="border border-gray-300 py-2 px-4">NA</td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2 px-4">BANCO XXXXXXX</td>
            <td className="border border-gray-300 py-2 px-4">101010101</td>
            <td className="border border-gray-300 py-2 px-4">
              AGAPITO GOMEZ GOMEZ
            </td>
            <td className="border border-gray-300 py-2 px-4">$ 30.000.000</td>
            <td className="border border-gray-300 py-2 px-4">60</td>
            <td className="border border-gray-300 py-2 px-4">$ 500.000</td>
            <td className="border border-gray-300 py-2 px-4">SI</td>
            <td className="border border-gray-300 py-2 px-4">$ 450.000</td>
            <td className="border border-gray-300 py-2 px-4">SI</td>
            <td className="border border-gray-300 py-2 px-4">BANCO XXXXX</td>
            <td className="border border-gray-300 py-2 px-4">$ 200.000</td>
            <td className="border border-gray-300 py-2 px-4">NA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VerLibranzas;
