// components/TextContent.js
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.css'; // Import the CSS Module

const TextContent = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.textContainer} ${loaded ? styles.loaded : ''}`}>
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'Rubik, sans-serif',
          color: '#666',
          fontWeight: 'bold',
          transition: 'opacity 1s ease-in-out',
          fontSize: {
              xs: '1.5rem',  // Adjust font size for extra-small screens
              sm: '3rem',  // Default font size for small and larger screens
            },
        }}
      >
        Full Stack Developer, Data Scraper & Machine Learning Enthusiast
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Diphylleia, serif',
          lineHeight: 1.6,
          color: 'black',
          textAlign: 'justify',
          marginTop: '10px',
          margin: '50px',
          fontWeight: 'bold',
          transition: 'opacity 1s ease-in-out',
          fontSize: {
            xs: '1.2rem',  // Adjust font size for extra-small screens
            sm: '1.6rem',  // Default font size for small and larger screens
          },
        }}
      >
        With a passion for coding and a commitment to innovation, I bring ideas to life through technology. Let's build something extraordinary together.
      </Typography>
      <div className={styles.socialIcons}>
        <a href="https://www.linkedin.com/in/ilyes-ben-rached-88a7851a7/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="3x" style={{ color: '#0077B5' }} />
        </a>
        <a href="https://github.com/IlyessBenRached" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="3x" style={{ color: '#24292e' }} />
        </a>
        <a href="https://www.instagram.com/ilyesbenrached/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="3x" style={{ color: '#bc2a8d' }} />
        </a>
        <a href="https://www.facebook.com/ilyes.b.rached/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="3x" style={{ color: '#1877f2' }} />
        </a>
      </div>
    </div>
  );
};

export default TextContent;
