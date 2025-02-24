import { useInView } from 'react-intersection-observer';
import styles from './Education.module.css';

export function Education() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });

  const education = [
    {
      id: 1,
      institution: 'Alexandria University',
      degree: 'Bachelor in Computer and Communication Engineering',
      period: '2018 - 2023',
      location: 'Alexandria, Egypt',
      courses: [
        'Data Structures',
        'Advanced Algorithms',
        'Operating Systems',
        'Database Systems (RDBMS)',
        'Machine Learning',
        'Software Engineering',
        'Computer Networks',
      ],
    },
  ];

  return (
    <section ref={ref} id='education' className={styles.education}>
      <h2 className={styles.title}>Education & Certifications</h2>
      <div className={styles.cards}>
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`${styles.card} ${inView ? styles.animate : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <div className={styles.institution}>{edu.institution}</div>
              <div className={styles.details}>
                <span>{edu.period}</span>
                <span className={styles.divider}>•</span>
                <span>{edu.location}</span>
              </div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.courses}>
                <h4>Relevant Courses:</h4>
                <div className={styles.coursesList}>
                  {edu.courses.map((course) => (
                    <span key={course} className={styles.courseTag}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
