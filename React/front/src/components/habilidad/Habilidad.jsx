import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Habilidad = ({ languaje }) => {
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
        {
          languaje
            ?
            <h1>Habilidades</h1>
            :
            <h1>Skills</h1>
        }
      </div>
      <div className="containerImgHabilidades">
        {(
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className="tootltip">React</span>
              </Tooltip>
            }
          >
            <img src={react} alt="foto de React" loading="lazy" />
          </OverlayTrigger>
        )}
        {(
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className="tootltip">Java</span>
              </Tooltip>
            }
          >
            <img src={java} alt="foto de Java" loading="lazy" />
          </OverlayTrigger>
        )}
        {(
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className="tootltip">Spring</span>
              </Tooltip>
            }
          >
            <img src={spring} alt="foto de Spring" loading="lazy" />
          </OverlayTrigger>
        )}
        {(
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className="tootltip">Angular</span>
              </Tooltip>
            }
          >
            <img src={angular} alt="foto de Angular" loading="lazy" />
          </OverlayTrigger>
        )}
        {(
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className="tootltip">Mysql</span>
              </Tooltip>
            }
          >
            <img src={mysql} alt="foto de MySQL" loading="lazy" />
          </OverlayTrigger>
        )}
        {(
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className="tootltip">JavaScript</span>
              </Tooltip>
            }
          >
            <img src={js} alt="foto de JavaScript" loading="lazy" />
          </OverlayTrigger>
        )}
        {(
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className="tootltip">HTML</span>
              </Tooltip>
            }
          >
            <img src={html} alt="foto de Html" loading="lazy" />
          </OverlayTrigger>
        )}
        {(
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className="tootltip">CSS</span>
              </Tooltip>
            }
          >
            <img src={css} alt="foto de CSS" loading="lazy" />
          </OverlayTrigger>
        )}
        {(
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className="tootltip">Python</span>
              </Tooltip>
            }
          >
            <img src={pyhton} alt="foto de Python" loading="lazy" />
          </OverlayTrigger>
        )}
        {(
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className="tootltip">TypeScrpit</span>
              </Tooltip>
            }
          >
            <img src={typ} alt="foto de TypeScript" loading="lazy" />
          </OverlayTrigger>
        )}
        {(
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className="tootltip">Node</span>
              </Tooltip>
            }
          >
            <img src={node} alt="foto de Node.js" loading="lazy" />
          </OverlayTrigger>
        )}
        {(
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className="tootltip">MongoDB</span>
              </Tooltip>
            }
          >
            <img src={mongo} alt="foto de MongoDB" loading="lazy" />
          </OverlayTrigger>
        )}
        {(
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className="tootltip">Docker</span>
              </Tooltip>
            }
          >
            <img src={docker} alt="foto de Docker" loading="lazy" />
          </OverlayTrigger>
        )}
        {(
          <OverlayTrigger
            overlay={
              <Tooltip>
                <span className="tootltip">Git</span>
              </Tooltip>
            }
          >
            <img src={git} alt="foto de Git" loading="lazy" />
          </OverlayTrigger>
        )}
      </div>
    </div>
  );
};

export default Habilidad;
