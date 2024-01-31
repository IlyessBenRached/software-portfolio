import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SkillScraping from '../components/homepage/homepage_skills_components_scraping/skills_Container';
import ImageContainer from '../components/homepage/homepage_skills_components_scraping/skills_image_container';
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
              <SkillScraping
                title="Web Scraping and Data Extraction"
              iconsSrc={[
                    '/icons/icons8-selenium-144.svg',
                    '/icons/fastapi-1.svg',
                    '/icons/1012822_code_development_logo_mongodb_programming_icon.svg',
                  ]}
                  skillDescriptions={[
                    'Implementing Selenium for dynamic content extraction.',
                    'Creating custom scrapers for diverse online data sources.',
                    'Tailoring extraction services to meet specific client needs.',
                    'Cleaning and transforming scraped data for meaningful insights.',
                    'Performing predictive analysis on extracted data.',
                    'Delivering actionable information through web scraping.',
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
