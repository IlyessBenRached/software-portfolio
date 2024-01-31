import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import styles from './styles.module.css';

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
          fontSize:{
            xs:'2rem',
            sm:'3rem',
          }
        }}
      >
        Education & Expertise
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Diphylleia, serif',
          lineHeight: 1.6,
          
          color: 'black',
          textAlign: 'justify',
          marginTop: '10px',
          margin: '30px',
          fontWeight: 'bold',
          transition: 'opacity 1s ease-in-out',
          fontSize:{
            xs:'1.2rem',
            sm:'1rem',

          }
        }}
      >
        As a self-taught developer, I possess a strong foundation in various technologies such as Python, JavaScript, and more. My journey has been fueled by an insatiable curiosity, driving me to explore and master new technologies continually. I thrive on challenges, adapting to the dynamic landscape of web development, and I am dedicated to delivering innovative solutions. Let's build something great together!
      </Typography>
      
    </div>
  );
};

export default TextContent;
