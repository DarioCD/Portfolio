import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Habilidad = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Función para manejar el cambio en el ancho de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agregar un listener al evento resize
    window.addEventListener("resize", handleResize);

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const shouldShowImage = (minWidth) => {
    return windowWidth >= minWidth;
  };

  const html = require("../../assets/html.png");
  const css = require("../../assets/css-3.png");
  const react = require("../../assets/physics.png");
  const angular = require("../../assets/AngularJS-Shield.png");
  const pyhton = require("../../assets/python.png");
  const java = require("../../assets/java.png");
  const js = require("../../assets/js.png");
  const typ = require("../../assets/Typescript_logo_2020.svg.png");
  const node = require("../../assets/node-js.png");
  const mongo = require("../../assets/mongo.png");
  const mysql = require("../../assets/mysql.png");
  const spring = require("../../assets/spring-boot-logo.png");
  const docker = require("../../assets/docker.png");
  const git = require("../../assets/git.png");

  return (
    <div className="containerHabilidades" id="Habilidades">
      <div className="containerSpanHabilidades">
        <h2>Habilidades</h2>
      </div>
      <div className="containerImgHabilidades">
        {shouldShowImage(100) && (
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span>React</span>
              </Tooltip>
            }
          >
            <img src={react} alt="foto de React" />
          </OverlayTrigger>
        )}
        {shouldShowImage(100) && (
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span>Java</span>
              </Tooltip>
            }
          >
            <img src={java} alt="foto de Java" />
          </OverlayTrigger>
        )}
        {shouldShowImage(200) && (
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span>Spring</span>
              </Tooltip>
            }
          >
            <img src={spring} alt="foto de Spring" />
          </OverlayTrigger>
        )}
        {shouldShowImage(300) && (
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span>Angular</span>
              </Tooltip>
            }
          >
            <img src={angular} alt="foto de Angular" />
          </OverlayTrigger>
        )}
        {shouldShowImage(400) && (
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span>Mysql</span>
              </Tooltip>
            }
          >
            <img src={mysql} alt="foto de MySQL" />
          </OverlayTrigger>
        )}
        {shouldShowImage(500) && (
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span>JavaScript</span>
              </Tooltip>
            }
          >
            <img src={js} alt="foto de JavaScript" />
          </OverlayTrigger>
        )}
        {shouldShowImage(600) && (
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span>HTML</span>
              </Tooltip>
            }
          >
            <img src={html} alt="foto de Html" />
          </OverlayTrigger>
        )}
        {shouldShowImage(750) && (
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span>CSSS</span>
              </Tooltip>
            }
          >
            <img src={css} alt="foto de CSS" />
          </OverlayTrigger>
        )}
        {shouldShowImage(800) && (
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span>Python</span>
              </Tooltip>
            }
          >
            <img src={pyhton} alt="foto de Python" />
          </OverlayTrigger>
        )}
        {shouldShowImage(900) && (
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span>TypeScrpit</span>
              </Tooltip>
            }
          >
            <img src={typ} alt="foto de TypeScript" />
          </OverlayTrigger>
        )}
        {shouldShowImage(1000) && (
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span>Node</span>
              </Tooltip>
            }
          >
            <img src={node} alt="foto de Node.js" />
          </OverlayTrigger>
        )}
        {shouldShowImage(1100) && (
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span>MongoDB</span>
              </Tooltip>
            }
          >
            <img src={mongo} alt="foto de MongoDB" />
          </OverlayTrigger>
        )}
        {shouldShowImage(1200) && (
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span>Docker</span>
              </Tooltip>
            }
          >
            <img src={docker} alt="foto de Docker" />
          </OverlayTrigger>
        )}
        {shouldShowImage(1200) && (
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span>Git</span>
              </Tooltip>
            }
          >
            <img src={git} alt="foto de Git" />
          </OverlayTrigger>
        )}
      </div>
    </div>
  );
};

export default Habilidad;
