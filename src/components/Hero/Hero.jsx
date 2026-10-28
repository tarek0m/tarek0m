import styles from './Hero.module.css';

export function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='home' className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.greeting}>Hello, I&apos;m</div>
        <h1 className={styles.name}>
          <img src='/TarekAlnaggarHandwritten.svg' alt='Tarek Alnaggar' />
        </h1>
        <p className={styles.role}>Software Engineer</p>
        <p className={styles.stack}>
          Laravel &amp; React <span aria-hidden='true'>·</span> .NET &amp;
          Angular
        </p>
        <p className={styles.intro}>
          Shipping customer-facing features end to end, from relational schema
          and API to interface, across PHP/Laravel and C#/.NET platforms.
        </p>
        <div className={styles.cta}>
          <button
            className={styles.primaryBtn}
            onClick={() => scrollToSection('experience')}
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
    </section>
  );
}
