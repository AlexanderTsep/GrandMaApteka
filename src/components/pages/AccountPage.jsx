import React, { useState } from 'react';
import UpdateBtn from '../ui/UpdateBtn';

export default function AccountPage({ userData }) {
  const [oneUserData, setOneUserData] = useState(userData);
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="card w-100 h-100 mb-3">
          <div className="card-body">
            <h5 className="card-title">Персональные данные</h5>
            <br />
            <div className="row">
              <div className="col-md-6">
                <span className="text" id="basic-addon2">
                  Имя:
                </span>
                <h5 className="card-title">{oneUserData.userName}</h5>
              </div>
              <div className="col-md-6">
                <span className="text" id="basic-addon2">
                  Фамилия:
                </span>
                <h5 className="card-title">{oneUserData.secondName}</h5>
              </div>
              <br />
              <br />
              <div className="col-md-6">
                <span className="text" id="basic-addon2">
                  Пол:
                </span>
                <h5 className="card-title">{oneUserData.sex}</h5>
              </div>
              <div className="col-md-6">
                <span className="text" id="basic-addon2">
                  Почта:
                </span>
                <h5 className="card-title">{oneUserData.email}</h5>
              </div>
              <br />
            </div>
            <br />
            <UpdateBtn oneUserData={oneUserData} setOneUserData={setOneUserData} />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card w-100 h-100 mb-3">
          <div className="card-body">
            <h5 className="card-title">История покупок</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
