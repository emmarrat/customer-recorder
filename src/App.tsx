import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Container, CssBaseline} from "@mui/material";
import AppToolbar from "./components/UI/AppToolbar";
import Services from "./features/services/Services";


function App() {
  return (
    <>
      <CssBaseline/>
      <header>
        <AppToolbar/>
      </header>
      <Container sx={{mt: 5}}>
        <Routes>
          <Route path="/" element={<Services/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
