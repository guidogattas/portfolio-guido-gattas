import { useContext } from 'react';
import { getImageUrl } from '../../utils'
import { LanguageContext } from '../LanguageProvider/LanguageProvider';
import styles from './About.module.css'

export const AboutCard = ({ title, description, iconImg, link }) => {

    const { language } = useContext(LanguageContext);

    return (

        <li className={styles.aboutItem}>
            <img className={styles.aboutImg} src={getImageUrl(iconImg)} alt="cursor" />
            <div className={styles.aboutItemText}>
                <h3>{title}</h3>
                <p>{description}</p>
                {link && <a target="_blank" rel="noreferrer" href={link}>{language === "es" ? "VER CURSO" : "COURSE DETAILS"}</a>}
            </div>
        </li>

    );
};
