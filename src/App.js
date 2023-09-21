import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Routes } from 'react-router-dom';

// component UI library 
// https://tailwind-elements.com/docs/react/components/modal/

function App() {
  const [advancedToggle, setAdvancedToggle] = useState(true);
  const [showContactModal, setShowContactModal] = useState(false);

   // Function to handle toggle click
  const handleToggle = () => {
      setAdvancedToggle(!advancedToggle);
      console.log(advancedToggle)
  };


  return (
    <div>
      <Navbar toggleState={advancedToggle} handleToggle={handleToggle}/>
      <div className="App">
      <Routes>
        <Route exact path="/" element={<Home advancedToggle={advancedToggle}/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact showContactModal={showContactModal} setShowContactModal={setShowContactModal}/>} />
      </Routes>
      </div>
    </div>
  );
};

export default App;
