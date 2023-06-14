import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/inversiones">Inversiones</Link>
          </li>
          {/* Agrega aquí más elementos <li> para otros links en el header */}
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  return <footer>{/* Agrega aquí el contenido del footer */}</footer>;
};

export { Header, Footer };
