import React from "react";

const SobreMi = ({ languaje }) => {
  return (
    <div className="containerSobreMi" id="Sobre mi">
      <div>
        <div className="hero-img"></div>
      </div>
      <div className="containerInformacioSobreMi">
        {
          languaje
            ?
            <>
              <h1>Sobre mí</h1>
              <p>
                ¡Hola! Soy Dario Chinea Delgado, un apasionado desarrollador Junior Full
                Stack. Con una sólida formación en desarrollo web y una curiosidad insaciable
                por las últimas tendencias tecnológicas, siempre estoy ansioso por enfrentar
                nuevos desafíos y aprender nuevas habilidades.
              </p>
              <p>
                A lo largo de mi viaje, he adquirido experiencia en una
                variedad de tecnologías, desde el desarrollo de front-end con React, Angular, HTML, CSS...
                hasta la creación de potentes back-ends utilizando tecnologías como Node.js, Spring...
              </p>
              <p>
                Mi pasión por el aprendizaje y la mejora continua me lleva a estar al
                tanto de las últimas tendencias y mejores prácticas en desarrollo web
                y tecnología en general. Disfruto colaborar en equipos
                multidisciplinarios, donde podemos unir nuestras habilidades para
                crear proyectos exitosos y enriquecedores.
              </p>
              <p>
                Me apasiona desarrollar aplicaciones que combinan funcionalidad efectiva,
                atractivo visual y escalabilidad robusta para ofrecer experiencias excepcionales a los usuarios.
              </p>
            </>
            :
            <>
              <h1>About me</h1>
              <p>
                Hello! I'm Dario Chinea Delgado, a passionate Junior Full Stack developer.
                With a strong background in web development and an insatiable curiosity
                for the latest technological trends, I'm always eager to take on
                new challenges and acquire new skills.
              </p>
              <p>
                Throughout my journey, I've gained experience in a
                variety of technologies, from front-end development using React, Angular, HTML, CSS...
                to crafting powerful back-ends using technologies like Node.js, Spring...
              </p>
              <p>
                My passion for learning and continuous improvement drives me to stay
                updated on the latest trends and best practices in web development
                and technology in general. I enjoy collaborating in multidisciplinary
                teams, where we can combine our skills to create successful and rewarding projects.
              </p>
              <p>
                I'm passionate about developing applications that blend effective functionality,
                visual appeal, and robust scalability to deliver exceptional user experiences.
              </p>

            </>
        }

      </div>
    </div>
  );
};

export default SobreMi;
