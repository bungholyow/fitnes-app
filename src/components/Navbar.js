import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/dumbbells8.png';


const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '60px', xs: '40px' }, mt: { sm: '30px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '78px', height: '58px', margin: '0px 15px' }} />
    </Link>
    <Stack
      direction="row"
      gap="30px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#4b3832', borderBottom: '3px solid #fa7e04' }}>Beranda</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#4b3832' }}>Latihan</a>
    </Stack>
  </Stack>
);



export default Navbar