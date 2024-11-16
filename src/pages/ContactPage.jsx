import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Solo GitHub
import { SiGmail } from 'react-icons/si'; // Icono de Gmail
import { FaExternalLinkAlt } from 'react-icons/fa'; // Icono de enlace externo
import '../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-left">
        <h2>¡Ponte en contacto conmigo!</h2>
        <p>
          Si tienes alguna pregunta, no dudes en enviarme un mensaje. Estoy disponible para proyectos, colaboraciones o cualquier consulta que tengas.
        </p>
        <div className="social-icons">
          <a href="https://github.com/richito1307" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} />
          </a>
          <a href="https://storage.rxresu.me/cm3dfcbko2es6zg05xckrfc06/resumes/Junior Software Developer.pdf" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt size={40} /> {/* Agregando el ícono de enlace externo */}
          </a>
          <a href="mailto:richito1307@gmail.com" target="_blank" rel="noopener noreferrer">
            <SiGmail size={40} />
          </a>
        </div>
      </div>

      <div className="contact-right">
        <h3>Formulario de Contacto</h3>
        <form action="mailto:richito1307@gmail.com" method="post" encType="text/plain">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
