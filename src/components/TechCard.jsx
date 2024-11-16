// src/components/TechCard.js
import React from 'react';
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaPython, FaJava, FaJs  } from 'react-icons/fa';  // Importamos algunos iconos de React Icons
import { SiCsharp, SiMysql, SiSpringboot, SiFlutter, SiGit, SiDart  } from 'react-icons/si'; // Importamos más iconos para otras tecnologías

// Mapeo de iconos de tecnologías
const iconMapping = {
  react: <FaReact size={50} />,
  node: <FaNode size={50} />,
  html: <FaHtml5 size={50} />,
  css: <FaCss3Alt size={50} />,
  python: <FaPython size={50} />,
  java: <FaJava size={50} />,  // Java icono
  csharp: <SiCsharp size={50} />,
  mysql: <SiMysql size={50} />,
  springboot: <SiSpringboot size={50} />,
  flutter: <SiFlutter size={50} />,
  git: <SiGit size={50} />,
  dart: <SiDart size={50}/>,
  javascript: <FaJs size={50}/>
};

const TechCard = ({ techName, techDescription }) => {
  return (
    <div className="tech-card">
      <div className="icon">{iconMapping[techName]}</div>  {/* Renderizamos el icono basado en el nombre de la tecnología */}
      <h3>{techName.charAt(0).toUpperCase() + techName.slice(1)}</h3>
      <p>{techDescription}</p>
    </div>
  );
}

export default TechCard;
