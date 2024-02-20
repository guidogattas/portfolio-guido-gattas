import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contactame </h2>
        <p>No dudes en comunicarte!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:guido.gattas@gmail.com">guido.gattas@gmail.com</a>
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
