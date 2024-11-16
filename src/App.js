import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Element } from 'react-scroll';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AbilitiesPage from './pages/AbilitiesPage';
import ContactPage from './pages/ContactPage';
import PresentationPage from './pages/PresentationPage';
import ProjectsPage from './pages/ProjectsPage';
import { AnimatedBackground } from 'animated-backgrounds';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [animationName, setAnimationName] = useState('floatingBubbles');  // Estado para el nombre de la animación
  const [emoji, setEmoji] = useState('🌟');  // Estado para el emoji

  const animations = [
    { name: 'starryNight', emoji: '🌟' },
    { name: 'floatingBubbles', emoji: '🧫' },
    { name: 'gradientWave', emoji: '💫' },
    { name: 'particleNetwork', emoji: '🌐' },
    { name: 'galaxySpiral', emoji: '🌌' },
    { name: 'rainbowWaves', emoji: '🌈' },
    { name: 'geometricShapes', emoji: '🔷' },
    { name: 'fireflies', emoji: '🪲' },
    { name: 'matrixRain', emoji: '💻' },
    { name: 'quantumField', emoji: '⚛️' },
    { name: 'electricStorm', emoji: '⚡' },
    { name: 'cosmicDust', emoji: '🌠' },
    { name: 'neonPulse', emoji: '🟣' },
    { name: 'auroraBorealis', emoji: '🌌' },
  ];

  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);

  // Función para cambiar la animación y emoji
  const changeAnimation = () => {
    const nextIndex = (currentAnimationIndex + 1) % animations.length;
    setCurrentAnimationIndex(nextIndex);

    const nextAnimation = animations[nextIndex];
    setAnimationName(nextAnimation.name);
    setEmoji(nextAnimation.emoji);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 400) {
        setActiveSection('section1');
      } else if (scrollPosition >= 400 && scrollPosition < 1200) {
        setActiveSection('section2');
      } else if (scrollPosition >= 1200 && scrollPosition < 1800) {
        setActiveSection('section3');
      } else {
        setActiveSection('section4');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Pasar la función de cambio de animación al Header */}
        <Header activeSection={activeSection} />
        {/* Pasar el estado de la animación y el emoji al AnimatedBackground */}
        <AnimatedBackground animationName={animationName} />
        <main>
          <Element name="section1" className="section">
            <PresentationPage />
          </Element>
          <Element name="section2" className="section">
            <AbilitiesPage />
          </Element>
          <Element name="section3" className="section">
            <ProjectsPage />
          </Element>
          <Element name="section4" className="section">
            <ContactPage />
          </Element>
        </main>
        {/* Pasar la función changeAnimation al Footer */}
        <Footer onChangeAnimation={changeAnimation} emoji={emoji} />
      </div>
    </Router>
  );
}

export default App;
