import { useState } from "react";
import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import LinearWithValueLabel from "./components/Progressbar";
import QuestionButton from "./components/Button";
import Fragebogen from "./components/Fragebogen";
import ExampleChart from "./components/Chart";



function App() {
  const [progress, setProgress] = useState(1);
  const [toggleFragen, setToggleFragen] = useState(false);
  const [count, setCount] = useState(1);
  const [inputFields, setInputFields] = useState([
    { antwort: "", sternwert: 0 },
  ]);

  return (
    <div className="App">
      <ResponsiveAppBar />
      {toggleFragen ? (
        <div style={{width: "90%", height: "90%", margin: "auto", marginTop: "50px"}}>
            <ExampleChart />
        </div>
      ) : (
        <div>
          <LinearWithValueLabel value={progress > 100 ? 100 : progress} />
          <Fragebogen
            count={count - 1}
            getResults={(result) => {
              setInputFields(result);
            }}
            results={inputFields}
          />
          <QuestionButton
            changeProgress={(progress_button) => {
              setProgress(progress_button);
            }}
            changeCount={(fragen_counter) => {
              setCount(fragen_counter);
            }}
            neuer_counter={count}
            reviews={inputFields}
            toggleHomescreen={(res) => {
              setToggleFragen(res);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
