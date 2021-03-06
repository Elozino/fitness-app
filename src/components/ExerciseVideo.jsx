import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ExerciseVideo = ({ exerciseVideos, name }) => {
  return (
    <Box
      sx={{ mt: { lg: "200px", xs: "20px" } }}
      p="20px"
    >
      <Typography variant="h4" mb={3} color="#fffafb">
        Watch <span style={{ color: "#ff2625", textTransform: "capitalize" }}>{name}</span> exercise videos
      </Typography>
      <Stack
        justifyContent="space-between"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row", sm: "row" },
          gap: { lg: "20px", xs: "0" }
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h6">
                {item.video.title}
              </Typography>
              <Typography variant="h6">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box >
  )
}

export default ExerciseVideo