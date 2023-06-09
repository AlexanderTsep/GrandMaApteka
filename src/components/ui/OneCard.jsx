import axios from 'axios';
import React, { useState } from 'react';

export default function OneCard({ cards }) {
  const medId = cards.id;
  const [disable, setDisable] = useState(false);
  const clickhandler = async (event) => {
    event.preventDefault();
    const response = await axios.post(`/api/trash`, { medId });
    setDisable(true);
  };

  return (
    <div
      className="card"
      style={{
        width: '18rem',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        border: '1px solid black',
        borderRadius: '10px',
        backgroundColor: '#66ffff',
        padding: '0.5rem',
        height: '35rem',
        marginBottom: '1rem',
      }}
    >
      <div
        style={{
          height: '200px',
        }}
      >
        <img
          src={cards.img}
          className="card-img-top"
          alt="..."
          style={{
            height: '12rem',
            objectFit: 'cover',
            borderRadius: '10px',
            borderLeft: '1px solid black',
            borderRight: '1px solid black',
            borderTop: '1px solid black',
          }}
        />
      </div>
      <div
        style={{
          height: '70px',
        }}
      >
        <h4
          className="card-title"
          style={{
            fontSize: '1.1rem',
            fontWeight: 'bold',
            margin: 0,
            padding: '0.5rem',
            borderRadius: '10px',
          }}
        >
          {cards.name}
        </h4>
      </div>
      <div
        style={{
          padding: '0.5rem',
          borderLeft: '1px solid black',
          borderRight: '1px solid black',
          borderBottom: '1px solid black',
          backgroundColor: '#ffffff',
          marginBottom: '0.5rem',
          borderRadius: '10px',
          overflowY: 'scroll',
        }}
      >
        <div
          style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '1rem',
            marginBottom: '0.5rem',
            height: '150px',
          }}
        >
          <p className="card-text" style={{ fontSize: '0.7rem', margin: 0 }}>
            {cards.description}
          </p>
        </div>
      </div>
      <div className="card-body" style={{ padding: '0.5rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
          }}
        >
          <div>
            <h6
              className="card-title"
              style={{
                fontSize: '1rem',
                color: '#6c757d',
                textDecoration: 'line-through',
                margin: 0,
              }}
            >
              {cards.price}.руб
            </h6>
            <p style={{ color: '#6c757d', margin: 0, fontSize: '0.75rem' }}>Цена без скидки</p>
          </div>
          <div>
            <h6
              className="card-title"
              style={{ fontSize: '1.5rem', color: '#198754', fontWeight: 'bold', margin: 0 }}
            >
              {cards.price - cards.price} руб
            </h6>
            <p style={{ color: '#198754', margin: 0 }}>Цена со скидкой</p>
          </div>
        </div>
        <a
          type="button"
          disabled={disable}
          onClick={clickhandler}
          className="btn btn-primary"
          style={{ fontSize: '0.8rem', padding: '0.5rem 1rem', alignItems: 'center' }}
        >
          В корзину
        </a>
      </div>
    </div>
  );
}
