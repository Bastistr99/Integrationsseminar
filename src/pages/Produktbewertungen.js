import "./App.css";
import ResponsiveAppBar from "../components/Navbar";
import Auswahl from "../components/Auswahl";


function Produktbewertungen() {

  return (
    <div className="App">
      <ResponsiveAppBar />

      <Auswahl/>
    </div>
  );
}

export default Produktbewertungen;