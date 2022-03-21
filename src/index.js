import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Startseite';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GesundheitPflege from './components/Produktauswahlseiten/GesundheitPflege';
import WohnenGebaude from './components/Produktauswahlseiten/WohnenGebaude';
import FreitzeitKultur from './components/Produktauswahlseiten/FreizeitKultur';
import VitalitaetFaehigkeiten from './components/Produktauswahlseiten/VitalitaetFaehigkeiten';
import MobilitaetTransport from './components/Produktauswahlseiten/MobilitaetTransport';
import ArbeitSchulung from './components/Produktauswahlseiten/ArbeitSchulung';
import SicherheitSchutz from './components/Produktauswahlseiten/SicherheitSchutz';
import InformationKommunikation from './components/Produktauswahlseiten/InformationKommunikation';
import ResponsiveAppBar from "./components/Navbar";
import FragebogenseiteFragen from './pages/Fragebogenseite_Fragen';
import DataGridProdukte from "./components/DataGridProdukte";
import Produktauswahl from './components/Produktauswahl';
import Produktseite from './pages/Produktseite';



export default function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#437089",
      },
      secondary: {
        main: "#3F4657",

      },
    },
  });


  return (
    <div>
       <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path="/fragebogen" element={<Produktauswahl />} />
            <Route path="/produktvergleich" element={<h1>Diese Seite befindet sich im Aufbau</h1>} />
            <Route path="/produktbewertungen" element={<DataGridProdukte />} />
            <Route path="/produkt/:id" element={<Produktseite />} />
            <Route path='/gesundheitpflege' element={<GesundheitPflege />} />
            <Route path="/wohnengebaude" element={<WohnenGebaude />} />
            <Route path="/FreitzeitKultur" element={<FreitzeitKultur />} />
            <Route path="/VitalitaetFaehigkeiten" element={<VitalitaetFaehigkeiten />} />
            <Route path="/MobilitaetTransport" element={<MobilitaetTransport />} />
            <Route path="/ArbeitSchulung" element={<ArbeitSchulung />} />
            <Route path="/SicherheitSchutz" element={<SicherheitSchutz />} />
            <Route path="/InformationKommunikation" element={<InformationKommunikation />} />
            <Route path="/fragebogenseite/:id" element={<FragebogenseiteFragen />} />
         </Routes>
        </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
