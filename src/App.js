import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./headerAndFooter/headerFooter";
import Inversiones from "./inversiones/inversiones";
import Vencimientos from "./inversiones/vencimientos";
import FormularioInversion from "./inversiones/formularioInversion";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/inversiones" element={<Inversiones />} />
          <Route path="/vencimiento-inversiones" element={<Vencimientos />} />
          <Route
            path="/formulario-inversion"
            element={<FormularioInversion />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
