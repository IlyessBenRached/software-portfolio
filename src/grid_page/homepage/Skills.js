import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SkillFullStack from '../../components/homepage_skills_components/skills_Container';
import ImageContainer from '../../components/homepage_skills_components/skills_image_container';
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
const Skills = () => {
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
              <SkillFullStack
                title="Full Stack Development"
                iconsSrc={[
                  '/icons/294678_html5_icon.svg',
                  '/icons/317756_badge_css_css3_achievement_award_icon.svg',
                  '/icons/282802_javascript_js_icon.svg',
                  '/icons/4375050_logo_python_icon.svg',
                  '/icons/1012822_code_development_logo_mongodb_programming_icon.svg',
                  '/icons/4691303_mysql_icon.svg',
                  '/icons/4691328_postgresql_icon.svg',
                  '/icons/7423887_react_react native_icon.svg',
                ]}
                skillDescriptions={[
                  'Crafting responsive interfaces with React.js, HTML, CSS, and JavaScript.',
                  'Implementing seamless data flow through Redux.',
                  'Developing robust server-side applications using Django and FastAPI.',
                  'Designing optimized databases (MongoDB, PostgreSQL, MySQL).',
                  'Creating efficient RESTful APIs for seamless communication.',
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

export default Skills;
