import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/fdog1.png';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#f9cb9c'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt='logo' width='100px' height='50px' />
        <Typography variant='h5' pb='40px' mt='20px'>
          Made with ❤️ by Tommy
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer