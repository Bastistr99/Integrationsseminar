import "./App.css";
import { useState } from "react";
import LinearWithValueLabel from "../components/Progressbar";
import QuestionButton from "../components/Button";
import Fragebogen from "../components/Fragebogen";

const FragebogenseiteFragen = () => {
    const [progress, setProgress] = useState(1);
    const [toggleFragen, setToggleFragen] = useState(false);
    const [count, setCount] = useState(1);
    const [inputFields, setInputFields] = useState([
      { antwort: "", sternwert: 0 },
    ]);
    const [antworten, setAntworten] = useState([{
      frage: "", antwort: ""
    },]);

    console.log(antworten)
    
    return (
        <div>
        <LinearWithValueLabel value={progress > 100 ? 100 : progress} />
        <Fragebogen
          count={count - 1}
          setAntworten = {((antwort) => {
            setAntworten(antwort)
          })}
          getResults={(result) => {
            setInputFields(result);
          }}
          results={inputFields}
        />
        <div  style={{alignItems: "center", justifyContent: "center", display: "flex"}}>
        <QuestionButton
          changeProgress={(progress_button) => {
            setProgress(progress_button);
          }}
          changeCount={(fragen_counter) => {
            setCount(fragen_counter);
          }}
          neuer_counter={count}
          reviews={inputFields}
          fragebogen_complete= {antworten}
          toggleHomescreen={(res) => {
            setToggleFragen(res);
          }}
        />
        </div>
      </div>
    );
}

export default FragebogenseiteFragen;
