import React, { useState } from 'react';
import OneCard from '../ui/OneCard';
import Calendar from '../ui/myCalendar';

export default function HomePage({ cards, user }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedAvailability, setSelectedCAvailability] = useState();

  const cardsPerPage = 6;
  const totalCards = cards.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  let filteredCards = cards;
  if (selectedCategory) {
    filteredCards = cards.filter((card) => card.catId === selectedCategory);
  }

  if (selectedAvailability) {
    filteredCards = cards.filter((card) => card.availability === selectedAvailability);
  }

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, filteredCards.length);

  const cardsToDisplay = filteredCards.slice(startIndex, endIndex);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategorySelect = (id) => {
    setSelectedCategory(id);
  };

  // const handleAvailabilitySelect = () => {
  //   setSelectedCAvailability();
  // };

  return (
    <>
      {/* <div className="dropdown">
        <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        >
        Наличие
        </button>
        <ul className="dropdown-menu">
        <li>
        <button className="dropdown-item" onClick={() => handleAvailabilitySelect(true)}>
        Есть в наличии
        </button>
        </li>
        <li>
        <button className="dropdown-item" onClick={() => handleAvailabilitySelect(false)}>
        Нет в наличии
        </button>
        </li>
        </ul>
      </div> */}
      <div>
        <Calendar />
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
              <button className="dropdown-item" onClick={() => handleCategorySelect(null)}>
                Все
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => handleCategorySelect(1)}>
                Антибиотики
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => handleCategorySelect(2)}>
                Противокашлевые средства
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => handleCategorySelect(3)}>
                Витамины
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => handleCategorySelect(4)}>
                Антидепрессанты
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => handleCategorySelect(5)}>
                Гормоны
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => handleCategorySelect(6)}>
                Диуретики
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => handleCategorySelect(7)}>
                Слабительное
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => handleCategorySelect(8)}>
                Суспензия
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => handleCategorySelect(9)}>
                Капли
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                href="/categories/"
                onClick={() => handleCategorySelect(10)}
              >
                Контрацептивы
              </button>
            </li>
          </ul>
        </div>
        <div className="row">
          {cardsToDisplay.map((card) => (
            <div className="col-md-4" key={card.id}>
              <OneCard cards={card} user={user} />
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
