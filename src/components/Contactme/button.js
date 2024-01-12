import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  borderRadius: '20px', // Adjust the value as needed for rounded corners
  '&:hover': {
    backgroundColor: theme?.palette?.primary?.main, // Default MUI primary color on hover
  },
  
}));

const TransparentButton = ({ onClick, children }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default TransparentButton;
