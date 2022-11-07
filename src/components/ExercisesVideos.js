import React from 'react'
import { Box, Stack, Typography } from '@mui/material';


const ExerciseVideos = ({ exerciseVideos, name }) => {

  console.log(exerciseVideos);

  if (!exerciseVideos.length) return 'Memuat...';

  return (
    <Box sx={{ marginTop: { lg: '50px', xs: '20px' } }} p='15px'>
      <Typography variant='h4' ml='80px' mb='40px'>
        Tonton video latihan <span style={{ color: '#c9164c', textTransform: 'capitalize' }}>
          {name}
        </span>
      </Typography>
      <Stack justifyContent='center' flexWrap='wrap' alignItems='center'
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '60px', xs: '5px' }
        }}>
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant='h6' color='#000'>
                {item.video.title}
              </Typography>
              <Typography variant='h7' color='#c9164c'>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos