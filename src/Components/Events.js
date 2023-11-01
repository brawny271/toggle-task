import React, { useState } from "react";
import data from "../data";

const Events = (props) => {

  const deta = props.data;
  console.log(deta)

  const [event, setEvents] = useState(deta);
  console.log(event);

  return (
    <>
      <div className="h-100% w-100% flex justify-center items-center flex-col">
        <div className="py-2 text-2xl font-semibold flex w-[100%] h-[10%] justify-start items-center mb-4">
          <h1>Events</h1>
        </div>
        <div className="w-[100%] h-[90%] ">
          {event.map((item) => {
            return (
              <div className="w-[100%] h-[15%] py-1 px-2 border" key={item.id}>
                <h1 className="text-lg font-medium">{item.title}</h1>
                <p>{item.upcoming_date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Events;
