import React from 'react'

const Experiencia = ({ languaje }) => {

    const salesianos = require("../../assets/salesianos.png")
    const atos = require("../../assets/atos.png")
    const eviden = require("../../assets/eviden.jpg")
    return (
        <>
            {
                languaje
                    ?
                    <>
                        <h1 id='Experiencia'>Experiencia</h1>
                        <div className='timeline'>
                            <div className='containerExperiencia left-containerExperiencia'>
                                <img src={salesianos} alt='foto' loading="lazy" />
                                <div className='text-box'>
                                    <h2>CFGS Desarrollo de Aplicaciones Multiplataforma</h2>
                                    <small>Salesianos la cuesta - (Septiembre 2021 - Mayo 2023)</small>
                                    <p>Es un ciclo superiro el cual cursé después de haber terminado mis estudios de bachillerato</p>
                                    <p>Tecnologías utilizadas :</p>
                                    <ul>
                                        <li>
                                            - Respcto al backend vi bases de datos (MySQL, Oracle, H2), herramientas (Eclipse),
                                            frameworks (Spring Boot, Node.js). También amprendí a construir aplicaciones eficientes y escalables.
                                        </li>
                                        <li>
                                            - En el front, abrodé React y React Native, junto con herramientas como Visual Studio Code e IntelliJ IDEA.
                                            Aprendí a crear interfaces dinámicas y aplicaciones móviles.
                                        </li>
                                        <li>
                                            - Los lenguajes clave en el curso fueron: Python para versatilidad, Java para robustez y
                                            JavaScrpt para interactividad en el front y el back.
                                        </li>
                                    </ul>
                                    <span className='left-containerExperiencia-arow'></span>
                                </div>
                            </div>

                            <div className='containerExperiencia right-containerExperiencia'>
                                <img src={atos} alt='foto' loading="lazy" />
                                <div className='text-box'>
                                    <h2>Application developer</h2>
                                    <small>Atos - (Marzo 2023 - Mayo 2023)</small>
                                    <p>Aquí hice mis práctica de fin de grado, en los meses que pasé aqui estuve fromándome y haciendo varios proyecto</p>
                                    <p>Elementos a destacar:</p>
                                    <ul>
                                        <li>
                                            - Utilicé Angular y Spring en conjunto. Esto me permitió ampliar mis conocimientos en Spring y aprender Angular,
                                            ya que nunca lo había visto. Trabajar en equipo, cumplir plazos y utilizar sprints también fueron aspectos
                                            importantes de mi experiencia, dado que el proyecto final era en grupo de 5, con 1 sprint cada 2 semanas.
                                        </li>
                                        <li>
                                            - Dicho proyecto consistió en crear una aplicación para llevar el registro del estado físico del usuario,
                                            incluyendo JWT y login con Google.
                                        </li>
                                    </ul>
                                    <span className='right-containerExperiencia-arow'></span>
                                </div>
                            </div>

                            <div className='containerExperiencia left-containerExperiencia'>
                                <img src={eviden} alt='foto' loading="lazy" />
                                <div className='text-box'>
                                    <h2>Application developer</h2>
                                    <small>Eviden - (Julio 2023 - actualidad)</small>
                                    <p>Después de completar mis prácticas en Atos, me contrataron gracias a mis habilidades y mi trabajo duro.
                                        Cada día aprendo nuevas cosas gracias a mis compñeros, muchos de ellos con amplia experiencia.
                                        Desde que me uní, he adquirido conocimientos significativos sobre la nube, especialmente en AWS.
                                        Los proyectos que he realizado son ejemplos concretos, ya que todos sus endpoints están desplegados en AWS.
                                        Esta experiencia continua enriqueciendo mi crecimiento profesional y técnico.
                                    </p>
                                    <span className='left-containerExperiencia-arow'></span>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <h1 id='Experiencia'>Experience</h1>
                        <div className='timeline'>
                            <div className='containerExperiencia left-containerExperiencia'>
                                <img src={salesianos} alt='foto' loading="lazy" />
                                <div className='text-box'>
                                    <h2>CFGS Desarrollo de Aplicaciones Multiplataforma</h2>
                                    <small>Salesianos la Cuesta - (September 2021 - May 2023)</small>
                                    <p>This is an advanced vocational training cycle that I pursued after completing my high school studies.</p>
                                    <p>Technologies used:</p>
                                    <ul>
                                        <li>
                                            - Regarding the backend, I learned about databases (MySQL, Oracle, H2), tools (Eclipse),
                                            frameworks (Spring Boot, Node.js). I also learned to build efficient and scalable applications.
                                        </li>
                                        <li>
                                            - On the front end, I delved into React and React Native, along with tools like Visual Studio Code and IntelliJ IDEA.
                                            I learned to create dynamic interfaces and mobile applications.
                                        </li>
                                        <li>
                                            - The key languages in the course were: Python for versatility, Java for robustness,
                                            and JavaScript for interactivity on the front and back end.
                                        </li>
                                    </ul>
                                    <span className='left-containerExperiencia-arow'></span>
                                </div>
                            </div>

                            <div className='containerExperiencia right-containerExperiencia'>
                                <img src={atos} alt='foto' loading="lazy" />
                                <div className='text-box'>
                                    <h2>Application developer</h2>
                                    <small>Atos - (March 2023 - May 2023)</small>
                                    <p>This is where I did my end-of-degree internship; during the months I spent here, I was learning and working on various projects.</p>
                                    <p>Key highlights:</p>
                                    <ul>
                                        <li>
                                            - I used Angular and Spring together. This allowed me to expand my knowledge in Spring and learn Angular, as I had never seen it before.
                                            Working in a team, meeting deadlines, and using sprints were also important aspects of my experience, since the final project was done in a group of 5,
                                            with 1 sprint every 2 weeks.
                                        </li>
                                        <li>
                                            - The project itself involved creating an application to track the user's physical well-being, including JWT authentication and Google login.
                                        </li>
                                    </ul>
                                    <span className='right-containerExperiencia-arow'></span>
                                </div>
                            </div>

                            <div className='containerExperiencia left-containerExperiencia'>
                                <img src={eviden} alt='foto' loading="lazy" />
                                <div className='text-box'>
                                    <h2>Application developer</h2>
                                    <small>Eviden - (July 2023 - Present)</small>
                                    <p>After completing my internship at Atos, I was hired due to my skills and hard work.
                                        Every day, I learn new things from my colleagues, many of whom have extensive experience.
                                        Since joining, I have gained significant knowledge about the cloud, particularly in AWS.
                                        The projects I've worked on serve as concrete examples, as all their endpoints are deployed on AWS.
                                        This ongoing experience continues to enrich my professional and technical growth.
                                    </p>
                                    <span className='left-containerExperiencia-arow'></span>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default Experiencia