/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
import Entry from './components/Entry';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';
import NavMenu from './components/NavMenu';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
