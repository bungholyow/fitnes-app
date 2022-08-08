import React from 'react'
import { Box, Typography, Button } from '@mui/material';

import HeroBannerGambar from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'}, ml: { sm: '50px'}}} position='relative' p='20px'>
        <Typography color='#fa7e04' fontWeight='600' fontSize='26px'>
            Klub Fitness
        </Typography>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px'}}} color="#4b3832">
            Latihan untuk Sehat, <br/> dan Kuat !
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={3} color="#4b3832">
            Ayo cek latihan efektif untuk meningkatkan kebugaran!  
        </Typography>
        <Button variant='contained' color='success' href='#exercises' sx={{ backgroundColor: '#fa7e04', padding: '10px'}}>
            Telusuri Latihan
        </Button>
        <Typography fontWeight={600} color='#fa7e04' sx={{opacity: '0.1', display: { lg: 'block', xs: 'none'}}} fontSize='200px'>
            Latihan
        </Typography>
        <img src={HeroBannerGambar} alt='hero-banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner