import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from "../assets/icons/gym.png"

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "12rem",
        height: "12rem",
        cursor: "pointer",
        gap: "1rem",
      }}
      onClick={() => {
        setBodyPart(item)
        window.scrollTo({ top: 1000, left: 100, behavior: "smooth" })
      }}
    >
      <img src={Icon} alt="dumbbell"
        //  className="body-part-icon"
        style={{ width: "5rem", height: "5rem" }}
      />
      <Typography fontSize="24px" fontWeight="bold" color="#3a1212" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart