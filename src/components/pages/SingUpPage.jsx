import React from 'react';
import axios from 'axios';

export default function SingUpPage() {
  const submitHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (!data.userName || !data.secondName || !data.sex || !data.email || !data.password)
      return null;
    axios
      .post('/api/auth/signup', data)
      .then((res) => {
        window.location = '/';
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="exampleInputUserName1">Имя</label>
        <input
          name="userName"
          type="text"
          className="form-control"
          id="exampleInputUserName1"
          placeholder="введите имя"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputSecondName1">Фамилия</label>
        <input
          name="secondName"
          type="text"
          className="form-control"
          id="exampleInputSecondName1"
          placeholder="введите фамилию"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputSex1">Пол</label>
        <input
          name="sex"
          type="text"
          className="form-control"
          id="exampleInputSex1"
          placeholder="введите пол"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="введите email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Пароль</label>
        <input
          type="password"
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
