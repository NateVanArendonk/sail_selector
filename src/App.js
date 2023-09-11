import React, { useState } from "react";
import './App.css';
import Heatmap from "./components/Heatmap";
import Header from './components/Header';
import WeightInput from './components/WeightInput';
import { TEInput } from "tw-elements-react";
import SubmitButton from './components/SubmitButton';
import { generateData } from "./data"; // Import a function to generate data based on user input

function App() {
  const defaultWeightStart = 200;
  const [userWeight, setUserWeight] = useState(defaultWeightStart);
  const heatmapData = generateData(userWeight)

  return (
    <div>
      <Header />
      <div className="App">
        <div className="UserSection flex">
          <TEInput
            type="text"
            id="exampleFormControlInput1"
            label="Enter Weight (lbs)"
            className="text-black"
          />
          <SubmitButton />
        </div>
        <Heatmap data={heatmapData} width={900} height={600} />
      </div>
    </div>
  );
}

export default App;
