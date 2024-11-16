// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, image, tags, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      {link && (
        <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
          Ver proyecto
        </a>
      )}
    </div>
  );
}

export default ProjectCard;