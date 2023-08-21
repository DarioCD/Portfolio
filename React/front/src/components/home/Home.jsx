import React from 'react'
import Informacion from '../informacion/Informacion';
import Habilidad from '../habilidad/Habilidad';
import SobreMi from '../sobreMi/SobreMi';

const Home = () => {


  


  return (
    <div className='home'>
      <Informacion/>
      <Habilidad/>
      <SobreMi/>
    </div>
  )
}

export default Home