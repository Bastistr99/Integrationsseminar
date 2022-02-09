import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import Fragebogenseite from './pages/Fragebogenseite';
import Produktvergleich from './pages/produktvergleich';
import Produktbewertungen from './pages/Produktbewertungen';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fragebogen" element={<Fragebogenseite />} />
        <Route path="/produktvergleich" element={<Produktvergleich />} />
        <Route path="/produktbewertungen" element={<Produktbewertungen />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
