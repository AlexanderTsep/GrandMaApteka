import React from 'react';
import OneCard from '../ui/OneCard';
import Calendar from '../ui/myCalendar';

export default function HomePage({ cards }) {
  // console.log(cards[0].name);
  return (
    <div className="row">

        <Calendar />
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <OneCard cards={card} />
          </div>
        ))}
      </div>

  );
}
