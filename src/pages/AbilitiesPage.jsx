import React from 'react';
import TechCard from '../components/TechCard';
import '../styles/AbilitiesPage.css';

const AbilitiesPage = () => {
  return (
    <div className="abilities-page">
      <h2>Mis Habilidades</h2>
      <div className="tech-cards-container">
        <TechCard 
          techName="javascript"  // Cambiar a "javascript" para que coincida con la clave en iconMapping
          techDescription="JavaScript es un lenguaje de programación que permite crear interactividad en sitios web." 
        />
        <TechCard 
          techName="java"  // Cambiar a "java"
          techDescription="Java es un lenguaje de programación ampliamente utilizado en aplicaciones empresariales y móviles." 
        />
        <TechCard 
          techName="python"  // Cambiar a "python"
          techDescription="Python es un lenguaje de programación interpretado, de alto nivel y fácil de aprender." 
        />
        <TechCard 
          techName="csharp"  // Cambiar a "csharp"
          techDescription="C# es un lenguaje de programación desarrollado por Microsoft para aplicaciones en .NET." 
        />
        <TechCard 
          techName="mysql"  // Cambiar a "mysql"
          techDescription="MySQL es un sistema de gestión de bases de datos relacional de código abierto." 
        />
        <TechCard 
          techName="springboot"  // Cambiar a "springboot"
          techDescription="Spring Boot es un marco de desarrollo para crear aplicaciones Java de manera rápida y sencilla." 
        />
        <TechCard 
          techName="react"  // Cambiar a "react"
          techDescription="React es una biblioteca de JavaScript para crear interfaces de usuario." 
        />
        <TechCard 
          techName="flutter"  // Cambiar a "flutter"
          techDescription="Flutter es un marco de trabajo para crear aplicaciones móviles nativas con una sola base de código." 
        />
        <TechCard 
          techName="dart"  // Cambiar a "dart"
          techDescription="Dart es un lenguaje de programación utilizado principalmente con Flutter para crear aplicaciones móviles y web." 
        />
        <TechCard 
          techName="git"  // Cambiar a "git"
          techDescription="Git es un sistema de control de versiones distribuido utilizado para gestionar el código fuente." 
        />
      </div>
    </div>
  );
}

export default AbilitiesPage;
