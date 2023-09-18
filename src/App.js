import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";

// component UI library 
// https://tailwind-elements.com/docs/react/components/modal/

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Home />
      </div>
    </div>
  );
};

export default App;
