import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { useInView } from 'react-intersection-observer';

import styles from  './skills.module.css';

const SkillFullStack = ({ iconsSrc, title, skillDescriptions }) => {
  const [loaded, setLoaded] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      console.log('Setting loaded to true');
      const timer = setTimeout(() => {
        setLoaded(true);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <div className={`${styles.textContainer} ${loaded ? styles.appear : ''}`} ref={ref}>
      <Typography variant="h5" className={styles.skill_title} >
        {title}
      </Typography>
      <div className={styles.skills_icons}>
        {iconsSrc.map((src, index) => (
          <img key={index} src={src} alt={`Skill ${index + 1}`} className={styles.icons} />
        ))}
      </div>
      <ul className={styles.skill_descriptions} >
        {skillDescriptions.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillFullStack;