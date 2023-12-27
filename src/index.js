import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { DatenschutzPage } from './components/datenschutz/DatenschutzPage';
import { ImpressumPage } from './components/impressum/ImpressumPage';
import { NotFound } from './components/other/NotFound';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="datenschutz" element={<DatenschutzPage />} />
        <Route path="impressum" element={<ImpressumPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
