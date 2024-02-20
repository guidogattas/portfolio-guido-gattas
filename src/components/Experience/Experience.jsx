import skills from "../Data/skills.json"
import history from "../Data/history.json"
import { getImageUrl } from '../../utils'
import styles from './Experience.module.css'

export const Experience = () => {
    return (
        <section id='experience' className={styles.container}>
            <h2 className={styles.title}>  HABILIDADES / EXPERIENCIA</h2>
            <div className={styles.content}>
                <ul className={styles.skills}>
                    {skills.map((skill) => {
                        return (
                            <li key={skill.id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </li>
                        )
                    })}
                </ul>

                {/* HISTORY */}
                {/* <ul className={styles.history}>
                    {history.map((historyItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <img
                                    className={styles.historyImageContainer}
                                    src={getImageUrl(historyItem.imageSrc)}
                                    alt={`${historyItem.organisation} Logo`}
                                />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experiences.map((experience, id) => {
                                            return <li key={id}>{experience}</li>;
                                        })}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul> */}

            </div>
        </section>
    )
}
