import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-300">
      <nav className="container mx-auto py-4">
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
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-300 text-white text-center py-4 fixed bottom-0 left-0 w-full">
      {/* Agrega aquí el contenido del footer */}
    </footer>
  );
};

export { Header, Footer };
