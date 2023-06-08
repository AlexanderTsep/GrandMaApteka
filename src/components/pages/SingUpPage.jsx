import React from 'react';
import axios from 'axios';

export default function SignUpPage() {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (!data.userName || !data.sacondName || !data.sex || !data.email || !data.password)
      return null;
    axios
      .post('/auth/signup', data)
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
          Имя
        </label>
        <input
          type="name"
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
          type="secondname"
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
          type="sex"
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
          type="email"
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
          type="password"
          className="form-control"
          id="exampleFormControl"
          placeholder="введите пароль"
        />
      </div>
      <button type="button" class="btn btn-outline-primary">зарегистрироваться</button>
    </form>
  );
}
