import { useState } from "react";
import "./App.css";
import ResponsiveAppBar from "../components/Navbar";
import LinearWithValueLabel from "../components/Progressbar";
import QuestionButton from "../components/Button";
import Fragebogen from "../components/Fragebogen";
import ExampleChart from "../components/Chart";
import Produktauswahl from "../components/Produktauswahl";

function Fragebogenseite() {
  return (
    <div className="App">
      <Produktauswahl />
    </div>
  );
}

export default Fragebogenseite;
