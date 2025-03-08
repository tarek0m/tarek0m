import { useInView } from 'react-intersection-observer';
import styles from './Skills.module.css';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3,
  FaNode,
  FaGit,
  FaGithub,
  FaPython,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiMui,
  SiRedux,
  SiGraphql,
  SiMysql,
  SiPhp,
  SiTensorflow,
} from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';
import { DiScrum } from 'react-icons/di';
import { TbHexagonLetterAFilled } from 'react-icons/tb';

const skillCategories = {
  Frontend: [
    { name: 'React', icon: <FaReact />, level: 75 },
    { name: 'JavaScript', icon: <FaJs />, level: 85 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 70 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
    { name: 'CSS3', icon: <FaCss3 />, level: 90 },
    { name: 'Material-UI', icon: <SiMui />, level: 80 },
    { name: 'Redux', icon: <SiRedux />, level: 65 },
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNode />, level: 25 },
    { name: 'PHP', icon: <SiPhp />, level: 65 },
    { name: 'MySQL', icon: <SiMysql />, level: 75 },
    { name: 'REST APIs', icon: <AiOutlineApi />, level: 90 },
    { name: 'GraphQL', icon: <SiGraphql />, level: 65 },
  ],
  'Tools & Practices': [
    { name: 'Git', icon: <FaGit />, level: 70 },
    { name: 'GitHub', icon: <FaGithub />, level: 65 },
    { name: 'Agile', icon: <TbHexagonLetterAFilled />, level: 85 },
    { name: 'Scrum', icon: <DiScrum />, level: 85 },
  ],
  'AI & ML': [
    { name: 'Python', icon: <FaPython />, level: 80 },
    { name: 'TensorFlow', icon: <SiTensorflow />, level: 80 },
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
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <div className={styles.skillInfo}>
                    <span>{skill.name}</span>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progress}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
