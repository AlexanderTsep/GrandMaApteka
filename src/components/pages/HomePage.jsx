import React from 'react';
import OneCard from '../ui/OneCard';

export default function HomePage({ cards }) {
  // console.log(cards[0].name);
  return (
    <div className="row">
      {cards.map((card) => (
        <div className="col-md-4">
          <OneCard key={card.id} cards={card} />
        </div>
      ))}
    </div>
  );
}
