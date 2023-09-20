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
        <div className="App">
            <div class="relative" id="home">
                <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-60">
                    <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-secondary"></div>
                    <div class="blur-[106px] h-32 bg-gradient-to-r from-info to-secondary"></div>
                </div>
                <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div class="relative pt-36 ml-auto">
                        <div class="lg:w-2/3 text-center mx-auto">
                            <h1 class="text-gray-900 font-bold text-5xl md:text-6xl xl:text-7xl">Find your perfect <span class="text-primary dark:text-white">wing size.</span></h1>
                            <p class="mt-8 text-gray-700">Enter your weight below and find the ideal wing size for any condition</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <GraphHeader />
                <div className="UserSection flex item-center my-4 mb-0">
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
            </div>






            {heatmapPlottingLibrary === 'd3' ? (
                <Heatmap data={heatmapData} width={900} height={600} />
            ) : (
                <ApexHeatmap data={heatmapData} />
            )}
        </div>
    )
}
