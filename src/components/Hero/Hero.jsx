import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hola soy Guido!</h1>
                <p className={styles.description}>Soy programador Fullstack con habilidades en React JS, React Native, Node JS y Adobe Photoshop CS6.
                    Tengo experiencia con JS y React creando varios proyectos personales, y me encanta aprender nuevas tecnologías y mantenerme actualizado en el mundo de la programación. También realicé proyectos en React Native y Node JS.</p>
                <a href="mailto:guido.gattas@gmail.com" className={styles.contact}>Contactame</a>
            </div>
            <img src={getImageUrl("img/Guido.png")} alt="hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur}></div>
        </section>
    )
}

