import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/UI/Header";
import Services from "./features/services/containers/Services";
import BookDatetime from "./features/services/containers/BookDatetime";
import BookCustomer from "./features/services/containers/BookCustomer";
import Cart from "./features/services/containers/Cart";
import './App.css';
import Congrats from "./features/services/containers/Congrats";
import Footer from "./components/UI/Footer";
import InstagramCollage from "./components/UI/InstagramCollage";

function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main className="container main">
        <Routes>
          <Route path="/" element={<Services/>}/>
          <Route path="/book-date" element={<BookDatetime/>}/>
          <Route path="/book-customer" element={<BookCustomer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/congrats" element={(<Congrats/>)}/>
          <Route path="/my-works" element={(<InstagramCollage/>)}/>
          <Route path="*" element={(<h2 className="not-found">Not found!</h2>)}/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
