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
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "3rem",
      }}
    >
      <img src={Icon} alt="dumbbell"
        //  className="body-part-icon"
        styyle={{ width: "40px", height: "40px" }}
      />
    </Stack>
  )
}

export default BodyPart