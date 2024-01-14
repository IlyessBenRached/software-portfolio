import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from  '../homepage_intro/image_styles.module.css';

const ImageContainer = () => {
  const [loaded, setLoaded] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setLoaded(true);
      }, 1100);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <div className={`${styles.imageContainer} ${loaded ? styles.loaded : ''}`} ref={ref}>
      <img src="/images/undraw_analytics_re_dkf8.svg" alt="Sample Image" />
    </div>
  );
};

export default ImageContainer;
