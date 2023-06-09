import React from 'react';
import axios from 'axios';

export default function SingUpPage() {
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
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="exampleInputUserName1">Имя
        <input
          name="userName"
          className="form-control"
          id="exampleInputUserName1"
          placeholder="введите имя"
        />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputSecondName1">Фамилия</label>
        <input
          name="secondName"
          className="form-control"
          id="exampleInputSecondName1"
          placeholder="введите фамилию"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputSex1">Пол</label>
        <input
          name="sex"
          className="form-control"
          id="exampleInputSex1"
          placeholder="введите пол"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          name="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="введите email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Пароль</label>
        <input
          name="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="введите пароль"
        />
      </div>
      <button type="submit" className="btn btn-outline-primary">
        зарегистрироваться
      </button>
    </form>
  );
}
