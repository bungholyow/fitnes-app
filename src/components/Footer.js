import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/fdog1.png';

const Footer = () => {
  return (
    <Box mt='100px' bgcolor='#4034eb'>
      <Stack gap='0px' alignItems='center' px='30px' pt='20px'>
        <img src={Logo} alt='logo' width='100px' height='100px' />
        <Typography variant='h6' pb='40px' mt='20px'>
          Made with ❤️ by Tommy
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer