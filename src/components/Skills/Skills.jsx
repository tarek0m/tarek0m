import { useInView } from 'react-intersection-observer';
import styles from './Skills.module.css';
import {
  FaReact,
  FaJs,
  FaPython,
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
  SiNextdotjs,
  SiMui,
  SiExpress,
  SiGraphql,
  SiMysql,
  SiMongodb,
  SiPhp,
  SiSharp,
  SiC,
  SiDotnet,
  SiLaravel,
  SiInertia,
  SiNodedotjs,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiSass,
  SiReactivex,
  SiJquery,
  SiWebpack,
  SiVite,
  SiRedis,
  SiStripe,
  SiTwilio,
  SiFirebase,
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
    { name: 'Python', icon: <FaPython /> },
    { name: 'C', icon: <SiC /> },
  ],
  Backend: [
    { name: 'ASP.NET Core', icon: <SiDotnet /> },
    { name: '.NET 8', icon: <SiDotnet /> },
    { name: 'Entity Framework Core', icon: <FaDatabase /> },
    { name: 'Laravel', icon: <SiLaravel /> },
    { name: 'Inertia.js', icon: <SiInertia /> },
    { name: 'PHPUnit', icon: <FaVial /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'REST APIs', icon: <AiOutlineApi /> },
    { name: 'GraphQL', icon: <SiGraphql /> },
  ],
  Frontend: [
    { name: 'React', icon: <FaReact /> },
    { name: 'Angular', icon: <SiAngular /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'HTML5', icon: <SiHtml5 /> },
    { name: 'CSS3', icon: <SiCss3 /> },
    { name: 'SCSS', icon: <SiSass /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'RxJS', icon: <SiReactivex /> },
    { name: 'jQuery', icon: <SiJquery /> },
    { name: 'Material UI', icon: <SiMui /> },
    { name: 'Webpack', icon: <SiWebpack /> },
    { name: 'Vite', icon: <SiVite /> },
  ],
  Databases: [
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Redis', icon: <SiRedis /> },
    { name: 'Schema Design', icon: <FaSitemap /> },
    { name: 'Migrations', icon: <FaExchangeAlt /> },
    { name: 'Query Optimisation', icon: <FaBolt /> },
  ],
  'Payments & Integrations': [
    { name: 'Stripe', icon: <SiStripe /> },
    { name: 'Twilio', icon: <SiTwilio /> },
    { name: 'Firebase Cloud Messaging', icon: <SiFirebase /> },
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
