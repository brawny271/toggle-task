import React from "react";

const Events = ({ events, hoveredDate }) => {
  const dayEvents = events.filter((event) => event.date === hoveredDate);

  if (dayEvents.length === 0) {
    return null;
  }

  return (
    <div className="event-popup bg-white p-2 shadow-md">
      {dayEvents.map((event, index) => (
        <div key={index}>{event.title}</div>
      ))}
    </div>
  );
};

export default Events;

