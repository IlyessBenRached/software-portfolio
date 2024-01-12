// Comingsoon.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const UnderConstruction = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        textAlign: 'center',
      }}
    >
      <img
        src="/images/undraw_under_construction_-46-pa.svg"
        alt="Under Construction"
        style={{ maxWidth: '100%', maxHeight: '70vh' }}
      />
      <Typography variant="h5" sx={{ marginTop: 2 , padding:'2rem'}}>
      Because Rome Wasn't Built in a Day, Neither is My Blog. Under Construction.
      </Typography>
      {/* Add other creative lines if desired */}
    </Box>
  );
};

export default UnderConstruction;
