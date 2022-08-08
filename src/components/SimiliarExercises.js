import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimiliarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0'}}}>
      <Typography variant='h3' mb={5}>Latihan yang memusatkan pada bagian otot sejenis</Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} />
        : <Loader />}
      </Stack>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Typography variant='h3' mb={5}>Latihan yang menggunakan peralatan sejenis</Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} />
        : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimiliarExercises