import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { useInView } from 'react-intersection-observer';

import './skills.css';

const SkillFullStack = ({ iconsSrc, title, skillDescriptions }) => {
  const [loaded, setLoaded] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setLoaded(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <div className={`text_container ${loaded ? 'loaded' : ''}`} ref={ref}>
      <Typography variant="h5" className="skill_title" >
        {title}
      </Typography>
      <div className="skills_icons">
        {iconsSrc.map((src, index) => (
          <img key={index} src={src} alt={`Skill ${index + 1}`} className="icons" />
        ))}
      </div>
      <ul className="skill_descriptions" >
        {skillDescriptions.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillFullStack;