import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SkillNlp from '../../components/homepage_skills_components_nlp/skills_Container';
import ImageContainer from '../../components/homepage_skills_components_nlp/skills_image_container';
import { useInView } from 'react-intersection-observer';

// Styled Paper component
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh',
  border: 'none',
  boxShadow: 'none',
  transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
  '&.appear': {
    opacity: 1,
    transform: 'translateY(0)',
  },
  transform: 'translateY(100px)',
  '@media (max-width: 600px)': {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 'auto',
  },
}));

// Main component
const SkillsScraping = () => {
  const Skills = () => {
    const [ref, inView] = useInView({ triggerOnce: true });
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
      if (inView) {
        const timer = setTimeout(() => {
          setLoaded(true);
        }, 1500);

        return () => clearTimeout(timer);
      }
    }, [inView]);

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={8}>
            <Item >
              <SkillNlp
                title="Advanced Natural Language Processing (NLP) Services"
                iconsSrc={[
                    '/images/natural-language-processing.png',
                    '/icons/fastapi-1.svg',
                    '/icons/4375050_logo_python_icon.svg',
                  ]}
                  skillDescriptions={[
                    'Applying NLP techniques for insights from unstructured text data.',
                    'Developing algorithms for sentiment analysis, entity recognition, and summarization.',
                    'Utilizing Python and NLP libraries for enhanced content understanding.',
                    'Integrating NLP models for predictive analysis.',
                    'Building recommendation systems based on user behavior.',
                    'Enhancing applications with AI-driven features for intelligent decision-making.',
                  ]}
              />
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item >
              <ImageContainer />
            </Item>
          </Grid>
        </Grid>
      </Box>
    );
  };

  return <Skills />;
};

export default SkillsScraping;
