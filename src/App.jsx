import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./Components/Pages/Contacto/Contacto";
import Alquileres from "./Components/Pages/Alquileres/Alquileres";
import Ventas from "./Components/Pages/Ventas/Ventas";
import Nosotros from "./Components/Pages/Nosotros/Nosotros";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
          <Route path="/Home" element={<Home />}></Route>
            <Route path="/Alquileres" element={<Alquileres />}></Route>
            <Route path="/Ventas" element={<Ventas />}></Route>
            <Route path="/Contacto" element={<Contacto />}></Route>
            <Route path="/Nosotros" element={<Nosotros />}></Route>
          </Routes>
        </main>
      </BrowserRouter>      
    </>
  );
}

export default App;
