import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Header } from '../components/Header';
import { UserProfile } from '../pages/UserProfile';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:nickname" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes;
