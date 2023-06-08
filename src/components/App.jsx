import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './ui/Navbar';
import HomePage from './pages/HomePage';
import SingUpPage from './pages/SingUpPage';
import SingInPage from './pages/SingInPage';
import AccountPage from './pages/AccountPage';

export default function App({ userData }) {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage cards={cards} />} />
        <Route path="/auth/signup" element={<SingUpPage />} />
        <Route path="/auth/singin" element={<SingInPage />} />
        <Route path="/account" element={<AccountPage userData={userData} />} />
      </Routes>
    </div>
  );
}
