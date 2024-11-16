// src/pages/ProjectsPage.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/ProjectsPage.css';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Proyecto 1',
      image: 'ruta-a-imagen-del-proyecto1.jpg',
      tags: ['React', 'Node.js', 'CSS'],
      link: 'https://link-del-proyecto1.com'
    },
    {
      title: 'Proyecto 2',
      image: 'ruta-a-imagen-del-proyecto2.jpg',
      tags: ['Python', 'Django', 'HTML'],
      link: 'https://link-del-proyecto2.com'
    },
    {
      title: 'Proyecto 3',
      image: 'ruta-a-imagen-del-proyecto3.jpg',
      tags: ['JavaScript', 'MongoDB', 'Express'],
      link: null // Este proyecto no tiene enlace
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
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
