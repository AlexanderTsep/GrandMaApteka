import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          LOGO
        </a>
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
            <a className="nav-link" href="/auth/signup">
              SignUp
            </a>
            <a className="nav-link" href="/auth/signin">
              SignIn
            </a>
            <a className="nav-link" href="/account">
              My account
            </a>
            <a className="nav-link" href="/cart">
              Корзина
            </a>
            <a className="nav-link" href="/">
              LogOut
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
