import React, { useState } from "react";
import '../App.css';
import { generateData } from "../data";
import Heatmap from "./Heatmap";
import SubmitButton from './SubmitButton';
import ErrorModal from "./ErrorModal";
import GraphHeader from "./GraphHeader";
import ApexHeatmap from "./ApexHeatmap";
import { TEInput } from "tw-elements-react";



export default function Home() {
    const heatmapPlottingLibrary = 'apex';
    const defaultWeightStart = 200;
    const [userWeight, setUserWeight] = useState(defaultWeightStart); // state for user weight
    const [inputValue, setInputValue] = useState(""); // state for value in input box
    const [heatmapData, setHeatmapData] = useState(generateData(userWeight, heatmapPlottingLibrary)); // state for heatmap data
    const [showErrorModalModal, setShowErrorModalModal] = useState(false); // state for error popup
  
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
        setHeatmapData(generateData(newWeight, heatmapPlottingLibrary));
      } else {
        // Handle invalid input, e.g., display an error message
        console.log("Invalid input. Please enter a valid integer.");
        setShowErrorModalModal(true)}
    };
    return (
        <div className="App mt-6">
            <GraphHeader />
            <div className="UserSection flex my-4 mb-0">
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
                <ApexHeatmap data={heatmapData} />
            )}
        </div>
    )
}
