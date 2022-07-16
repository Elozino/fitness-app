import React from 'react'
import BodyPartImage from "../assets/icons/body-part.png"
import TargetImage from "../assets/icons/target.png"
import EquipmentImage from "../assets/icons/equipment.png"
import { Button, Stack, Typography } from '@mui/material'

const DetailsPage = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart
    },
    {
      icon: TargetImage,
      name: target
    },
    {
      icon: EquipmentImage,
      name: equipment
    },
  ]

  return (
    <Stack gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h4" color="#fffafb">
          {name}
        </Typography>
        <Typography variant="h6" color="#fffafb">
          Exercise keeps you strong. {name}
          is one of the best exercises to target your {target}.
          It will help you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                backgroundColor: "#fff2db",
                borderRadius: "50%",
                width: "70px",
                height: "70px"
              }}
            >
              <img src={item.icon} alt="icon" 
              style={{
                width: "40px",
                height: "40px"
              }}
              />
            </Button>
            <Typography variant="h6" textTransform="capitalize" color="#fffafb">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack >
  )
}

export default DetailsPage