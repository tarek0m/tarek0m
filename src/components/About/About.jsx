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
            Hello! I&apos;m a software engineer delivering customer-facing
            features end to end on a large UK holiday-lettings platform in
            Laravel, Inertia.js, React and TypeScript, working in English within
            a distributed agile team.
          </p>
          <p>
            Previously the sole engineer on a multi-tenant SaaS subscription and
            billing platform, I owned it from an empty database through Stripe
            integration, webhook state synchronisation, dunning and suspension,
            and supported it live after launch. I&apos;m experienced across PHP
            and C#/.NET backends, relational data modelling, API design and
            test-covered delivery.
          </p>
          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <h3>End-to-End Ownership</h3>
              <p>Taking features from schema and API through to the interface</p>
            </div>
            <div className={styles.highlight}>
              <h3>Payments &amp; Integrations</h3>
              <p>Stripe subscriptions, idempotent webhooks and billing lifecycles</p>
            </div>
            <div className={styles.highlight}>
              <h3>Test-Covered Delivery</h3>
              <p>Unit and feature tests, code review and feature-flagged releases</p>
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
