import React from 'react'
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="50px" sx={{ flexDirection: { lg: 'row' }, p: '18px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '20px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '40px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '20px', xs: '18px' } }} color="#4F4C4C">
          Latihan membuat tubuh tetap bugar.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> adalah salah satu latihan yang cocok
          untuk bagian tubuh daerah {target}. Latihan ini akan membantu meningkatkan{' '}
          suasana hati dan energi tubuh.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="20px" alignItems="center">
            <Button sx={{ background: '#9e9bc7', borderRadius: '50%', width: '70px', height: '70px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '35px', height: '35px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '20px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail