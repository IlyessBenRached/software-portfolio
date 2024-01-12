import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
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
            xs: '2rem',
            sm: '3rem',
          }
        }}
      >
        Professional Experience / Inernships
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Diphylleia, serif',
          lineHeight: 1.6,
          
          color: 'black',
          textAlign: 'justify',
          marginTop: '10px',
          marginLeft: '20px',
          fontWeight: 'bold',
          transition: 'opacity 1s ease-in-out',
          fontSize: {
            xs: '0.9rem',
            sm: '1rem',
          },
          margin:'20px',
        }}
      >
        Throughout my professional journey, I have embraced diverse challenges in the world of technology. Having worked remotely, I've honed my skills in building dynamic web scrapers that gather and process data efficiently. My experience extends to both solo and collaborative projects, enabling me to thrive in diverse team environments.
      My passion for machine learning and natural language processing (NLP) projects has led me to explore innovative solutions. This journey has been fueled by an insatiable curiosity, driving me to master new technologies continually. I am dedicated to delivering creative and impactful solutions in the dynamic landscape of web development.
      Whether collaborating in a team or working independently, I approach each project with enthusiasm and a commitment to excellence. Let's embark on a journey to build something great together!
      </Typography>
      
    </div>
  );
};

export default TextContent;
