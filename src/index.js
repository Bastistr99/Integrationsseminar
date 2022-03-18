import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import Fragebogenseite from './pages/Fragebogenseite';
import Produktvergleich from './pages/produktvergleich';
import Produktbewertungen from './pages/Produktbewertungen';

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

export default function App() {
  return (
    <div>
    <ResponsiveAppBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path="/fragebogen" element={<Fragebogenseite />} />
        <Route path="/produktvergleich" element={<Produktvergleich />} />
        <Route path="/produktbewertungen" element={<Produktbewertungen />} />
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
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
