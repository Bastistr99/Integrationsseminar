import "./App.css";
import ResponsiveAppBar from "../components/Navbar";
import Auswahl from "../components/Auswahl";
import DataGridProdukte from "../components/DataGridProdukte";



function Produktbewertungen() {

  return (
    <div className="App">
      <ResponsiveAppBar />

      <Auswahl/>

      <DataGridProdukte />
    </div>
  );
}

export default Produktbewertungen;