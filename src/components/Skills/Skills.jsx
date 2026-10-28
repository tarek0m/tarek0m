import { useInView } from 'react-intersection-observer';
import styles from './Skills.module.css';
import {
  FaReact,
  FaJs,
  FaDatabase,
  FaVial,
  FaCubes,
  FaSitemap,
  FaToggleOn,
  FaInfinity,
  FaBolt,
  FaExchangeAlt,
  FaCodeBranch,
  FaRobot,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiPhp,
  SiSharp,
  SiDotnet,
  SiLaravel,
  SiInertia,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiSass,
  SiReactivex,
  SiJquery,
  SiVite,
  SiStripe,
  SiTwilio,
  SiDocker,
  SiGit,
  SiJira,
} from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';
import { DiScrum } from 'react-icons/di';

const skillCategories = {
  Languages: [
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'PHP', icon: <SiPhp /> },
    { name: 'C#', icon: <SiSharp /> },
    { name: 'SQL', icon: <FaDatabase /> },
  ],
  Backend: [
    { name: 'ASP.NET Core', icon: <SiDotnet /> },
    { name: '.NET 8', icon: <SiDotnet /> },
    { name: 'Entity Framework Core', icon: <FaDatabase /> },
    { name: 'Laravel', icon: <SiLaravel /> },
    { name: 'Inertia.js', icon: <SiInertia /> },
    { name: 'PHPUnit', icon: <FaVial /> },
    { name: 'REST APIs', icon: <AiOutlineApi /> },
  ],
  Frontend: [
    { name: 'React', icon: <FaReact /> },
    { name: 'Angular', icon: <SiAngular /> },
    { name: 'HTML5', icon: <SiHtml5 /> },
    { name: 'CSS3', icon: <SiCss3 /> },
    { name: 'SCSS', icon: <SiSass /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'RxJS', icon: <SiReactivex /> },
    { name: 'jQuery', icon: <SiJquery /> },
    { name: 'Vite', icon: <SiVite /> },
  ],
  Databases: [
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Schema Design', icon: <FaSitemap /> },
    { name: 'Migrations', icon: <FaExchangeAlt /> },
    { name: 'Query Optimisation', icon: <FaBolt /> },
  ],
  'Payments & Integrations': [
    { name: 'Stripe', icon: <SiStripe /> },
    { name: 'Twilio', icon: <SiTwilio /> },
  ],
  Practices: [
    { name: 'Domain & API Design', icon: <FaSitemap /> },
    { name: 'SOLID & Design Patterns', icon: <FaCubes /> },
    { name: 'Service-to-Service Integration', icon: <FaExchangeAlt /> },
    { name: 'AI-Assisted Development', icon: <FaRobot /> },
    { name: 'Code Review', icon: <FaCodeBranch /> },
    { name: 'Feature Flags', icon: <FaToggleOn /> },
    { name: 'Unit & Feature Testing', icon: <FaVial /> },
    { name: 'CI/CD', icon: <FaInfinity /> },
    { name: 'Docker', icon: <SiDocker /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'Agile / Scrum', icon: <DiScrum /> },
    { name: 'Jira', icon: <SiJira /> },
  ],
};

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });

  return (
    <section ref={ref} id='skills' className={styles.skills}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.categoriesGrid}>
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div
            key={category}
            className={`${styles.category} ${inView ? styles.fadeIn : ''}`}
          >
            <h3>{category}</h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill) => (
                <div key={skill.name} className={styles.skillItem}>
                  <span className={styles.skillIcon}>{skill.icon}</span>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
