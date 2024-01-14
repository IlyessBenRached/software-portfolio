import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageContent from '../components/aboutme_intro_component/avatar';
import Button from '../components/Contactme/button';
import Link from 'next/link';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh',
  border: 'none',
  boxShadow: 'none',
  '@media (max-width: 600px)': {
    flexDirection: 'column', // Set to 'column' for smaller screens
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    height: '40vh',

  },
}));

export default function AboutMeGridIntro() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={1}>
          <Item>
            <ImageContent />
          </Item>
        </Grid>
        <Grid item xs={12} md={5}>
          <Item>
            <Typography sx={{
              marginLeft: { xs: 0, md: '5rem' },
              lineHeight: '1.6rem',
              textAlign: { xs: 'center', md: 'left' },
              fontFamily: 'Rubik, sans-serif',
              fontWeight: 'bolder',
            }}>
              Hey, my name is Ilyes. I'm a self-taught Full Stack Developer, Web Scraper, and Machine Learning enthusiast based in Tunisia, Nabeul. I'm passionate about music, and I find inspiration in creating innovative solutions through coding. I enjoy working both remotely and onsite with companies or clients, bringing my skills to collaborative projects. I'm always curious to learn more, especially when it comes to exploring new technologies and diving into creative coding projects.
            </Typography>
            <Link href="/contact">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '1rem' }}>
                <Button style={{ width: '100%', padding: '1rem' }}>
                  Contact me
                </Button>
              </div>
            </Link>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

