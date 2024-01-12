import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './styles.css';

const TextContent = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`text_container ${loaded ? 'loaded' : ''}`}>
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
        Projects i have developed
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Diphylleia, serif',
          lineHeight: 1.6,
          
          color: 'black',
          textAlign: 'justify',
          marginTop: '10px',
          marginLeft: '0',
          fontWeight: 'bold',
          transition: 'opacity 1s ease-in-out',
          fontSize: {
                    xs: '1.2rem',  // Adjust font size for extra-small screens
                    sm: '1.6rem',  // Default font size for small and larger screens
                  },
        }}
      >
        Below are my projects i have built out of curisotty
      </Typography>
    </div>
  );
};

export default TextContent;
