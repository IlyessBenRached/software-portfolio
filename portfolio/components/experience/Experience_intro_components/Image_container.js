import React, { useEffect, useState } from 'react';
import styles from  './image_styles.module.css';

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
      <img src="/images/undraw_augmented_reality_re_f0qd.svg" alt="Sample Image" />
    </div>
  );
};

export default ImageContainer;