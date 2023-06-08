import axios from 'axios';
import React, { useState } from 'react';

export default function UpdateForm({ oneUserData, setOneUserData }) {
  const [updateData, setUpdateData] = useState({
    userName: oneUserData.userName,
    secondName: oneUserData.secondName,
    sex: oneUserData.sex,
  });

  const changeUpHandler = (event) => {
    setUpdateData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const updateHandler = async (event) => {
    event.preventDefault();
    const responce = await axios.patch(`/api/user/${oneUserData.id}`, updateData);
    setOneUserData((prev) => prev.map((el) => (el.id === oneUserData.id ? responce.data : el)));
    setUpdateData({
      userName: oneUserData.userName,
      secondName: oneUserData.secondName,
      sex: oneUserData.sex,
    });
  };
  return (
    <form onSubmit={updateHandler}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Имя
        </span>
        <input
          name="userName"
          value={updateData.userName}
          onChange={changeUpHandler}
          type="text"
          className="form-control"
          placeholder="Car name"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="mb-3">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon3">
            Фамилия
          </span>
          <input
            name="secondName"
            value={updateData.secondName}
            onChange={changeUpHandler}
            type="text"
            className="form-control"
            id="basic-url"
            placeholder="URL"
            aria-describedby="basic-addon3 basic-addon4"
          />
        </div>
      </div>

      <div className="input-group">
        <span className="input-group-text">Пол</span>
        <input
          name="sex"
          value={updateData.sex}
          onChange={changeUpHandler}
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3 basic-addon4"
        />
      </div>
      <br />
      <br />
      <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">
        Обновить
      </button>
    </form>
  );
}
