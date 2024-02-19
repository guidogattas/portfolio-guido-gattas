import React from 'react'

import { AboutCard } from './AboutCard'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'


export const About = () => {
    return (
        <section id='about' className={styles.container}>

            <h2 className={styles.title}>CURSOS REALIZADOS</h2>
            <div className={styles.content}>
                <img src={getImageUrl("img/GG.png")} alt="image of me" className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <AboutCard
                        iconImg="img/CoderHouse.png" title="Desarrollo Web: HTML, CSS y Maquetación Web"
                        description={<ul>
                            <li>Durante este curso, me adentré en los fundamentos esenciales del desarrollo web, enfocándome en HTML para la estructura y CSS para el diseño (utilizando SASS). Además, dominé técnicas avanzadas de maquetación web, como CSS Grid y Flexbox, para desarrollar diseños responsivos y adaptables. A lo largo del programa, implementé prácticas de accesibilidad y optimización para mejorar la experiencia del usuario y el rendimiento del sitio. Además, utilicé Figma para diseñar y prototipar interfaces web de manera efectiva. </li>
                        </ul>}
                    />
                    <AboutCard
                        iconImg="img/CoderHouse.png" title="Desarrollo Web: JavaScript" description="Este curso me introdujo en JavaScript, explorando su potencial para crear interactividad en sitios web. Aprendí a manipular el DOM, responder a eventos del usuario y trabajar con funciones de orden superior. Además, exploré la manipulación de arrays, objetos y la integración con APIs externas. Los proyectos prácticos me permitieron aplicar estos conocimientos."
                    />
                    <AboutCard
                        iconImg="img/CoderHouse.png" title="Desarrollo Web: React JS" description='Gracias a este curso aprendí la integración de React JS con Firebase para construir aplicaciones web dinámicas y escalables. Aprendí a utilizar React Context para la gestión del estado global, facilitando el flujo de datos en la aplicación. Además, utilicé Firebase como base de datos en tiempo real para almacenar y recuperar información. Este curso me brindó una sólida comprensión de cómo combinar estas tecnologías para construir experiencias web modernas y efectivas.'
                    />

                    <AboutCard
                        iconImg="img/CoderHouse.png" title="Desarrollo Móvil: React Native" description='Me sirvió para aprender React Native para el desarrollo de aplicaciones móviles, aprovechando las capacidades de Firebase y React Toolkit, utilizando componentes reutilizables y herramientas de navegación. Además, integré Firebase como base de datos en tiempo real. Utilicé React Toolkit para gestionar el estado de la aplicación de manera escalable y organizada.'
                    />
                    <AboutCard
                        iconImg="img/CodoACodo.png" title="Full Stack con Node.js" description='Exploré el desarrollo full stack utilizando Node.js para construir aplicaciones web escalables y eficientes. A través de este programa, adquirí habilidades en la creación de servidores con Express.js y la gestión de bases de datos con MySQL, aprovechando su robustez y capacidad relacional. '
                    />
                    <AboutCard
                        iconImg="img/Udemy-Logo.png" title="React JS + Next JS 14" description={<div>
                            <p> Durante mi trayectoria autodidacta en desarrollo web, me sumergí en un curso online especializado en React y Firebase. Exploré los fundamentos de React desde cero, así como el uso avanzado de Hooks y Redux para gestionar el estado de las aplicaciones web. Integré Firebase como backend, empleando Firestore para gestionar bases de datos y autenticación de usuarios. Aprendí a manejar imágenes con Firebase Storage y a ejecutar funciones con Node.js en Firebase Functions. </p>
                        </div>}
                        link="https://www.udemy.com/course/curso-react-js/"
                    />
                    <AboutCard
                        iconImg="img/Udemy-Logo.png" title="Adobe Photoshop CC" description={<div>
                            <p> Gracias a este cursos, logré dominar Photoshop CC desde niveles básicos hasta avanzado, utilizándolo como herramienta principal para el diseño de logotipos, páginas web, aplicaciones móviles y proyectos de diseño en general. A través de prácticas y ejemplos, he comprendido el funcionamiento completo de todas las herramientas disponibles en Photoshop CC. Me enfrenté a retos de diseño digital en proyectos tanto personales como profesionales.</p>
                        </div>}
                        link="https://www.udemy.com/course/master-en-diseno-digital-con-adobe-photoshop-cc/"
                    />
                </ul>
            </div>

        </section>
    )
}
