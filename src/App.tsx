import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdFilterFeed from './AdFilterFeed';
import AdPage from './AdPage';
import AdProvider from './Context/AdContextProvider';
import UserProvider from './Context/UserContextProvider';
import MainFeed from './Feed/Feed';
import './index.css';
import Layout from './Layout';
import MyAd from './MyAd';
import MyPage from './MyPage/MyPage';
import NewAdPage from './NewAdPage';
import Profile from './Profile';
import SignIn from './signInAndSignUp/SignIn';
import SignUp from './signInAndSignUp/SignUp';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <BrowserRouter>
          <AdProvider>
            <UserProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<MainFeed />} />
                  <Route path="/sign-in" element={<SignIn />} />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/my-page" element={<MyPage />} />
                  <Route path="/ad" element={<AdPage />} />
                  <Route path="/my-ad" element={<MyAd />} />
                  <Route path="/profile" element={<Profile />} />

                  <Route path="/filter" element={<AdFilterFeed />} />
                  <Route path="/feed" element={<MainFeed />} />
                  <Route path="/new-ad" element={<NewAdPage />} />
                </Route>
              </Routes>
            </UserProvider>
          </AdProvider>
        </BrowserRouter>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
