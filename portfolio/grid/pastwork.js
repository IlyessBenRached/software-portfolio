import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import ImageProjects from '../components/homepage/homepage_pastwork_component/pastwork_details';

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
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            My Recent Work
          </Typography>
          <Typography align="center" paragraph>
            Here are a few past projects I've worked on. Want to Hire me? Email me.
          </Typography>
          <ImageProjects />
        </Box>
      </Container>
    </React.Fragment>
  );
}
