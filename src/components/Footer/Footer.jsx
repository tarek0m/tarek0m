import styles from './Footer.module.css';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import { Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span>
          © {new Date().getFullYear()} Tarek Alnaggar
        </span>
        <div className={styles.links}>
          <a
            href='https://linkedin.com/in/tarekalnaggar'
            target='_blank'
            rel='noreferrer'
            aria-label='LinkedIn'
          >
            <IoLogoLinkedin size={20} />
          </a>
          <a
            href='https://github.com/tarek0m'
            target='_blank'
            rel='noreferrer'
            aria-label='GitHub'
          >
            <IoLogoGithub size={20} />
          </a>
          <a href='mailto:tarek.alnaggar@outlook.com' aria-label='Email'>
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
