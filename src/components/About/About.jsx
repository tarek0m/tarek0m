import { useInView } from 'react-intersection-observer';
import styles from './About.module.css';
import PropTypes from 'prop-types';

export function About({ projects }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });

  return (
    <section ref={ref} id='about' className={styles.about}>
      <div className={`${styles.content} ${inView ? styles.fadeIn : ''}`}>
        <div className={styles.photoContainer}>
          <div className={styles.photo}>
            <img
              src='https://avatars.githubusercontent.com/u/71155320?v=4'
              alt='Profile'
            />
          </div>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                {new Date().getFullYear() - 2024}+
              </span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{projects.length}+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Companies</span>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <h2>About Me</h2>
          <p>
            Hello! I&apos;m a passionate Full Stack Developer with expertise in
            modern web technologies. I love creating efficient, scalable, and
            user-friendly applications that solve real-world problems.
          </p>
          <p>
            With a strong foundation in both front-end and back-end development,
            I bring ideas to life through clean code and intuitive design.
          </p>
          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <h3>Problem Solver</h3>
              <p>Tackling complex challenges with creative solutions</p>
            </div>
            <div className={styles.highlight}>
              <h3>Team Player</h3>
              <p>Collaborating effectively in diverse environments</p>
            </div>
            <div className={styles.highlight}>
              <h3>Continuous Learner</h3>
              <p>Always staying updated with latest technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  projects: PropTypes.array,
};
