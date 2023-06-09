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
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="введите email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1">Пароль</label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="введите пароль"
        />
      </div>
      <button type="submit" class="btn btn-outline-primary">
        войти
      </button>
    </form>
  );
}
