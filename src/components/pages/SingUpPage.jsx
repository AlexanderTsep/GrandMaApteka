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
    <form style={{ textAlign: 'center' }} onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="exampleInputUserName1">
          Имя
          <input
            name="userName"
            className="form-control"
            id="exampleInputUserName1"
            placeholder="введите имя"
          />
        </label>
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="exampleInputSecondName1">
          Фамилия
          <input
            name="secondName"
            className="form-control"
            id="exampleInputSecondName1"
            placeholder="введите фамилию"
          />
        </label>
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="exampleInputSex1">
          Пол
          <input
            name="sex"
            className="form-control"
            id="exampleInputSex1"
            placeholder="введите пол"
          />
        </label>
      </div>
      <br />
      <div className="form-group">
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
      <br />
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">
          Пароль
          <input
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="введите пароль"
          />
        </label>
      </div>
      <br />
      <button type="submit" className="btn btn-outline-primary">
        зарегистрироваться
      </button>
    </form>
  );
}
