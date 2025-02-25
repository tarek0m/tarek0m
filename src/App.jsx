import { useState, useEffect } from 'react';
import styles from './App.module.css';
import { Header } from '@components/Header/Header';
import { Hero } from '@components/Hero/Hero';
import { About } from '@components/About/About';
import { Skills } from '@components/Skills/Skills';
import { Projects } from '@components/Projects/Projects';
import { Experience } from '@components/Experience/Experience';
import { Education } from '@components/Education/Education';
import { Contact } from '@components/Contact/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.getElementById(hash.slice(1));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <ThemeProvider>
      <div className={`${styles.app}`}>
        <Header />
        <main>
          <Hero />
          <About projects={projects} />
          <Skills />
          <Projects projects={projects} setProjects={setProjects} />
          <Experience />
          <Education />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
