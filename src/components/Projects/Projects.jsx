import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import styles from './Projects.module.css';
import { ProjectModal } from '@components/ProjectModal/ProjectModal';
import Spinner from '../Spinner/Spinner';

export function Projects({ projects, setProjects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });

  const specialProjects = [
    'tarek0m',
    'Graph-based-Movie-Recommendation-System',
    'google-flights-clone',
    'launch-countdown-timer',
    'worldwise',
    'usepopcorn',
  ];

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(
          'https://api.github.com/users/tarek0m/repos'
        );
        const data = await response.json();
        setProjects(data);
        console.log('Projects fetched:', data);
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

  function convertRelativeImageUrls(readmeContent, repoName) {
    const repoBaseUrl = `https://raw.githubusercontent.com/tarek0m/${repoName}/main/`;
    return readmeContent.replace(
      /!\[(.*?)\]\((?!http)(.*?)\)/g,
      `![$1](${repoBaseUrl}$2)`
    );
  }

  async function handleProjectClick(project) {
    const readme = await fetchReadme(project);
    const updatedReadme = convertRelativeImageUrls(readme, project.name);
    setSelectedProject({ ...project, readme: updatedReadme });
  }

  return (
    <section ref={ref} id='projects' className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      {loading ? (
        <div className={styles.loading}>
          <Spinner />
        </div>
      ) : (
        <div
          className={`${styles.projectsGrid} ${inView ? styles.fadeIn : ''}`}
        >
          {projects
            .filter((project) => specialProjects.includes(project.name))
            .map((project) => (
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
