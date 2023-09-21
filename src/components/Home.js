import React, { useState } from "react";
import '../App.css';
import { generateData } from "../data";
import AdvancedUser from "./AdvancedUser";
import NormalUser from "./NormalUser";

export default function Home(props) {
    // Constants 
    const defaultWeightStart = 180;
    const defualtWingSize = 5;
    const defaultWindSpeed = 17;

    // User Variables 
    const [userWing, setUserWing] = useState(defualtWingSize)
    const [userSpeed, setUserSpeed] = useState(defaultWindSpeed)
    const [userWeight, setUserWeight] = useState(defaultWeightStart); // state for user weight

    // Input and Updaters
    const [inputValue, setInputValue] = useState(""); // state for value in input box
    const [inputValueWingSize, setInputValueWingSize] = useState(""); // state for value in input box
    const [inputValueWindSpeed, setInputValueWindSpeed] = useState(""); // state for value in input box
    const [heatmapData, setHeatmapData] = useState(generateData(userWeight, userSpeed, userWing)); // state for heatmap data
    const [showErrorModalModal, setShowErrorModalModal] = useState(false); // state for error popup
    const [showInformationModal, setShowInformationModal] = useState(false);
    
    // Regex function to validate if the input is a valid integer
    function isNumeric(value) {
        return /^-?\d+(\.\d+)?$/.test(value);
    }
  
    // Function to handle TEInput change
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleInputChangeWingSize = (event) => {
      setInputValueWingSize(event.target.value);
    };

    const handleInputChangeWindSpeed = (event) => {
      setInputValueWindSpeed(event.target.value);
    };
  
    // Function to handle submit button click
    const handleSubmit = () => {
      if (isNumeric(inputValue)) {
        const newWeight = parseInt(inputValue, 10); // Assuming the input is a valid integer
  
        // Update userWeight in state
        setUserWeight(newWeight);
  
        // Update heatmapData with the new userWeight
        setHeatmapData(generateData(newWeight, userSpeed, userWing));
      } else {
        setShowErrorModalModal(true)}
    };

    const handleSubmitAdvanced = () => {
        if (isNumeric(inputValueWingSize) && isNumeric(inputValueWindSpeed)) {
            const newWingSize = parseInt(inputValueWingSize, 10);
            const newWindSpeed = parseInt(inputValueWindSpeed, 10);

            // Update userWingSize and userWindSpeed in state
            setUserWing(newWingSize);
            setUserSpeed(newWindSpeed);

            // Update heatmapData with the new userWingSize and userWindSpeed
            setHeatmapData(generateData(userWeight, newWindSpeed, newWingSize));
        } else {
            setShowErrorModalModal(true);
        }
    };

    return (
        <div className="App">
            <div className="App">
                {props.advancedToggle ? (
                <NormalUser
                    userWeight={userWeight}
                    setUserWeight={setUserWeight}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    heatmapData={heatmapData}
                    setHeatmapData={setHeatmapData}
                    showErrorModalModal={showErrorModalModal}
                    setShowErrorModalModal={setShowErrorModalModal}
                    showInformationModal={showInformationModal}
                    setShowInformationModal={setShowInformationModal}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    advancedData={props.advancedToggle}
                />
                ) : (
                <AdvancedUser 
                    userWeight={userWeight}
                    setUserWeight={setUserWeight}
                    inputValueWingSize={inputValueWingSize}
                    setInputValueWingSize={setInputValueWingSize}
                    inputValueWindSpeed={inputValueWindSpeed}
                    setInputValueWindSpeed={setInputValueWindSpeed}
                    heatmapData={heatmapData}
                    setHeatmapData={setHeatmapData}
                    showErrorModalModal={showErrorModalModal}
                    setShowErrorModalModal={setShowErrorModalModal}
                    showInformationModal={showInformationModal}
                    setShowInformationModal={setShowInformationModal}
                    handleInputChangeWingSize={handleInputChangeWingSize}
                    handleInputChangeWindSpeed={handleInputChangeWindSpeed}
                    handleSubmit={handleSubmitAdvanced}
                    userSpeed={userSpeed}
                    userWing={userWing}
                    setUserSpeed={setUserSpeed}
                    setUserWing={setUserWing}
                    advancedData={props.advancedToggle}
                />
                )}
            </div>
        </div>
    );

}
