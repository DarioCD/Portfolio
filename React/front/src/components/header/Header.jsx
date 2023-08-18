import React, { useEffect } from 'react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const header = document.getElementById('header');

    function updateHeaderStyle() {
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', updateHeaderStyle);
    updateHeaderStyle();

    return () => {
      window.removeEventListener('scroll', updateHeaderStyle);
    };
  }, []);

  return (
    <div className='header' id="header">
      <div className='containerHeaderName'>
        <span>Darío Chinea</span>
      </div>
      <div className='containerHeaderSpan'>
        <span onClick={() => scrollToSection('Habilidades')} className="highlightable">Habilidades</span>
        <span onClick={() => scrollToSection('Proyectos')} className="highlightable">Proyectos</span>
        <span onClick={() => scrollToSection('Experiencia')} className="highlightable">Experiencia</span>
        <span onClick={() => scrollToSection('Certificados')} className="highlightable">Certificados</span>
        <span onClick={() => scrollToSection('Sobre mí')} className="highlightable">Sobre mí</span>
        <span onClick={() => scrollToSection('Contacto')} className="highlightable">Contacto</span>
      </div>
    </div>
  );
};

export default Header;
