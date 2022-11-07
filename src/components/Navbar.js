import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';


const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '40px', xs: '20px' }, mt: { sm: '20px', xs: '15px' }, justifyContent: 'none' }} px="10px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '58px', height: '48px', margin: '0px 12px' }} />
    </Link>
    <Stack
      direction="row"
      gap="30px"
      fontFamily="Alegreya"
      fontSize="20px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#4b3832', borderBottom: '2px solid #4034eb' }}>Beranda</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#4b3832' }}>Latihan</a>
    </Stack>
  </Stack>
);



export default Navbar