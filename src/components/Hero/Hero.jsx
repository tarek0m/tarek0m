import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    const roles = [
      'Full Stack Developer',
      'React Expert',
      'JavaScript Developer',
      'Software Engineer',
    ];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeText() {
      const currentRole = roles[currentRoleIndex];

      if (isDeleting) {
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        currentCharIndex++;
        typingSpeed = 150;
      }

      if (textRef.current) {
        textRef.current.textContent = currentRole.substring(
          0,
          currentCharIndex
        );
      }

      if (!isDeleting && currentCharIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at the end
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      }

      setTimeout(typeText, typingSpeed);
    }

    const typingTimeout = setTimeout(typeText, 1000);

    return () => clearTimeout(typingTimeout);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='#' className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.greeting}>Hello, I&apos;m</div>
        <h1 className={styles.name}>
          <img src='/TarekAlnaggarHandwritten.svg' alt='Tarek Alnaggar' />
        </h1>
        <div className={styles.roleWrapper}>
          <span className={styles.roleIntro}>I&apos;m a </span>
          <span ref={textRef} className={styles.role}></span>
          <span className={styles.cursor}>|</span>
        </div>
        <p className={styles.intro}>
          Building beautiful, responsive web applications with modern
          technologies. Passionate about creating seamless user experiences.
        </p>
        <div className={styles.cta}>
          <button
            className={styles.primaryBtn}
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </button>
          <button
            className={styles.secondaryBtn}
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className={styles.scrollDown}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <div className={styles.arrows}>
          <span className={styles.arrow}></span>
          <span className={styles.arrow}></span>
          <span className={styles.arrow}></span>
        </div>
      </div>
    </section>
  );
}
