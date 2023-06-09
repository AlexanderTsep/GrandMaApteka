import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './ui/Navbar';
import HomePage from './pages/HomePage';
import SingUpPage from './pages/SingUpPage';
import SingInPage from './pages/SingInPage';
import AccountPage from './pages/AccountPage';
import CartPage from './pages/CartPage';

export default function App({ user, userData, cards, trashData }) {
  const [trashState, setTrashState] = useState(trashData);
  return (
    <div className="container">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<HomePage cards={cards} />} />
        <Route path="/auth/signup" element={<SingUpPage />} />
        <Route path="/auth/signin" element={<SingInPage />} />
        <Route path="/account" element={<AccountPage userData={userData} />} />
        <Route path="/cart" element={<CartPage trashState={trashState} setTrashState={setTrashState} />} />
      </Routes>
    </div>
  );
}
