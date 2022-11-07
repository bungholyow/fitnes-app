import React from 'react'
import { Box, Typography, Button } from '@mui/material';

import HeroBannerGambar from '../assets/images/banner.png';

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '55px' }, ml: { sm: '45px' }
        }} position='relative' p='25px'>
            <Typography color='#4034eb' fontWeight='550' fontSize='24px'>
                Klub Fitness
            </Typography>
            <Typography fontWeight={550} sx={{ fontSize: { lg: '40px', xs: '30px' } }} color="#4b3832">
                Latihan untuk Sehat, <br /> dan Kuat !
            </Typography>
            <Typography fontSize='18px' lineHeight='32px' mb={2} color="#4b3832">
                Ayo cek latihan efektif untuk meningkatkan kebugaran!
            </Typography>
            <Button variant='contained' color='success' href='#exercises' sx={{ backgroundColor: '#0d2fd9', padding: '8px' }}>
                Telusuri Latihan
            </Button>
            <Typography fontWeight={550} color='#4034eb' sx={{ opacity: '0.2', display: { lg: 'block', xs: 'none' } }} fontSize='150px'>
                Sehat & Bugar
            </Typography>
            <img src={HeroBannerGambar} alt='hero-banner' className='hero-banner-img' />
        </Box>
    )
}

export default HeroBanner