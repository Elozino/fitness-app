import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ExerciseInfo from "./pages/ExerciseInfo";

function App() {
  return (
    <Box width="400">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseInfo/>}/>
      </Routes>
      App
    </Box>
  );
}

export default App;
