import React from "react";

const Proyecto = ({ windowWidth, languaje }) => {
  const foto = require("../../assets/coming-soon.jpg");
  return (
    <div className="containerProyectos" id="Proyectos">
      {
        languaje
          ?
          <>
            <h1>Proyectos</h1>
            <p className="containerProyectosp">En este espacio, encontrarás una muestra de mis trabajos</p>
            <div className="containerCardProyectos">
              <div className="cardProyecto">
                <img src={foto} alt="foto" className="fotoProyecto" loading="lazy" />
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
                {
                  windowWidth <= 1100 &&
                  <img src={foto} alt="foto" className="fotoProyecto" loading="lazy" />
                }
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
                      <p>Ver página</p>
                      <div className="fotoEnlaceLink" alt="ver página"></div>
                    </a>
                  </div>
                </div>
                {
                  windowWidth > 1100 &&
                  <img src={foto} alt="foto" className="fotoProyecto" loading="lazy" />
                }
              </div>
            </div>
            <div className="containerCardProyectos">
              <div className="cardProyecto">
                <img src={foto} alt="foto" className="fotoProyecto" loading="lazy" />
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
                {
                  windowWidth <= 1100 &&
                  <img src={foto} alt="foto" className="fotoProyecto" loading="lazy" />
                }
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
                {
                  windowWidth > 1100 &&
                  <img src={foto} alt="foto" className="fotoProyecto" loading="lazy" />
                }
              </div>
            </div>
          </>
          :
          <>
            <h1>Projects</h1>
            <p className="containerProyectosp">In this space, you will find a sample of my work</p>
            <div className="containerCardProyectos">
              <div className="cardProyecto">
                <img src={foto} alt="foto" className="fotoProyecto" loading="lazy" />
                <div className="infoProyecto">
                  <h3>Fight Club</h3>
                  <p>
                    Imagine a website dedicated to fighters, where active profiles, weight categories,
                    and rankings are explored. It also provides a list of the greatest historical fighters
                    and details about the latest events, offering a comprehensive source for martial arts
                    and sports entertainment enthusiasts.
                  </p>
                  <div className="cardProyectoEnalce">
                    <a
                      className="aEnlace highlightableProyecto"
                      href="https://github.com/DarioCD"
                      target="blank"
                    >
                      <p>Code</p>
                      <div className="fotoEnlaceGit" alt="GitHub"></div>
                    </a>
                    <a
                      className="aEnlace highlightableProyecto"
                      href="https://github.com/DarioCD"
                      target="blank"
                    >
                      <p>Vist application</p>
                      <div className="fotoEnlaceLink" alt="ver página"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="containerCardProyectos">
              <div className="cardProyecto">
                {
                  windowWidth <= 1100 &&
                  <img src={foto} alt="foto" className="fotoProyecto" loading="lazy" />
                }
                <div className="infoProyecto">
                  <h3>Fight Club</h3>
                  <p>
                    Imagine a website dedicated to fighters, where active profiles, weight categories,
                    and rankings are explored. It also provides a list of the greatest historical fighters
                    and details about the latest events, offering a comprehensive source for martial arts
                    and sports entertainment enthusiasts.
                  </p>
                  <div className="cardProyectoEnalce">
                    <a
                      className="aEnlace highlightableProyecto"
                      href="https://github.com/DarioCD"
                      target="blank"
                    >
                      <p>Code</p>
                      <div className="fotoEnlaceGit" alt="GitHub"></div>
                    </a>
                    <a
                      className="aEnlace highlightableProyecto"
                      href="https://github.com/DarioCD"
                      target="blank"
                    >
                      <p>Vist page</p>
                      <div className="fotoEnlaceLink" alt="ver página"></div>
                    </a>
                  </div>
                </div>
                {
                  windowWidth > 1100 &&
                  <img src={foto} alt="foto" className="fotoProyecto" loading="lazy" />
                }
              </div>
            </div>
            <div className="containerCardProyectos">
              <div className="cardProyecto">
                <img src={foto} alt="foto" className="fotoProyecto" loading="lazy" />
                <div className="infoProyecto">
                  <h3>Fight Club</h3>
                  <p>
                    Imagine a website dedicated to fighters, where active profiles, weight categories,
                    and rankings are explored. It also provides a list of the greatest historical fighters
                    and details about the latest events, offering a comprehensive source for martial arts
                    and sports entertainment enthusiasts.
                  </p>
                  <div className="cardProyectoEnalce">
                    <a
                      className="aEnlace highlightableProyecto"
                      href="https://github.com/DarioCD"
                      target="blank"
                    >
                      <p>Code</p>
                      <div className="fotoEnlaceGit" alt="GitHub"></div>
                    </a>
                    <a
                      className="aEnlace highlightableProyecto"
                      href="https://github.com/DarioCD"
                      target="blank"
                    >
                      <p>Vist application</p>
                      <div className="fotoEnlaceLink" alt="ver página"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="containerCardProyectos">
              <div className="cardProyecto">
                {
                  windowWidth <= 1100 &&
                  <img src={foto} alt="foto" className="fotoProyecto" loading="lazy" />
                }
                <div className="infoProyecto">
                  <h3>Fight Club</h3>
                  <p>
                    Imagine a website dedicated to fighters, where active profiles, weight categories,
                    and rankings are explored. It also provides a list of the greatest historical fighters
                    and details about the latest events, offering a comprehensive source for martial arts
                    and sports entertainment enthusiasts.
                  </p>
                  <div className="cardProyectoEnalce">
                    <a
                      className="aEnlace highlightableProyecto"
                      href="https://github.com/DarioCD"
                      target="blank"
                    >
                      <p>Code</p>
                      <div className="fotoEnlaceGit" alt="GitHub"></div>
                    </a>
                    <a
                      className="aEnlace highlightableProyecto"
                      href="https://github.com/DarioCD"
                      target="blank"
                    >
                      <p>Vist application</p>
                      <div className="fotoEnlaceLink" alt="ver página"></div>
                    </a>
                  </div>
                </div>
                {
                  windowWidth > 1100 &&
                  <img src={foto} alt="foto" className="fotoProyecto" loading="lazy" />
                }
              </div>
            </div>
          </>
      }

    </div>
  );
};

export default Proyecto;
