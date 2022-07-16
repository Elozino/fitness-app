import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo from "../assets/images/Logo-1.png"

const Footer = () => {
  return (
    <Box mt={5}>
      <Stack gap="10px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" className width="200px" height="40px" />
        <Typography color="#fffafb" variant="body1" pb="40px">Made with MUI, RAPID API & REACT</Typography>
      </Stack>
    </Box>
  )
}

export default Footer