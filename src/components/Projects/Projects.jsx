import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import styles from './Projects.module.css';
import { ProjectModal } from '@components/ProjectModal/ProjectModal';

export function Projects({ projects, setProjects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(
          'https://api.github.com/users/tarek0m/repos'
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [setProjects]);

  async function fetchReadme(project) {
    try {
      const response = await fetchReadmeContent(project);
      const decodedContent = decodeBase64Content(response.content);
      return decodedContent;
    } catch (error) {
      console.error('Error fetching README:', error);
      return null;
    }
  }

  async function fetchReadmeContent(project) {
    const response = await fetch(
      `https://api.github.com/repos/tarek0m/${project.name}/readme`
    );
    return await response.json();
  }

  function decodeBase64Content(base64Content) {
    const binaryString = atob(base64Content);
    const binaryLen = binaryString.length;
    const bytes = new Uint8Array(binaryLen);
    for (let i = 0; i < binaryLen; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return new TextDecoder('utf-8').decode(bytes);
  }

  async function handleProjectClick(project) {
    const readme = await fetchReadme(project);
    setSelectedProject({ ...project, readme });
  }

  return (
    <section ref={ref} id='projects' className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      {loading ? (
        <div className={styles.loading}>Loading projects...</div>
      ) : (
        <div
          className={`${styles.projectsGrid} ${inView ? styles.fadeIn : ''}`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={styles.projectCard}
              onClick={() => handleProjectClick(project)}
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className={styles.projectStats}>
                <span>⭐ {project.stargazers_count}</span>
                <span>🔀 {project.forks_count}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  setProjects: PropTypes.func.isRequired,
};
