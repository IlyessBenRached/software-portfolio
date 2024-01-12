import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3), // Increased padding for a more spacious look
  textAlign: 'center',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Shadow effect
  borderRadius: '15px', // Optional: Add some border-radius for a softer look
  height: '60vh',
}));

export default function BasicStack() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>
          <Typography 
            variant="h1" 
            align="center" 
            gutterBottom 
            sx={{
              fontSize: "1.5rem",
              marginBottom: 5,
            }}
          >
            Interested in collaborating with me?
          </Typography>
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom
            sx={{
              fontSize: "1.5rem",
              marginBottom: 5,
            }}
          >
            I’m always open to discussing work or partnership opportunities.
          </Typography>
          <Button
            color="secondary"
            size="large"
            variant="contained"
            sx={{
              marginTop: 6,
              backgroundColor: '#1976D2', // Set your preferred color here
              '&:hover': {
                backgroundColor: '#4d7fba', // Set your preferred hover color here
              },
            }}
          >
            Contact Me
          </Button>
        </Item>
      </Stack>
    </Box>
  );
}
