import React from 'react';
import Habilidad from '../habilidad/Habilidad';
import Informacion from '../informacion/Informacion';
import Proyecto from '../proyecto/Proyecto';
import SobreMi from '../sobreMi/SobreMi';
import Experiencia from '../experiencia/Experiencia';


const Home = ({ windowWidth, languaje }) => {

  return (
    <div className='home' id='Inicio'>
      <Informacion windowWidth={windowWidth} languaje={languaje} />
      <Habilidad windowWidth={windowWidth} languaje={languaje} />
      <SobreMi windowWidth={windowWidth} languaje={languaje} />
      <Proyecto windowWidth={windowWidth} languaje={languaje} />
      <Experiencia windowWidth={windowWidth} languaje={languaje} />
    </div>
  )
}

export default Home