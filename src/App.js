import React, { useState } from "react";
import './App.css';
import { generateData } from "./data"; // Import your generateData function
import Heatmap from "./components/Heatmap";
import Navbar from './components/Navbar';
import SubmitButton from './components/SubmitButton';
import ErrorModal from "./components/ErrorModal";
import GraphHeader from "./components/GraphHeader";
import PlotlyHeatmap from "./components/PlotlyHeatmap";
import { TEInput } from "tw-elements-react";

// component UI library 
// https://tailwind-elements.com/docs/react/components/modal/

function App() {
  const defaultWeightStart = 200;
  const [userWeight, setUserWeight] = useState(defaultWeightStart); // state for user weight
  const [inputValue, setInputValue] = useState(""); // state for value in input box
  const [heatmapData, setHeatmapData] = useState(generateData(userWeight)); // state for heatmap data
  const [showErrorModalModal, setShowErrorModalModal] = useState(false); // state for error popup

  // Which heatmap to use
  const heatmapPlottingLibrary = 'd3';

  // Regex function to validate if the input is a valid integer
  function isNumeric(value) {
    return /^-?\d+$/.test(value);
  }

  // Function to handle TEInput change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle submit button click
  const handleSubmit = () => {
    if (isNumeric(inputValue)) {
      const newWeight = parseInt(inputValue, 10); // Assuming the input is a valid integer

      // Update userWeight in state
      setUserWeight(newWeight);

      // Update heatmapData with the new userWeight
      setHeatmapData(generateData(newWeight));
    } else {
      // Handle invalid input, e.g., display an error message
      console.log("Invalid input. Please enter a valid integer.");
      setShowErrorModalModal(true)}
  };

  return (
    <div>
      <Navbar />
      <div className="App">
        <GraphHeader />
        <div className="UserSection flex my-4">


          <TEInput
            type="text"
            id="exampleFormControlInput1"
            label="Enter Weight (lbs)"
            className="text-black"
            value={inputValue}
            onChange={handleInputChange}
          />

          <ErrorModal 
            showErrorModalModal={showErrorModalModal}
            setShowErrorModalModal={setShowErrorModalModal} 
          />

          <SubmitButton 
            onClick={handleSubmit}
          />

        </div>
          {heatmapPlottingLibrary === 'd3' ? (
            <Heatmap data={heatmapData} width={900} height={600} />
          ) : (
            <PlotlyHeatmap data={heatmapData} width={1200} height={600} />
          )}
      </div>
    </div>
  );
};

export default App;
