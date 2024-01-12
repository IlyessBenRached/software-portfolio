import React, { useEffect, useState } from 'react';
import './image_styles.css';

const ImageContainer = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`image-container ${loaded ? 'loaded' : ''}`}>
      <img src="/images/undraw_solution_mindset_re_57bf.svg" alt="Sample Image" />
    </div>
  );
};

export default ImageContainer;