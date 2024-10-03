import { useContext } from 'react';
import { getImageUrl } from '../../utils'
import { LanguageContext } from '../LanguageProvider/LanguageProvider';
import styles from './Hero.module.css';

export const Hero = () => {

    const { language } = useContext(LanguageContext);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    {language === "es" ? "Hola soy Guido!" : "Hi, I'm Guido"}
                </h1>
                <p className={styles.description}>
                    {language === "es"
                        ? "Soy programador Fullstack con habilidades en React JS, React Native, Node JS y Adobe Photoshop CS6. Tengo experiencia con JS y React creando varios proyectos personales, y me encanta aprender nuevas tecnologías y mantenerme actualizado en el mundo de la programación. También realicé proyectos en React Native y Node JS."
                        : "I'm a Fullstack developer with skills in React JS, React Native, Node JS, and Adobe Photoshop CS6. I have experience with JS and React by creating several personal projects, and I love learning new technologies and staying up-to-date in the programming world. I have also worked on projects in React Native and Node JS."
                    }
                </p>
                <a href="mailto:guido.gattas@gmail.com" className={styles.contact}>
                    {language === "es" ? "Contactame" : "Contact me"}
                </a>
            </div>
            <img src={getImageUrl("img/Guido.png")} alt="hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur}></div>
        </section>
    )
}
