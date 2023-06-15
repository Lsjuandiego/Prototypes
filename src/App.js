import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./headerAndFooter/headerFooter";
import Inversiones from "./inversiones/inversiones";
import Vencimientos from "./inversiones/vencimientos";
import FormularioInversion from "./inversiones/formularioInversion";
import VerLibranzas from "./libranzas/verLibranzas";
import RegistroLibranza from "./libranzas/registroLibranzas";

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
          <Route path="/libranzas" element={<VerLibranzas />} />
          <Route path="/registro-libranza" element={<RegistroLibranza />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
