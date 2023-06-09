import React from 'react';
import axios from 'axios';

export default function Navbar({ user }) {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const logoutHeandler = async () => {
    const response = await axios('/api/auth/logout');
    if (response.status === 200) {
      window.location = '/';
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid" onSubmit={(e) => submitHandler(e)}>
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/logotip.png" alt="Bootstrap" width="180" height="100"></img>
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {user && (
              <>
                <a className="nav-link" href="/account">
                  Личный кабинет
                </a>
                <a className="nav-link" href="#" onClick={logoutHeandler}>
                  Выход
                </a>
                <a className="nav-link" href="/cart">
                  Корзина
                </a>
              </>
            )}
            {!user && (
              <>
                <a className="nav-link" href="/auth/signup">
                  Регистрация
                </a>
                <a className="nav-link" href="/auth/signin">
                  Вход
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
