import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import HeroBannerImage from "../assets/images/banner.jpg"

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "4rem", xs: "70px" },
        ml: { sm: "50px" },
        position: "relative",
        padding: "20px"
      }}
    >
      <Typography
        color="#ff2625" fontWeight="bold" fontSize="26px"
      >
        Fitness Club
      </Typography>
      <Typography fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "40px", },
          color: "#fffafb"
        }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3} color="#fffafb">
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px 20px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight="600"
        fontSize="12rem"
        color="#fffafb"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" }
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner