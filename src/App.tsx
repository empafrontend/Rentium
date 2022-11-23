import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import LandingPage from './LandingPage';
import NewAdPage from './NewAdPage';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/NewAdPage" element={<LandingPage />} />
          <Route path="/" element={<NewAdPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
