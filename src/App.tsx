import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPage from './AddPage';
import AdFilterFeed from './AdFilterFeed';
import MainFeed from './Feed/Feed';
import Footer from './Footer';
import Header from './Header';
import './index.css';
import LandingPage from './LandingPage';
import MyPage from './MyPage/MyPage';
import SignIn from './signInAndSignUp/SignIn';
import SignUp from './signInAndSignUp/SignUp';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/my-page" element={<MyPage />} />
              <Route path="/add" element={<AddPage />} />
            <Route path="/filter" element={<AdFilterFeed />} />
            <Route path="/feed" element={<MainFeed />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </React.StrictMode>
    </ThemeProvider>
    main
  );
}

export default App;
