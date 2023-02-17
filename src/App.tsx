import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/UI/Header";
import Services from "./features/services/Services";


function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Services/>}/>
          <Route path="*" element={(<h2 className="not-found">Not found!</h2>)}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
