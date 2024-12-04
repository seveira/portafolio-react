import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="Primerafila">
        <h1>DIGITALEVOLUTION S.A</h1>
      </div>
      <nav className="main-nav">
        <Link to="/">INICIO</Link>
        <Link to="/contactos">Contactos</Link>
        <Link to="/quienesomos">Quiénes somos</Link>
        <Link to="/proyectos">Proyectos</Link>
        <Link to="/newsletter">Newsletter</Link> {/* Enlace para el Newsletter */}
      </nav>
    </header>
  );
}

export default Header;
