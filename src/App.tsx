import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPage from './AddPage';
import AdFilterFeed from './AdFilterFeed';
import MainFeed from './Feed/Feed';
import './index.css';
import LandingPage from './LandingPage';
import SignIn from './signInAndSignUp/SignIn';
import SignUp from './signInAndSignUp/SignUp';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/filter" element={<AdFilterFeed />} />
          <Route path="/feed" element={<MainFeed />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
