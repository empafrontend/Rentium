import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdFilterFeed from './AdFilterFeed';
import MainFeed from './Feed/Feed';
import './index.css';
import LandingPage from './LandingPage';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/filter" element={<AdFilterFeed />} />
          <Route path="/feed" element={<MainFeed />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
