import React from 'react';
import Habilidad from '../habilidad/Habilidad';
import Informacion from '../informacion/Informacion';
import Proyecto from '../proyecto/Proyecto';
import SobreMi from '../sobreMi/SobreMi';
import Experiencia from '../experiencia/Experiencia';


const Home = ({ windowWidth }) => {

  return (
    <div className='home'>
      <Informacion windowWidth={windowWidth} />
      <Habilidad windowWidth={windowWidth} />
      <SobreMi windowWidth={windowWidth} />
      <Proyecto windowWidth={windowWidth} />
      <Experiencia windowWidth={windowWidth} />
    </div>
  )
}

export default Home