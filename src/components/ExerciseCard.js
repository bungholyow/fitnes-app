import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
    return (
        <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt='{exercise.name}' loading='lazy' />
            <Stack direction='row'>
                <Button sx={{
                    ml: '20px', color: '#fff', background: '#4034eb',
                    fontSize: '12px', borderRadius: '20px', textTransform: 'capitalize'
                }}>
                    {exercise.bodyPart}
                </Button>
                <Button sx={{
                    ml: '20px', color: '#fff', background: '#fcc757',
                    fontSize: '12px', borderRadius: '20px', textTransform: 'capitalize'
                }}>
                    {exercise.target}
                </Button>
            </Stack>
            <Typography ml='20px' color='#000' fontWeight='bold' mt='8px'
                pb='10px' textTransform='capitalize' fontSize='20px'>
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard;