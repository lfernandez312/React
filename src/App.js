import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <Router>
      <div>
        {/* Incluyo el componente NavBar */}
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a Mi Tienda"> {/*contenido a children */} 
              <p>Disfruta de nuestras ofertas.</p> 
            </ItemListContainer>} />
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
