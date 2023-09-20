import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Routes } from 'react-router-dom';

// component UI library 
// https://tailwind-elements.com/docs/react/components/modal/

function App() {

  return (
    <div>
      <Navbar />
      <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </div>
  );
};

export default App;
