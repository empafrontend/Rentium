import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
