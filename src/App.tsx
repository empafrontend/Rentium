import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdFilterFeed from './AdFilterFeed';
import MainFeed from './Feed/Feed';
import Footer from './Footer';
import Header from './Header';
import './index.css';
import LandingPage from './LandingPage';

function App() {
  return (
    <React.StrictMode>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/filter" element={<AdFilterFeed />} />
          <Route path="/feed" element={<MainFeed />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.StrictMode>
  );
}

export default App;
