// components/ImageContainer.js
import React, { useEffect, useState } from 'react';
import styles from './image_styles.module.css'; // Import the CSS Module

const ImageContainer = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.imageContainer} ${loaded ? styles.loaded : ''}`}>
      <img src='/images/undraw_programming_re_kg9v.svg' alt="Sample Image" />
    </div>
  );
};

export default ImageContainer;
