import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Home from '../home/Home'
import Footer from '../footer/Footer'

const PortfolioApp = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [languaje, setLanguaje] = useState(true);
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
      <Header windowWidth={windowWidth} setLanguaje={setLanguaje} languaje={languaje} />
      <Home windowWidth={windowWidth} languaje={languaje} />
      <Footer languaje={languaje} />
    </div>
  )
}

export default PortfolioApp