import React, { useEffect, useState } from 'react'
import Pagination from "@mui/material/Pagination"
import { Box, Typography, Stack } from '@mui/material'
import { exerciseOptions, fetchData } from "../utils/fetchData"
import ExerciseCard from './ExerciseCard'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9

  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1500, behavior: "smooth" })
  }

  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []
      if (bodyPart === "all") {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }
      setExercises(exercisesData)
    }

    fetchExercisesData()
  }, [bodyPart])


  return (
    <Box id="exercises"
      sx={{
        mt: { lg: "110px" }
      }}
      mt="50px"
      p="30px"
    >
      <Typography variant="h4" pl={4} mb="46px" color="#fffafb">Showing Results</Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          gap: { lg: "50px", xs: "50px" }
        }}
      >
        {currentExercise.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            sx={{
              "& .MuiPaginationItem-root": { color: "#fffafb" },
            }}
            color="standard"
            shape="rounded"
            default="1"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"

          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises