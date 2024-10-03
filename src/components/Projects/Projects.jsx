import { useContext } from 'react';
import { LanguageContext } from '../LanguageProvider/LanguageProvider';
import projectsES from '../Data/projectsSP.json';
import projectsEN from '../Data/projectsEN.json';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

export const Projects = () => {
    const { language } = useContext(LanguageContext);

    const projects = language === 'es' ? projectsES : projectsEN;

    return (
        <section className={styles.container} id='projects'>
            <h2 className={styles.title}>{language === 'es' ? 'Proyectos' : 'Projects'}</h2>
            <div className={styles.projects}>
                {
                    projects.map(project => {
                        return (
                            <ProjectCard key={project.id} project={project} />
                        );
                    })
                }
            </div>
        </section>
    );
};
