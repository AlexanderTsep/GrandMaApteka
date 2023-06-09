import React from 'react';
import axios from 'axios';

export default function SingInPage() {
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
        <label htmlFor="exampleInputEmail1">
          Email
          <input
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="введите email"
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1">
          Пароль
          <input
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="введите пароль"
            width="300"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-outline-primary">
        войти
      </button>
    </form>
  );
}
