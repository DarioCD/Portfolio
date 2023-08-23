import React from 'react'

const Experiencia = () => {

    const salesianos = require("../../assets/salesianos.png")
    const atos = require("../../assets/atos.png")
    const eviden = require("../../assets/eviden.jpg")
    return (
        <>
            <h1 id='Experiencia'>Experiencia</h1>
            <div className='timeline'>
                <div className='containerExperiencia left-containerExperiencia'>
                    <img src={salesianos} alt='foto' />
                    <div className='text-box'>
                        <h2>CFGS Desarrollo de Aplicaciones Multiplataforma</h2>
                        <small>Salesianos la cuesta - (Septiembre 2021 - Mayo 2023)</small>
                        <p>Es un ciclo superiro el cual curse después de haber terminado mis estudios de bachillerato</p>
                        <p>Tecnologías utilizadas :</p>
                        <ul>
                            <li>
                                - Respcto al backend vimos bases de datos (MySQL, Oracle, H2), herramientas (Eclipse),
                                frameworks (Spring Boot, Node.js). Aprendimos a construir aplicaciones eficientes y escalables.
                            </li>
                            <li>
                                - En el front, abordamos React y React Native, junto con herramientas como Visual Studio Code e IntelliJ IDEA.
                                Aprendimos a crear interfaces dinámicas y aplicaciones móviles.
                            </li>
                            <li>
                                - Exploramos lenguajes clave en el curso: Python para versatilidad, Java para robustez y
                                JavaScrpt para interactividad en el front y el back.
                            </li>
                        </ul>
                        <span className='left-containerExperiencia-arow'></span>
                    </div>
                </div>

                <div className='containerExperiencia right-containerExperiencia'>
                    <img src={atos} alt='foto' />
                    <div className='text-box'>
                        <h2>Application developer</h2>
                        <small>Atos - (Marzo 2023 - Mayo 2023)</small>
                        <p>Aquí hice mis práctica de fin de grado, en los meses que pasé aqui estuvmios formandonos y haciendo varios proyecto</p>
                        <p>Elementos a destacar:</p>
                        <ul>
                            <li>
                                - Utilizamos Angular y Spring en conjunto. Esto me permitió ampliar mis conocimientos en Spring y aprender Angular,
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
                    <img src={eviden} alt='foto' />
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
    )
}

export default Experiencia