import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import '../homepage_intro_components/image_styles.css';

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
    <div className={`image-container ${loaded ? 'loaded' : ''}`} ref={ref}>
      <img src="/images/undraw_web_search_re_efla.svg" alt="Sample Image" style={{ width: '80%' }} />
    </div>
  );
};

export default ImageContainer;
