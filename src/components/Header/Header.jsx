import { useState, useEffect, useMemo } from 'react';
import { useTheme } from '../../context/useTheme';
import tarek from '../../../public/tarek.svg';
import styles from './Header.module.css';
import { Sun, Moon, Menu, X } from 'lucide-react';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#');

  const navItems = useMemo(
    () => [
      { label: '', id: '#' },
      { label: 'About', id: 'about' },
      { label: 'Skills', id: 'skills' },
      { label: 'Projects', id: 'projects' },
      { label: 'Experience', id: 'experience' },
      { label: 'Education', id: 'education' },
      { label: 'Contact', id: 'contact' },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            window.history.pushState(null, '', `#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navItems]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close the mobile menu after clicking a link
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <button className={styles.logoBtn} onClick={() => scrollToSection('#')}>
          <img src={tarek} alt='Logo' className={styles.logoImg} />
          <span>Portfolio</span>
        </button>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          {navItems.map((item) =>
            item.label === '' ? (
              ''
            ) : (
              <button
                key={item.id}
                className={`${styles.navItem} ${
                  activeSection === item.id ? styles.active : ''
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            )
          )}
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label='Toggle theme'
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </nav>
      </div>
    </header>
  );
}
