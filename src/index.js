import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import Fragebogenseite from './pages/Fragebogenseite';
import Produktvergleich from './pages/produktvergleich';
import Produktbewertungen from './pages/Produktbewertungen';
import KChengerTe from './components/Produktauswahlseiten/Küchengeräte';
import ResponsiveAppBar from "./components/Navbar";
import Ofen from "./components/Produktauswahlseiten/Ofen";
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
        <Route path='/kuechengeraete' element={<KChengerTe />} />
        <Route path="/Ofen" element={<Ofen />} />
        <Route path="/fragebogenseite" element={<FragebogenseiteFragen />} />
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
