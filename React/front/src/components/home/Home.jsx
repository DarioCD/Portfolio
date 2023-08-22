import React from 'react'
import Informacion from '../informacion/Informacion';
import Habilidad from '../habilidad/Habilidad';
import SobreMi from '../sobreMi/SobreMi';
import Proyecto from '../proyecto/Proyecto';

const Home = () => {


  


  return (
    <div className='home'>
      <Informacion/>
      <Habilidad/>
      <SobreMi/>
      <Proyecto/>
    </div>
  )
}

export default Home