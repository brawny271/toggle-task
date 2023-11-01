import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "../Components/ExportedCalander";
import cn from "./cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Calendar(props) {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  const events = props.data;
  const [HoveredEvent, setHoveredEvent] = useState(null);

  const handleDataHover = (currentDate) => {
    const event = events.find(
      (event) => event.date === currentDate.format("YYYY-MM-DD")
    );
    if (event) {
      setHoveredEvent(event);
    } else {
      setHoveredEvent(null);
    }
  };

  return (
    <div className="flex gap-10 sm:divide-x justify-center sm:w-1/2 mx-auto h-screen items-center sm:flex-row flex-col">
      <div className="w-96 h-96">
        <div className="flex justify-between items-center">
          <h1 className="select-none font-semibold">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex gap-10 items-center">
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className="cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              <br></br>
            </h1>
            <GrFormNext
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-7">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
              >
                {day}
              </h1>
            );
          })}
        </div>
        <div className="grid grid-cols-7">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              const isEventDate = events.some(
                (event) => event.date === date.format("YYYY-MM-DD")
              );
              return (
                <div
                  key={index}
                  className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                >
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-red-600 text-white" : "",
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-gray-300 text-black"
                        : "",
                      isEventDate ? "bg-gray-300" : "", // Add this line for event dates
                      "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                    )}
                    onClick={() => {
                      setSelectDate(date);
                      handleDataHover(date);
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="h-96 w-96 sm:px-5">
        <h1 className="font-semibold">
          Events on {selectDate.toDate().toDateString()}
        </h1>
        {HoveredEvent && (
          <div className="popup">
            <h3>{HoveredEvent.title}</h3>
            <p>Event is on {HoveredEvent.date}</p>
          </div>
        )}
        <p className="text-gray-400">No Events.</p>
      </div>
    </div>
  );
}
