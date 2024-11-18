// src/pages/ProjectsPage.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/ProjectsPage.css';

import proyecto1 from '../images/Innovatec.jpeg';
import proyecto2 from '../images/movil.jpeg';
import proyecto3 from '../images/web.jpeg';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'CasyNew',
      image: proyecto1,
      tags: ['React', 'Azure', 'Inteligencia Artificial'],
      description: 'Aplicación web desarrollada en React con integración de servicios de Azure, implementando IA para el reconocimiento de ropa y búsqueda de prendas similares.'
    },
    {
      title: 'E-commerce Móvil',
      image: proyecto2,
      tags: ['Dart', 'Flutter', 'Sprin gBoot'],
      description: 'Aplicación móvil de e-commerce diseñada con Dart y Flutter, centrada en una experiencia de usuario optimizada y conectada a un backend con Spring Boot.'
    },
    {
      title: 'E-commerce Web para Admins',
      image: proyecto3,
      tags: ['React', 'Spring Boot', 'JavaScript'],
      description: 'Versión web del sistema de e-commerce para administradores, con énfasis en el backend desarrollado en Spring Boot y una interfaz en React.'
    }
  ];

  return (
    <div className="projects-page">
      <h2>Mis Proyectos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            tags={project.tags}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
