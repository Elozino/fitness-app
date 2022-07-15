import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px", color: "#fff", background: "#Ffa9a9", fontSize: "14px", borderRadius: "20px", textTransform: "capitalize"
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px", color: "#fff", background: "#Fcc757", fontSize: "14px", borderRadius: "20px", textTransform: "capitalize"
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml="21px" fontSize="24px" fontWeight="bold" color="black"
        mt="11px" pb="10px" textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>

  )
}

export default ExerciseCard