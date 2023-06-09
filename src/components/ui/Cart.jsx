import axios from 'axios';
import React from 'react';

export default function Cart({ trashState, setTrashState, message }) {
  console.log('--------', trashState);
  const deleteHandler = async (id) => {
    const response = await axios.delete(`/api/trash/${id}`);
    setTrashState((prev) => prev.filter((el) => el.id !== id));
  };
  return (
    <div className="col-md-5 col-lg-4 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">Корзина</span>
        <span className="badge bg-primary rounded-pill">{trashState?.length}</span>
      </h4>
      {message && (
        <div className="alert alert-danger" role="alert">
          {message}
        </div>
      )}
      <ul className="list-group mb-3">
        <>
          {trashState?.map((el) => (
            <li className="list-group-item d-flex justify-content-between lh-sm" key={el.id}>
              <div>
                <h6 className="my-0">• {el.name}</h6>
                <small className="text-body-secondary">{el.description.slice(0, 50) + '...'}</small>
              </div>
              <span className="text-body-secondary">₽{el.price}</span>
              <button className="btn btn-danger btn-sm" onClick={() => deleteHandler(el.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </li>
          ))}
        </>
        <li className="list-group-item d-flex justify-content-between">
          <span>Всего (Руб.)</span>
          <strong>₽{trashState?.reduce((acc, el) => acc + el.price, 0)}</strong>
        </li>
      </ul>

      <form className="card p-2">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Промокод" />
          <button type="submit" className="btn btn-secondary">
            Применить
          </button>
        </div>
      </form>
    </div>
  );
}
