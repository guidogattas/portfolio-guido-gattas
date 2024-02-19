import projects from '../Data/projects.json';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css'


export const Projects = () => {
    return (
        <section className={styles.container} id='projects'>
            <h2 className={styles.title}>Proyectos</h2>
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
    )
}