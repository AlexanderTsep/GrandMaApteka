import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

export default function myCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="app">
      <h1 className="text-center">Календарь событий</h1>
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
          defaultView="month"
          minDate={new Date(2023, 5, 9)}
          nextLabel="месяц>"
          nextAriaLabel="Следующий месяц"
          prevLabel="<месяц"
          prevAriaLabel="Предыдущий месяц"
        />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
}
