import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdPage from './AdPage';
import AdProvider from './Context/AdContextProvider';
import NavigationContextProvider from './Context/NavigationContext';
import UserProvider from './Context/UserContextProvider';
import Feed from './Feed/Feed';
import FilterButtons from './FilterButtons';
import './index.css';
import Layout from './Layout';
import MyPage from './MyPage/MyPage';
import NewAdPage from './NewAdPage';
import NotFound from './notFound';
import Profile from './Profile';
import SignIn from './signInAndSignUp/SignIn';
import SignUp from './signInAndSignUp/SignUp';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <BrowserRouter>
          <NavigationContextProvider>
            <AdProvider>
              <UserProvider>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<FilterButtons />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/my-page" element={<MyPage />} />
                    <Route path="/ad/:id" element={<AdPage />} />
                    <Route path="/profile/:id" element={<Profile />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/new-ad" element={<NewAdPage />} />
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </UserProvider>
            </AdProvider>
          </NavigationContextProvider>
        </BrowserRouter>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
