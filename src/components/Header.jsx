import React from 'react';
import { Link } from 'react-scroll';  // Usar react-scroll Link para el scroll suave
import '../styles/Header.css'

const Header = ({ activeSection }) => {
  return (
    <header className="navbar">
      <nav>
        <Link to="section1" smooth={true} duration={500} className={activeSection === 'section1' ? 'active' : ''}>
          Inicio
        </Link>
        <Link to="section2" smooth={true} duration={500} className={activeSection === 'section2' ? 'active' : ''}>
          Habilidades
        </Link>
        <Link to="section3" smooth={true} duration={500} className={activeSection === 'section3' ? 'active' : ''}>
          Proyectos
        </Link>
        <Link to="section4" smooth={true} duration={500} className={activeSection === 'section4' ? 'active' : ''}>
          Contacto
        </Link>
      </nav>
    </header>
  );
}

export default Header;
