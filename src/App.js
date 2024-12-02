import React from 'react';
import NavBar from './components/NavBar'; // Importo NavBar
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Configuración de rutas

function App() {
  return (
    <Router>
      <div>
        {/* Incluimos el componente NavBar */}
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<h2>Bienvenido a Mi Tienda</h2>} />
            <Route path="/ropa" element={<h2>Ropa</h2>} />
            <Route path="/electronica" element={<h2>Electrónica</h2>} />
            <Route path="/hogar" element={<h2>Hogar</h2>} />
            <Route path="/ofertas" element={<h2>Ofertas</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
