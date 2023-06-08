import React from 'react';

export default function HomePage({ cards }) {
  console.log(cards);
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
      }}
    >
      <img
        src="https://gxpnews.net/wp-content/uploads/2022/11/pravilno-podobrannye-tabletki-ot-povyshennogo-davleniya.jpg"
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
      <div
        style={{
          padding: '0.5rem',
          borderLeft: '1px solid black',
          borderRight: '1px solid black',
          borderBottom: '1px solid black',
          backgroundColor: '#ffffff',
          marginBottom: '0.5rem',
          borderRadius: '10px',
        }}
      >
        <h4
          className="card-title"
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            margin: 0,
            padding: '0.5rem',
            borderRadius: '10px',
          }}
        >
          Доктор МОМ
        </h4>
      </div>
      <div className="card-body" style={{ padding: '0.5rem' }}>
        <div
          style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '1rem',
            marginBottom: '0.5rem',
          }}
        >
          <p className="card-text" style={{ fontSize: '1rem', margin: 0 }}>
            Тут описание лекарства. Оно занимает слишком много места, а может и не слишком, но
            всякое бывает!
          </p>
        </div>
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
              900 руб
            </h6>
            <p style={{ color: '#6c757d', margin: 0, fontSize: '0.75rem' }}>Цена без скидки</p>
          </div>
          <div>
            <h6
              className="card-title"
              style={{ fontSize: '1.5rem', color: '#198754', fontWeight: 'bold', margin: 0 }}
            >
              666.25 руб
            </h6>
            <p style={{ color: '#198754', margin: 0 }}>Цена со скидкой</p>
          </div>
        </div>
        <a
          href="/"
          className="btn btn-primary"
          style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}
        >
          В корзину
        </a>
      </div>
    </div>
  );
}
