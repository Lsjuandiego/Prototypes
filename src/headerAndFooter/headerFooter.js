import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logoUcaldas.png"; // Ruta de la imagen

const Header = () => {
  return (
    <header className="bg-blue-500 flex justify-between items-center py-4">
      <nav className="container mx-auto">
        <ul className="flex space-x-4 text-white font-sans">
          <li>
            <Link
              to="/inversiones"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Inversiones
            </Link>
          </li>
          {/* Agrega aquí más elementos <li> para otros links en el header */}
        </ul>
      </nav>
      <img src={logo} alt="Logo Ucaldas" className="w-12 h-12" />
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white text-center py-4 fixed bottom-0 left-0 w-full">
      {/* Agrega aquí el contenido del footer */}
    </footer>
  );
};

export { Header, Footer };
