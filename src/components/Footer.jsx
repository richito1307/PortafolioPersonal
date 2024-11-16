import React from 'react';
import '../styles/Footer.css';

const Footer = ({ onChangeAnimation, emoji }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icon" onClick={onChangeAnimation}>
          {emoji} {/* Mostrar el emoji asociado a la animación actual */}
        </div>
        <div className="footer-text">Gracias por visitar mi página</div>
      </div>
    </footer>
  );
}

export default Footer;
