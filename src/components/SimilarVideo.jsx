import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarVideo = ({ targetMusclesExercise, equipmentExercise }) => {

  return (
    <Box sx={{
      mt: { lg: "100px", xs: "0" }
    }}
      p="20px"
    >
      <Typography mb={5} variant="h5" color="#fffafb">Exercises that target the same muscle group</Typography>
      <Stack direction="row"
        sx={{ p: "2", position: "relative", }}
      >
        {targetMusclesExercise.length ?
          <HorizontalScrollbar data={targetMusclesExercise} />
          : <Loader />
        }
      </Stack>

      <Typography my={5} variant="h5" color="#fffafb">Exercises that use the same equipment</Typography>
      <Stack direction="row"
        sx={{ p: "2", position: "relative", }}
      >
        {equipmentExercise.length ?
          <HorizontalScrollbar data={equipmentExercise} />
          : <Loader />
        }
      </Stack>
    </Box >
  )
}

export default SimilarVideo