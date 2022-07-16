import { Box } from '@mui/material'
import React, { useState } from 'react'
import HeroBanner from "../components/HeroBanner"
import SearchExercise from "../components/SearchExercise"
import Exercises from "../components/Exercises"
import Footer from "../components/Footer"


const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState("all")

  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Footer />
    </Box>
  )
}

export default Home