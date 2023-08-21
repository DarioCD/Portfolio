import React, { useEffect, useState } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Función para manejar el cambio en el ancho de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agregar un listener al evento resize
    window.addEventListener('resize', handleResize);

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shouldShowImage = (minWidth) => {
    return windowWidth >= minWidth;
  };

  const html = require("../../assets/html.png")
  const css = require("../../assets/css-3.png")
  const react = require("../../assets/physics.png")
  const angular = require("../../assets/AngularJS-Shield.png")
  const pyhton = require("../../assets/python.png")
  const java = require("../../assets/java.png")
  const js = require("../../assets/js.png")
  const typ = require("../../assets/Typescript_logo_2020.svg.png")
  const node = require("../../assets/node-js.png")
  const mongo = require("../../assets/mongo.png")
  const mysql = require("../../assets/mysql.png")
  const spring = require("../../assets/spring-boot-logo.png")
  const docker = require("../../assets/docker.png")
  const git = require("../../assets/git.png")
  return (
    <div className='home'>
      <div className='containerHomeIntroduction'>
        <div className='conainterInfo'>
          <div className='containerSpanName'>
            <h1>Full Stack & Application Developer</h1>
          </div>
          <div className='containerSpan'>
            <span>¡Hola! Soy Dario Chinea Delgado, un apasionado desarrollador Full Stack y creador de aplicaciones.
              Mi viaje en el mundo de la tecnología combina habilidades frontend y backend para ofrecer soluciones integrales.
              ¡Bienvenido a mi portafolio, donde mi código cobra vida!</span>
            <div class="card">
              <a class="socialContainer containerTwo" href="https://github.com/DarioCD" target='blank'>
                <svg xmlns="http://www.w3.org/2000/svg" class="socialSvg twitterSvg" fill="#fff" height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>            </a>
              <a class="socialContainer containerThree" href="https://www.linkedin.com/in/dar%C3%ADo-chinea-delgado-87156b257/" target='blank'>
                <svg viewBox="0 0 448 512" class="socialSvg linkdinSvg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
              </a>
              <a class="socialContainer containerOne" href="https://www.instagram.com/darioch_0808/" target='blank'>
                <svg viewBox="0 0 16 16" class="socialSvg instagramSvg"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="hero-img"></div>
      </div>
      <div className='containerHabilidades' id='Habilidades'>
        <div className='containerSpanHabilidades'>
          <h2>Habilidades</h2>
        </div>
        <div className='containerImgHabilidades'>
          {
            shouldShowImage(100) &&
            <OverlayTrigger
              overlay={
                <Tooltip>
                  <span>React</span>
                </Tooltip>
              }>
              <img src={react} alt='foto de React' />
            </OverlayTrigger>
          }
          {
            shouldShowImage(100) &&
            <OverlayTrigger
              overlay={
                <Tooltip>
                  <span>Java</span>
                </Tooltip>
              }>
              <img src={java} alt='foto de Java' />
            </OverlayTrigger>
          }
          {
            shouldShowImage(200) &&
            <OverlayTrigger
              overlay={
                <Tooltip>
                  <span>Spring</span>
                </Tooltip>
              }>
              <img src={spring} alt='foto de Spring' />
            </OverlayTrigger>
          }
          {
            shouldShowImage(300) &&
            <OverlayTrigger
              overlay={
                <Tooltip>
                  <span>Angular</span>
                </Tooltip>
              }>
              <img src={angular} alt='foto de Angular' />
            </OverlayTrigger>
          }
          {
            shouldShowImage(400) &&
            <OverlayTrigger
              overlay={
                <Tooltip>
                  <span>Mysql</span>
                </Tooltip>
              }>
              <img src={mysql} alt='foto de MySQL' />
            </OverlayTrigger>
          }
          {
            shouldShowImage(500) &&
            <OverlayTrigger
              overlay={
                <Tooltip>
                  <span>JavaScript</span>
                </Tooltip>
              }>
              <img src={js} alt='foto de JavaScript' />
            </OverlayTrigger>
          }
          {
            shouldShowImage(600) &&
            <OverlayTrigger
              overlay={
                <Tooltip>
                  <span>HTML</span>
                </Tooltip>
              }>
              <img src={html} alt='foto de Html' />
            </OverlayTrigger>
          }
          {
            shouldShowImage(750) &&
            <OverlayTrigger
              overlay={
                <Tooltip>
                  <span>CSSS</span>
                </Tooltip>
              }>
              <img src={css} alt='foto de CSS' />
            </OverlayTrigger>
          }
          {
            shouldShowImage(800) &&
            <OverlayTrigger
              overlay={
                <Tooltip>
                  <span>Python</span>
                </Tooltip>
              }>
              <img src={pyhton} alt='foto de Python' />
            </OverlayTrigger>
          }
          {
            shouldShowImage(900) &&
            <OverlayTrigger
              overlay={
                <Tooltip>
                  <span>TypeScrpit</span>
                </Tooltip>
              }>
              <img src={typ} alt='foto de TypeScript' />
            </OverlayTrigger>
          }
          {
            shouldShowImage(1000) &&
            <OverlayTrigger
              overlay={
                <Tooltip>
                  <span>Node</span>
                </Tooltip>
              }>
              <img src={node} alt='foto de Node.js' />
            </OverlayTrigger>
          }
          {
            shouldShowImage(1100) &&
            <OverlayTrigger
              overlay={
                <Tooltip>
                  <span>MongoDB</span>
                </Tooltip>
              }>
              <img src={mongo} alt='foto de MongoDB' />
            </OverlayTrigger>

          }
          {
            shouldShowImage(1200) &&
            <OverlayTrigger
              overlay={
                <Tooltip>
                  <span>Docker</span>
                </Tooltip>
              }>
              <img src={docker} alt='foto de Docker' />
            </OverlayTrigger>
          }
          {
            shouldShowImage(1200) &&
            <OverlayTrigger
              overlay={
                <Tooltip>
                  <span>Git</span>
                </Tooltip>
              }>
              <img src={git} alt='foto de Git' />
            </OverlayTrigger>
          }
        </div>
      </div>
    </div>
  )
}

export default Home