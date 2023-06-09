import React, { useState } from 'react';
import OneCard from '../ui/OneCard';
import Calendar from '../ui/myCalendar';

export default function HomePage({ cards }) {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const totalCards = cards.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, totalCards);

  const cardsToDisplay = cards.slice(startIndex, endIndex);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Категории
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Антибиотики
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Противокашлевые средства
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Витамины
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Антидепрессанты
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Гормоны
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Диуретики
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Слабительное
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Суспензия
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Капли
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/categories/">
              Контрацепция
            </a>
          </li>
        </ul>
      </div>

      <div>
        <div className="row">
          <Calendar />
          {cardsToDisplay.map((card) => (
            <div className="col-md-4" key={card.id}>
              <OneCard cards={card} />
            </div>
          ))}
        </div>

        <div
          className="pagination"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1rem',
            marginBottom: '1rem',
          }}
        >
          <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
            Предыдущая
          </button>

          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => goToPage(pageNumber)}
              disabled={currentPage === pageNumber}
            >
              {pageNumber}
            </button>
          ))}

          <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
            Следующая
          </button>
        </div>
      </div>
    </>
  );
}
