import { useState, useContext } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';
import { LanguageContext } from '../LanguageProvider/LanguageProvider';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.lang}>
        <button
          className={language === 'es' ? styles.active : ''}
          onClick={toggleLanguage}
        >
          ES
        </button>
        <button
          className={language === 'en' ? styles.active : ''}
          onClick={toggleLanguage}
        >
          EN
        </button>
      </div>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl('nav/closeIcon.png')
              : getImageUrl('nav/menuIcon.png')
          }
          alt="menu button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">{language === 'es' ? 'Acerca' : 'About'}</a>
          </li>
          <li>
            <a href="#experience">{language === 'es' ? 'Experiencia' : 'Experience'}</a>
          </li>
          <li>
            <a href="#contact">{language === 'es' ? 'Contacto' : 'Contact'}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
