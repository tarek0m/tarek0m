import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectModal.module.css';
import ReactMarkdown from 'react-markdown';

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={`${styles.modalContent} ${styles.slideIn}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.readme}>
          {project.readme ? (
            <ReactMarkdown>{project.readme}</ReactMarkdown>
          ) : (
            <>
              <h1>{project.name}</h1>
              <p>No README available</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    readme: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
