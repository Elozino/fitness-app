import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData"
import DetailsPage from '../components/DetailsPage'
import ExerciseVideo from '../components/ExerciseVideo'
import SimilarVideo from '../components/SimilarVideo'

const ExerciseInfo = () => {
  const { id } = useParams()
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState()
  const [targetMusclesExercise, setTargetMusclesExercise] = useState([])
  const [equipmentExercise, setEquipmentExercise] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com"
      const youTubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com"
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideoData = await fetchData(`${youTubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setExerciseVideos(exerciseVideoData.contents)

      const targetMusclesExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
      setTargetMusclesExercise(targetMusclesExerciseData)
      const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
      setEquipmentExercise(equipmentExerciseData)

    }
    fetchExercisesData()
  }, [id])


  return (
    <Box>
      <DetailsPage exerciseDetail={exerciseDetail} key={id}/>
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarVideo targetMusclesExercise={targetMusclesExercise} equipmentExercise={equipmentExercise}/>
    </Box>
  )
}

export default ExerciseInfo