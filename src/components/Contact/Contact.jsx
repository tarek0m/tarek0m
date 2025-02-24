import { useState, useRef } from 'react';
import styles from './Contact.module.css';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  // const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with a timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);

    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     setSubmitStatus('success');
    //     // Reset form
    //     setFormData({
    //       name: '',
    //       email: '',
    //       subject: '',
    //       message: '',
    //     });

    //     // Clear success message after 5 seconds
    //     setTimeout(() => {
    //       setSubmitStatus(null);
    //     }, 5000);
    //   } else {
    //     setSubmitStatus('error');
    //     setErrorMessage(
    //       data.message || 'Failed to send message. Please try again.'
    //     );
    //   }
    // } catch (error) {
    //   setSubmitStatus('error');
    //   setErrorMessage('An unexpected error occurred. Please try again later.');
    //   console.error(error);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <section id='contact' className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.infoColumn}>
            <div className={styles.infoCard}>
              <h3>Contact Information</h3>
              <p>
                Feel free to reach out through any of the following channels:
              </p>

              <div className={styles.contactInfo}>
                <div className={styles.infoItem}>
                  <Mail className={styles.icon} />
                  <span>tarek.alnaggar@outlook.com</span>
                </div>
                <div className={styles.infoItem}>
                  <Phone className={styles.icon} />
                  <span>+2 0127 215 2825</span>
                </div>
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
                  <IoLogoLinkedin size={23} />
                </a>
                <a
                  href='https://github.com/tarek0m'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='GitHub'
                >
                  <IoLogoGithub size={23} />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.formColumn}>
            <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
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

              <button
                type='submit'
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className={styles.sendIcon} size={18} />
              </button>

              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  <p>Your message has been sent successfully!</p>
                </div>
              )}

              {/* {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                  <p>{errorMessage}</p>
                </div>
              )} */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
