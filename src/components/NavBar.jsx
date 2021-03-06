import { Stack } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../assets/images/Logo.png"

const NavBar = () => {
  return (
    <Stack
      direction="row"
      // justifyContent="space-around"
      px="20px"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px"
        },
        marginTop: {
          sm: "32px",
          xs: "20px"
        }
      }}
    >
      <Link to="/">
        <img src={Logo} alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="12px"
        alignItems="flex-end"
      >
        <Link to="/"
          style={{ textDecoration: "none", color: "#fffafb", borderBottom: "3px solid #ff2625" }}
        >
          Home
        </Link>
        <a href="#exercises"
          style={{ textDecoration: "none", color: "#fffafb" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack >
  )
}

export default NavBar