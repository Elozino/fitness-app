import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercise = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("")
  // const [exercises, setExercises] = useState([])
  const [bodyParts, setBodyParts] = useState([])


  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions)
      setBodyParts(["all", ...bodyPartsData])
    }
    fetchExercisesData()
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      const searchedExercises = exerciseData.filter((exercise) =>
        exercise.name.toLowerCase().includes(search)
        || exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch("")
      setExercises(searchedExercises)
    }
  }
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      p={5}
      mt={3}
    >
      <Typography
        fontWeight={700}
        mb="50px"
        textAlign="center"
        sx={{
          fontSize: { lg: "44px", xs: "30px" }
        }}
      >
        Awesome exercises you <br /> should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercise"
          sx={{
            input: { fontWeight: "bold", border: "none", borderRadius: "4px" },
            width: { lg: "800px", sm: "500px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "4px"
          }}
        />
        <Button className="serach-btn"
          color="error"
          sx={{
            backgroundColor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0"
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack >
  )
}

export default SearchExercise