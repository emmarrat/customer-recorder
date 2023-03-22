import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/UI/Header";
import Services from "./features/services/Services";
import BookDatetime from "./features/services/BookDatetime";
import BookCustomer from "./features/services/BookCustomer";
import Cart from "./features/services/Cart";
import './App.css';


function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Services/>}/>
          <Route path="/book-date" element={<BookDatetime/>}/>
          <Route path="/book-customer" element={<BookCustomer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={(<h2 className="not-found">Not found!</h2>)}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
