import { useState } from "react";
import "./App.css";
import ResponsiveAppBar from "../components/Navbar";


function Home() {

  return (
    <div className="App">
      <ResponsiveAppBar />
            
        <h1> Willkommen zu QuantumLeap Senior!</h1>
        
    </div>
  );
}

export default Home;