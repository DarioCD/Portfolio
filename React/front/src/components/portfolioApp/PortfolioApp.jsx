import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Home from '../home/Home'
import Footer from '../footer/Footer'

const PortfolioApp = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
        <Header windowWidth={windowWidth}/>
        <Home windowWidth={windowWidth}/>
        <Footer/>
    </div>
  )
}

export default PortfolioApp