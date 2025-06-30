import { useInView } from 'react-intersection-observer';
import styles from './Experience.module.css';

export function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });

  // This would be replaced with your actual work experience
  const experiences = [
    {
      id: 1,
      company: 'Future of Egypt - جهاز مستقبل مصر للتنمية المستدامة',
      position: 'Network Support Engineer / Soldier',
      period: 'Mar 2024 - Mar 2025',
      location: 'Military Service',
      description:
        'Maintained and troubleshooted network infrastructure in the Egyptian Armed Forces, ensuring smooth operations under pressure.',
      achievements: [
        'Resolved network performance issues.',
        'Configured routers and switches.',
        'Enhanced network security with cross-functional teams.',
        'Monitored network capacity and performance.',
        'Managed user accounts and access controls.',
      ],
      skills: [
        'System Administration',
        'Network Administration',
        'Troubleshooting',
        'Hardware Maintenance',
      ],
    },
    {
      id: 2,
      company: 'HCMLT',
      position: 'Frontend Developer',
      period: 'Jul 2022 - Aug 2022',
      location: 'Alexandria, Egypt',
      description:
        'Interned as a Full-Stack Developer, contributing to an HR management system and enhancing coding skills.',
      achievements: [
        'Developed an HR management system with a team.',
        'Implemented frontend features using Bootstrap and Blade templating engine with Laravel.',
        'Participated in stand-ups and code reviews.',
      ],
      skills: ['HTML5', 'CSS3', 'Bootstrap', 'PHP', 'Laravel', 'MySQL'],
    },
  ];

  return (
    <section ref={ref} id='experience' className={styles.experience}>
      <h2 className={styles.title}>Work Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`${styles.timelineItem} ${inView ? styles.animate : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.header}>
                <h3 className={styles.position}>{exp.position}</h3>
                <div className={styles.company}>{exp.company}</div>
                <div className={styles.period}>{exp.period}</div>
                <div className={styles.location}>{exp.location}</div>
              </div>
              <p className={styles.description}>{exp.description}</p>
              <div className={styles.achievements}>
                <h4>Key Achievements:</h4>
                <ul>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.skills}>
                {exp.skills.map((skill) => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
