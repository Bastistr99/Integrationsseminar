import "./App.css";
import Produktübersicht from "../components/Produktübersicht";
import { useParams } from "react-router-dom";

function Produktseite() {

    const params = useParams();

    return (
    <div className="App">
      <Produktübersicht id={params.id}/>
    </div>
    );
}

export default Produktseite;