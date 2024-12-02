// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Para agregar estilos personalizados si es necesario

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Título de la tienda */}
        <Link to="/" className="navbar-brand">Mi Tienda</Link>

        {/* Botón menú desplegable en Celus */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/ropa" className="nav-link">Ropa</Link>
            </li>
            <li className="nav-item">
              <Link to="/electronica" className="nav-link">Electrónica</Link>
            </li>
            <li className="nav-item">
              <Link to="/hogar" className="nav-link">Hogar</Link>
            </li>
            <li className="nav-item">
              <Link to="/ofertas" className="nav-link">Ofertas</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
