import './App.css';
import { data } from "./data";
import { Heatmap } from "./components/Heatmap";
import Header from './components/Header';
import WeightInput from './components/WeightInput';
import SubmitButton from './components/SubmitButton';

// https://tailwind-elements.com/docs/react/forms/inputs/

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <div className="UserSection flex">
          <WeightInput />
          <SubmitButton />
        </div>
        <Heatmap data={data} width={900} height={600} />
      </div>
    </div>
  );
}

export default App;
