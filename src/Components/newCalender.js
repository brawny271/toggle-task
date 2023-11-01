import React, { useState } from "react";
import {
  format,
  startOfMonth,
  addMonths,
  subMonths,
  startOfWeek,
  addDays,
} from "date-fns";

const newCalander = ({ events }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [hoveredDate, setHoveredDate] = useState(null);

  const getDaysInMonth = () => {
    const start = startOfWeek(startOfMonth(currentMonth));
    const end = addDays(start, 41);
    const days = [];
    let day = start;
    while (day <= end) {
      days.push(day);
      day = addDays(day, 1);
    }
    return days;
  };

  const handleMouseEnter = (date) => {
    setHoveredDate(date);
  };

  const handleMouseLeave = () => {
    setHoveredDate(null);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth();
    const currentDate = new Date();
    return daysInMonth.map((day, index) => {
      const dayEvents = events.filter(
        (event) =>
          format(new Date(event.date), "yyyy-MM-dd") ===
          format(day, "yyyy-MM-dd")
      );

      const isCurrentDate =
        format(day, "yyyy-MM-dd") === format(currentDate, "yyyy-MM-dd");
      const hasEvents = dayEvents.length > 0;

      return (
        <div
          key={index}
          className={`day ${
            format(day, "MM") !== format(currentMonth, "MM")
              ? "text-gray-400"
              : ""
          } ${isCurrentDate ? "bg-gray-200" : ""} ${
            hasEvents ? "rounded-full bg-gray-400" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(day)}
          onMouseLeave={handleMouseLeave}
        >
          {format(day, "d")}
          {dayEvents.length > 0 &&
            hoveredDate &&
            format(hoveredDate, "yyyy-MM-dd") === format(day, "yyyy-MM-dd") && (
              <div className="event-popup bg-white p-2 shadow-md">
                {dayEvents.map((event, index) => (
                  <div key={index}>{event.title}</div>
                ))}
              </div>
            )}
        </div>
      );
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <div className="calendar-container w-400 h-400 mx-auto mt-10 p-4">
      <h1 className="text-2xl mb-4">{format(currentMonth, "MMMM yyyy")}</h1>
      <div className="calendar bg-white p-4 shadow-md rounded-lg">
        <div className="header flex justify-between items-center">
          <button onClick={handlePrevMonth}>&lt;</button>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>
        <div className="days grid grid-cols-7 gap-2">
          <div className="day">Sun</div>
          <div className="day">Mon</div>
          <div className="day">Tue</div>
          <div className="day">Wed</div>
          <div className="day">Thu</div>
          <div className="day">Fri</div>
          <div className="day">Sat</div>
        </div>
        <div className="dates grid grid-cols-7 gap-2">{renderCalendar()}</div>
      </div>
    </div>
  );
};

export default newCalander;
