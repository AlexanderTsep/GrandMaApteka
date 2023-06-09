import React from 'react';
import axios from 'axios';

export default function SignUpPage() {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    if (!data.userName || !data.secondName || !data.sex || !data.email || !data.password)
      return null;
    axios
      .post('/api/auth/signup', data)
      .then((res) => {
        window.location = '/';
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <div className="mb-3">
        <label htmlFor="exampleFormControl" className="form-label">
          Имя
        </label>
        <input
          name="userName"
          className="form-control"
          id="exampleFormControl"
          placeholder="введите имя"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControl" className="form-label">
          Фамилия
        </label>
        <input
          name="secondName"
          className="form-control"
          id="exampleFormControl"
          placeholder="введите фамилию"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControl" className="form-label">
          Пол
        </label>
        <input
          name="sex"
          className="form-control"
          id="exampleFormControl"
          placeholder="введите пол"
        />
      </div>
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
        зарегистрироваться
      </button>
    </form>
  );
}
