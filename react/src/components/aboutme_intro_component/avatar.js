import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2} sx={{ margin: 'auto' }}>
      <Avatar 
        alt="Ilyes Ben Rached" 
        src="/images/1671539710027 (1).jpg" 
        sx={{ width: 150, height: 150 }}
      />
    </Stack>
  );
}
