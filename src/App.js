import './App.css';
import { data } from "./data";
import { Heatmap } from "./Heatmap";
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Heatmap data={data} width={400} height={400} />
      </div>
    </div>
  );
}

export default App;
