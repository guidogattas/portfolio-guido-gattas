import { getImageUrl } from '../../utils'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer id="contact" className={styles.container}>
      <img src={getImageUrl("img/GG.png")} alt="image of me" className={styles.aboutImage} />

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:guido.gattas@gmail.com" target="_blank" rel="noopener noreferrer">guido.gattas@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/guido-gattas/">linkedin.com/in/guido-gattas</a>
        </li>

      </ul>
    </footer>
  )
}
