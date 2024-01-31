import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import ImageProjects from '../components/homepage/homepage_pastwork_component/pastwork_details';
import Link from 'next/link';


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '110vh',
        }}
      >
        <Box
          sx={{
            bgcolor: '#f5f5f5',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            p: 3, // Adjust the padding as needed
            width: '50%',
            height: '50vh',
            '@media (max-width: 600px)': {
              width: '90%', // Set a smaller width for screens less than 600px wide
            },
            textDecoration:'none'
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Want to Hire me ?
          </Typography>
          <Typography align="center" paragraph >
          I'm available for new opportunities. Feel free to reach out if you have any questions or if you'd like to discuss potential collaborations.
          <Link href="/contact">
             Contact Me
          </Link>{' '}
          </Typography>
         {/*  <ImageProjects /> */}
        </Box>
      </Container>
    </React.Fragment>
  );
}
