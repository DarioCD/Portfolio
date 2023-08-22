import React from "react";

const Proyecto = () => {
  const foto = require("../../assets/coming-soon.jpg");
  return (
    <div className="containerProyectos" id="Proyectos">
      <h2>Proyectos</h2>
      <p className="containerProyectosp">En este espacio, encontrarás una muestra de mis trabajos</p>
      <div className="containerCardProyectos">
        <div className="cardProyecto">
          <img src={foto} alt="foto" className="fotoProyecto" />
          <div className="infoProyecto">
            <h3>Fight Club</h3>
            <p>
              Imagina una página web dedicada a luchadores, donde se exploran
              perfiles en activo, categorías de peso y rankings. También ofrece
              una lista de los mejores luchadores históricos y detalles sobre
              los eventos más recientes, proporcionando una fuente completa para
              entusiastas de las artes marciales y el entretenimiento deportivo.
            </p>
            <div className="cardProyectoEnalce">
              <a
                className="aEnlace highlightableProyecto"
                href="https://github.com/DarioCD"
                target="blank"
              >
                <p>Código</p>
                <div className="fotoEnlaceGit" alt="GitHub"></div>
              </a>
              <a
                className="aEnlace highlightableProyecto"
                href="https://github.com/DarioCD"
                target="blank"
              >
                <p>Ver página</p>
                <div className="fotoEnlaceLink" alt="ver página"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="containerCardProyectos">
        <div className="cardProyecto">
          <div className="infoProyecto">
            <h3>Fight Club</h3>
            <p>
              Imagina una página web dedicada a luchadores, donde se exploran
              perfiles en activo, categorías de peso y rankings. También ofrece
              una lista de los mejores luchadores históricos y detalles sobre
              los eventos más recientes, proporcionando una fuente completa para
              entusiastas de las artes marciales y el entretenimiento deportivo.
            </p>
            <div className="cardProyectoEnalce">
              <a
                className="aEnlace highlightableProyecto"
                href="https://github.com/DarioCD"
                target="blank"
              >
                <p>Código</p>{" "}
                <div className="fotoEnlaceGit" alt="GitHub"></div>
              </a>
              <a
                className="aEnlace highlightableProyecto"
                href="https://github.com/DarioCD"
                target="blank"
              >
                <p>Ver página</p>{" "}
                <div className="fotoEnlaceLink" alt="ver página"></div>
              </a>
            </div>
          </div>
          <img src={foto} alt="foto" className="fotoProyecto" />
        </div>
      </div>
      <div className="containerCardProyectos">
        <div className="cardProyecto">
          <img src={foto} alt="foto" className="fotoProyecto" />
          <div className="infoProyecto">
            <h3>Fight Club</h3>
            <p>
              Imagina una página web dedicada a luchadores, donde se exploran
              perfiles en activo, categorías de peso y rankings. También ofrece
              una lista de los mejores luchadores históricos y detalles sobre
              los eventos más recientes, proporcionando una fuente completa para
              entusiastas de las artes marciales y el entretenimiento deportivo.
            </p>
            <div className="cardProyectoEnalce">
              <a
                className="aEnlace highlightableProyecto"
                href="https://github.com/DarioCD"
                target="blank"
              >
                <p>Código</p>
                <div className="fotoEnlaceGit" alt="GitHub"></div>
              </a>
              <a
                className="aEnlace highlightableProyecto"
                href="https://github.com/DarioCD"
                target="blank"
              >
                <p>Ver página</p>
                <div className="fotoEnlaceLink" alt="ver página"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="containerCardProyectos">
        <div className="cardProyecto">
          <div className="infoProyecto">
            <h3>Fight Club</h3>
            <p>
              Imagina una página web dedicada a luchadores, donde se exploran
              perfiles en activo, categorías de peso y rankings. También ofrece
              una lista de los mejores luchadores históricos y detalles sobre
              los eventos más recientes, proporcionando una fuente completa para
              entusiastas de las artes marciales y el entretenimiento deportivo.
            </p>
            <div className="cardProyectoEnalce">
              <a
                className="aEnlace highlightableProyecto"
                href="https://github.com/DarioCD"
                target="blank"
              >
                <p>Código</p>
                <div className="fotoEnlaceGit" alt="GitHub"></div>
              </a>
              <a
                className="aEnlace highlightableProyecto"
                href="https://github.com/DarioCD"
                target="blank"
              >
                <p>Ver página</p>
                <div className="fotoEnlaceLink" alt="ver página"></div>
              </a>
            </div>
          </div>
          <img src={foto} alt="foto" className="fotoProyecto" />
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
