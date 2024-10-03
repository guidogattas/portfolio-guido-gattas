import { AboutCard } from './AboutCard';
import styles from './About.module.css';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageProvider/LanguageProvider';

export const About = () => {
    const { language } = useContext(LanguageContext);

    return (
        <section id='about' className={styles.container}>
            <h2 className={styles.title}>
                {language === 'es' ? 'CURSOS REALIZADOS' : 'COMPLETED COURSES'}
            </h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <AboutCard
                        iconImg="img/CoderHouse.png"
                        title={language === 'es' ? "Desarrollo Web: HTML, CSS y Maquetación Web" : "Web Development: HTML, CSS, and Web Layout"}
                        description={
                            <ul>
                                <li>
                                    {language === 'es'
                                        ? "Durante este curso, me adentré en los fundamentos esenciales del desarrollo web, enfocándome en HTML para la estructura y CSS para el diseño (utilizando SASS). Además, dominé técnicas avanzadas de maquetación web, como CSS Grid y Flexbox, para desarrollar diseños responsivos y adaptables. A lo largo del programa, implementé prácticas de accesibilidad y optimización para mejorar la experiencia del usuario y el rendimiento del sitio. Además, utilicé Figma para diseñar y prototipar interfaces web de manera efectiva."
                                        : "During this course, I delved into the essential fundamentals of web development, focusing on HTML for structure and CSS for design (using SASS). I also mastered advanced web layout techniques, such as CSS Grid and Flexbox, to develop responsive and adaptable designs. Throughout the program, I implemented accessibility and optimization practices to enhance user experience and site performance. Additionally, I used Figma to effectively design and prototype web interfaces."}
                                </li>
                            </ul>
                        }
                    />
                    <AboutCard
                        iconImg="img/CoderHouse.png"
                        title={language === 'es' ? "Desarrollo Web: JavaScript" : "Web Development: JavaScript"}
                        description={
                            language === 'es'
                                ? "Este curso me introdujo en JavaScript, explorando su potencial para crear interactividad en sitios web. Aprendí a manipular el DOM, responder a eventos del usuario y trabajar con funciones de orden superior. Además, exploré la manipulación de arrays, objetos y la integración con APIs externas. Los proyectos prácticos me permitieron aplicar estos conocimientos."
                                : "This course introduced me to JavaScript, exploring its potential to create interactivity on websites. I learned to manipulate the DOM, respond to user events, and work with higher-order functions. I also explored manipulating arrays, objects, and integrating with external APIs. The practical projects allowed me to apply this knowledge."
                        }
                    />
                    <AboutCard
                        iconImg="img/CoderHouse.png"
                        title={language === 'es' ? "Desarrollo Web: React JS" : "Web Development: React JS"}
                        description={
                            language === 'es'
                                ? "Gracias a este curso aprendí la integración de React JS con Firebase para construir aplicaciones web dinámicas y escalables. Aprendí a utilizar React Context para la gestión del estado global, facilitando el flujo de datos en la aplicación. Además, utilicé Firebase como base de datos en tiempo real para almacenar y recuperar información. Este curso me brindó una sólida comprensión de cómo combinar estas tecnologías para construir experiencias web modernas y efectivas."
                                : "Thanks to this course, I learned how to integrate React JS with Firebase to build dynamic and scalable web applications. I learned to use React Context for global state management, facilitating data flow within the application. Additionally, I used Firebase as a real-time database to store and retrieve information. This course provided me with a solid understanding of how to combine these technologies to build modern and effective web experiences."
                        }
                    />
                    <AboutCard
                        iconImg="img/CoderHouse.png"
                        title={language === 'es' ? "Desarrollo Móvil: React Native" : "Mobile Development: React Native"}
                        description={
                            language === 'es'
                                ? "Me sirvió para aprender React Native para el desarrollo de aplicaciones móviles, aprovechando las capacidades de Firebase y React Toolkit, utilizando componentes reutilizables y herramientas de navegación. Además, integré Firebase como base de datos en tiempo real. Utilicé React Toolkit para gestionar el estado de la aplicación de manera escalable y organizada."
                                : "This course helped me learn React Native for mobile application development, leveraging the capabilities of Firebase and React Toolkit, using reusable components and navigation tools. Additionally, I integrated Firebase as a real-time database. I utilized React Toolkit to manage the application state in a scalable and organized manner."
                        }
                    />
                    <AboutCard
                        iconImg="img/CodoACodo.png"
                        title={language === 'es' ? "Full Stack con Node.js" : "Full Stack with Node.js"}
                        description={
                            language === 'es'
                                ? "Exploré el desarrollo full stack utilizando Node.js para construir aplicaciones web escalables y eficientes. A través de este programa, adquirí habilidades en la creación de servidores con Express.js y la gestión de bases de datos con MySQL, aprovechando su robustez y capacidad relacional."
                                : "I explored full stack development using Node.js to build scalable and efficient web applications. Through this program, I acquired skills in creating servers with Express.js and managing databases with MySQL, leveraging its robustness and relational capabilities."
                        }
                    />
                    <AboutCard
                        iconImg="img/Udemy-Logo.png"
                        title={language === 'es' ? "React JS + Next JS 14" : "React JS + Next JS 14"}
                        description={
                            <div>
                                <p>
                                    {language === 'es'
                                        ? "Durante mi trayectoria autodidacta en desarrollo web, me sumergí en un curso online especializado en React y Firebase. Exploré los fundamentos de React desde cero, así como el uso avanzado de Hooks y Redux para gestionar el estado de las aplicaciones web. Integré Firebase como backend, empleando Firestore para gestionar bases de datos y autenticación de usuarios. Aprendí a manejar imágenes con Firebase Storage y a ejecutar funciones con Node.js en Firebase Functions."
                                        : "During my self-taught journey in web development, I immersed myself in an online course specializing in React and Firebase. I explored the fundamentals of React from scratch, as well as the advanced use of Hooks and Redux to manage the state of web applications. I integrated Firebase as a backend, using Firestore to manage databases and user authentication. I learned to handle images with Firebase Storage and to run functions with Node.js in Firebase Functions."}
                                </p>
                            </div>
                        }
                        link="https://www.udemy.com/course/curso-react-js/"
                    />
                    <AboutCard
                        iconImg="img/Udemy-Logo.png"
                        title={language === 'es' ? "Adobe Photoshop CC" : "Adobe Photoshop CC"}
                        description={
                            <div>
                                <p>
                                    {language === 'es'
                                        ? "Gracias a este curso, logré dominar Photoshop CC desde niveles básicos hasta avanzado, utilizándolo como herramienta principal para el diseño de logotipos, páginas web, aplicaciones móviles y proyectos de diseño en general. A través de prácticas y ejemplos, he comprendido el funcionamiento completo de todas las herramientas disponibles en Photoshop CC. Me enfrenté a retos de diseño digital en proyectos tanto personales como profesionales."
                                        : "Thanks to this course, I mastered Photoshop CC from basic to advanced levels, using it as a primary tool for designing logos, web pages, mobile applications, and design projects in general. Through practices and examples, I have understood the complete operation of all the tools available in Photoshop CC. I faced digital design challenges in both personal and professional projects."}
                                </p>
                            </div>
                        }
                        link="https://www.udemy.com/course/master-en-diseno-digital-con-adobe-photoshop-cc/"
                    />
                    <AboutCard
                        iconImg="img/CodoACodo.png"
                        title={language === 'es' ? "Big Data / Data Analytics" : "Big Data / Data Analytics"}
                        description={
                            <div>
                                <p>
                                    {language === 'es'
                                        ? "Este curso me brindó una formación completa en el mundo del Big Data y Data Analytics. Utilizamos herramientas como Google Sheets, VSC, XAMPP, SQL, Looker Studio, Google Colab, Python, Numpy, Pandas y Matplotlib. Dentro del programa, también nos dedicamos a desarrollar habilidades blandas esenciales, como la comunicación efectiva, el trabajo en equipo y la resolución de problemas, que son vitales para el éxito en este campo."
                                        : "This course provided me with comprehensive training in the world of Big Data and Data Analytics. We used tools such as Google Sheets, VSC, XAMPP, SQL, Looker Studio, Google Colab, Python, Numpy, Pandas, and Matplotlib. Within the program, we also focused on developing essential soft skills, such as effective communication, teamwork, and problem-solving, which are vital for success in this field."}
                                </p>
                            </div>
                        }
                    />
                </ul>
            </div>
        </section>
    );
};
