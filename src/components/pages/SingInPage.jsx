import React from 'react';
import axios from 'axios';

export default function SignInPage() {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (!data.email || !data.password) return null;
    axios
      .post('/api/auth/signin', data)
      .then((res) => {
        window.location = '/';
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <div className="mb-3">
        <label htmlFor="exampleFormControl" className="form-label">
          Email
        </label>
        <input
          name="email"
          className="form-control"
          id="exampleFormControl"
          placeholder="введите email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControl" className="form-label">
          Пароль
        </label>
        <input
          name="password"
          className="form-control"
          id="exampleFormControl"
          placeholder="введите пароль"
        />
      </div>
      <button type="submit" className="btn btn-outline-primary">
        войти
      </button>
    </form>
  );
}
