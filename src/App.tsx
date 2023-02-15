import React from 'react';
import { Routes} from "react-router-dom";

import {Container, CssBaseline} from "@mui/material";
import AppToolbar from "./components/UI/AppToolbar";


function App() {
  return (
    <>
      <CssBaseline/>
      <header>
        <AppToolbar/>
      </header>
      <Container sx={{mt: 5}}>
        <Routes>

        </Routes>
      </Container>
    </>
  );
}

export default App;
