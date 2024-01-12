import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextContent from '../../components/homepage_intro_components/Text_Container';
import ImageContent from '../../components/homepage_intro_components/Image_container';

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
  border: 'none', // Remove the border property
  boxShadow: 'none', // removes the shadow(border of item from mui)
  '@media (max-width: 600px)': {
    flexDirection: 'row', // Set to 'row' for smaller screens
    justifyContent: 'space-around', // Adjust the alignment as needed
    alignItems: 'center', // Center items vertically
    height: 'auto', // Adjust the height for smaller screens
  },
}));

export default function Homepage_grid_intro() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={7}>
          <Item>
            <TextContent />
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <ImageContent />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
