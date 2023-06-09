import React from 'react';
import Cart from '../ui/Cart';
import Checkout from '../ui/Checkout';

export default function CartPage({ trashState, setTrashState, message }) {
  return (
    <div className="container">
      <div className="row g-5">
        <Cart trashState={trashState} setTrashState={setTrashState} message={message} />
        <Checkout />
      </div>
    </div>
  );
}
