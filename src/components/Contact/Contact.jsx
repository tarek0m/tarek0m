import { useState } from 'react';
import styles from './Contact.module.css';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const EMAIL = 'tarek.alnaggar@outlook.com';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // There is no backend, so hand the message to the visitor's email client
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `${formData.message}\n\n${formData.name}\n${formData.email}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id='contact' className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Have a role, project or question in mind? I&apos;d be glad to hear
            from you.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.infoColumn}>
            <div className={styles.infoCard}>
              <h3>Contact Information</h3>

              <div className={styles.contactInfo}>
                <a className={styles.infoItem} href={`mailto:${EMAIL}`}>
                  <Mail className={styles.icon} />
                  <span>{EMAIL}</span>
                </a>
                <a className={styles.infoItem} href='tel:+201272152825'>
                  <Phone className={styles.icon} />
                  <span>+20 127 215 2825</span>
                </a>
                <div className={styles.infoItem}>
                  <MapPin className={styles.icon} />
                  <span>Alexandria, Egypt</span>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <a
                  href='https://linkedin.com/in/tarekalnaggar'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='LinkedIn'
                >
                  <IoLogoLinkedin size={22} />
                </a>
                <a
                  href='https://github.com/tarek0m'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='GitHub'
                >
                  <IoLogoGithub size={22} />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.formColumn}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor='name'>Name</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Your name'
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Your email'
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor='subject'>Subject</label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder='Subject'
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Your message'
                  required
                  rows={5}
                ></textarea>
              </div>

              <button type='submit' className={styles.submitBtn}>
                Send Message
                <Send className={styles.sendIcon} size={18} />
              </button>
              <p className={styles.formNote}>
                Opens your email app with the message ready to send.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
