import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="icon1">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <a href="https://www.linkedin.com/in/severiana-duarte"><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://www.instagram.com/pris_ci85"><i className="fa-brands fa-instagram"></i></a>
      </div>
      <nav className="footer-nav">
        <ul className="footer-nav-list">
          <li><h2 className="nav-title">Compromisos</h2></li>
          <li><a href="#">Responsabilidad</a></li>
          <li><a href="#">Honestidad</a></li>
          <li><a href="#">Integridad</a></li>
        </ul>
        <ul className="footer-nav-list">
          <li><h2 className="nav-title">Servicios</h2></li>
          <li><a href="#">Creación</a></li>
          <li><a href="#">Mantenimiento de software</a></li>
          <li><a href="#">Aplicaciones informáticas</a></li>
        </ul>
      </nav>
      <p className="copyright">Copyright &copy; 2023 DigitalEvolution S.A</p>
    </footer>
  );
}

export default Footer;
