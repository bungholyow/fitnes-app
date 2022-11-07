import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const CariLatihan = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
          || item.target.toLowerCase().includes(search)
          || item.equipment.toLowerCase().includes(search)
          || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="35px" justifyContent="center" p="18px">
      <Typography fontWeight={550} sx={{ fontSize: { lg: '40px', xs: '25px' } }} mb="49px" textAlign="center" color="#4b3832">
        Jenis Latihan Yang <br /> Dapat Dicoba
      </Typography>
      <Box position="relative" mb="60px">
        <TextField
          height="60px"
          sx={{ input: { fontWeight: '500', border: 'none', borderRadius: '3px' }, width: { lg: '1000px', xs: '320px' }, backgroundColor: '#fff', borderRadius: '38px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Cari Latihan"
          type="text"
        />

        <Button variant='contained' color='success' sx={{ backgroundColor: '#4034eb', padding: '8px', textTransform: 'none', width: { lg: '150px', xs: '78px' }, height: '55px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Telusuri
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '80%', p: '12px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} isBodyParts />
      </Box>
    </Stack>
  );
};

export default CariLatihan;