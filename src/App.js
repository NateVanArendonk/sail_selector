import './App.css';
import { data } from "./data";
import { Heatmap } from "./Heatmap";

function App() {
  return (
    <div className="App">
      <h1>Sail Selector</h1>
      <Heatmap data={data} width={700} height={400} />
    </div>
  );
}

export default App;
