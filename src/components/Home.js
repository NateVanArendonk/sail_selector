import React, { useState } from "react";
import '../App.css';
import { generateData } from "../data";
import Heatmap from "./Heatmap";
import SubmitButton from './SubmitButton';
import ErrorModal from "./ErrorModal";
// import GraphHeader from "./GraphHeader";
import ApexHeatmap from "./ApexHeatmap";
import { TEInput } from "tw-elements-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import InformationModal from "./InformationModal";


export default function Home() {
    const heatmapPlottingLibrary = 'apex';
    const defaultWeightStart = 200;
    const [userWeight, setUserWeight] = useState(defaultWeightStart); // state for user weight
    const [inputValue, setInputValue] = useState(""); // state for value in input box
    const [heatmapData, setHeatmapData] = useState(generateData(userWeight, heatmapPlottingLibrary)); // state for heatmap data
    const [showErrorModalModal, setShowErrorModalModal] = useState(false); // state for error popup
    const [showInformationModal, setShowInformationModal] = useState(false);

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
        setShowErrorModalModal(true)}
    };

    return (
        <div className="App">
            <div>
                <div className="flex item-center">
                    <div className="">
                        <div className="text-center">
                            <h1 className="text-gray-900 font-bold text-5xl md:text-6xl xl:text-7xl">Find the perfect <span className="text-primary dark:text-white">wing size.</span></h1>
                            <p className="mt-0 mb-6 text-gray-700 inline-block">Enter your weight below and find your ideal conditions for wing foiling.</p>
                            <button 
                                className="info-button inline-block ml-2"
                                type="button"
                                onClick={() => setShowInformationModal(true)}
                            >
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="UserSection flex item-center mt-6 mb-0">
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

                <InformationModal
                    showInformationModal={showInformationModal}
                    setShowInformationModal={setShowInformationModal}
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
