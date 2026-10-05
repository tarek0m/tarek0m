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
      company: 'Enozom',
      position: 'Software Engineer',
      period: 'Jun 2025 - Present',
      location: 'Alexandria, Egypt',
      description:
        'Delivering customer-facing features end to end across PHP/Laravel and C#/.NET products, working in English within a distributed agile team.',
      projects: [
        {
          name: 'UK Holiday Accommodation Marketplace',
          context: 'Confidential client · Owner portal & rental platform',
          description:
            'UK holiday-lettings group operating 23 regional brands and representing over 23,000 holiday homes.',
          achievements: [
            'Owned four owner-facing feature verticals end to end in a greenfield Laravel 12, Inertia.js and React portal: performance summary, booking calendar, pricing-tier upgrades and calendar sync, each from database permission migration through API integration, domain service, controller, TypeScript React interface and tests.',
            'Designed and shipped a self-service Early Check-In workflow letting owners opt in and out without contacting support, re-scoping it from owner-level to property-level configuration when the original model proved too coarse, released behind a feature flag.',
            'Owned the integration of internal booking and revenue-management data into owner-facing dashboards, defining the request and DTO layer with explicit zero-data and unavailable-data behaviour.',
            'Built year-on-year property performance reporting with month-level filtering, integrated owner-to-customer messaging into booking records, and resolved inconsistencies between the web and mobile-app flows.',
            'Authored 13 production MySQL migrations with foreign keys, named indexes, data backfills and reversible rollbacks, splitting one apart after review showed it would force a full table rebuild in production.',
            'Wrote 258 automated tests across 27 files at unit, feature and component level, including a cross-endpoint suite proving a replacement API endpoint matched the original on every unchanged rule before deprecation.',
            'Replaced hardcoded region-to-team mappings in the enterprise CRM with database-driven task routing, removing the need for a code release on every change.',
            'Extended conversational bot flows across SMS and WhatsApp with exit-reason and disposition metadata using Twilio Studio, and remediated a vulnerable dependency across affected services.',
          ],
          skills: [
            'PHP',
            'Laravel',
            'Inertia.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'jQuery',
            'PHPUnit',
            'MySQL',
            'Twilio Studio',
          ],
        },
        {
          name: 'AlCashier - Multi-Tenant Retail POS SaaS',
          context:
            'Internal product · Sole engineer on subscriptions & billing · Jul 2025 - Jan 2026',
          description:
            'Subscription and billing platform for a multi-tenant retail POS and commerce SaaS, taken from an empty schema to a live system carrying real paying subscriptions.',
          achievements: [
            'Built the billing platform end to end as its sole engineer: relational schema, EF Core migrations, domain services, REST API, Stripe integration, webhook processing, notifications and the Angular admin surface.',
            'Led a schema redesign against live tables that moved payment-gateway state onto the subscription row keyed by gateway invoice ID, the change that made webhook processing idempotent.',
            'Engineered idempotent Stripe webhook handlers for invoice payment, payment failure, uncollectible invoices and subscription updates and deletions, classifying each event as creation, plan change or renewal from application state rather than trusting gateway metadata.',
            'Owned the subscription and payment-failure lifecycle: proration previews, downgrade validation, past-due transitions, manual retry, invoice voiding, platform-wide tenant suspension and automatic reactivation.',
            'Identified and remediated a broken object-level authorization (IDOR) gap by enforcing tenant-ownership validation and replacing exposed gateway identifiers with opaque internal GUIDs.',
            'Reduced a paginated list endpoint from over 30 seconds, and over 5 minutes on 5,000+ orders, to 3-5 seconds by reshaping EF Core queries, eliminating N+1 access and moving paging and sorting server-side.',
            'Supported the platform in production after launch, resolving live subscription incidents by debugging webhook delivery and transactional email against the live Stripe account.',
            'Presented and defended design decisions to the senior engineer and CTO, including keeping raw-body HMAC signature verification against a proposed change that would have invalidated it.',
          ],
          skills: [
            'C#',
            'ASP.NET Core',
            'Entity Framework Core',
            'MySQL',
            'Angular',
            'TypeScript',
            'Stripe',
          ],
        },
      ],
    },
    {
      id: 2,
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
      id: 3,
      company: 'HCMLT',
      position: 'Full-Stack Developer',
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

              {exp.projects ? (
                <div className={styles.projectCards}>
                  {exp.projects.map((project) => (
                    <div key={project.name} className={styles.projectCard}>
                      <h4 className={styles.projectName}>{project.name}</h4>
                      <div className={styles.projectContext}>
                        {project.context}
                      </div>
                      <p className={styles.projectDescription}>
                        {project.description}
                      </p>
                      <ul className={styles.projectAchievements}>
                        {project.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                      <div className={styles.skills}>
                        {project.skills.map((skill) => (
                          <span key={skill} className={styles.skillTag}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
