import React, {useState} from 'react';
import './App.css';
import Events from './Components/Events';
import Calender from './Components/Calender';
import SecondCalander from './Components/SecondCalander'
import EventSelector from './Components/EventSelector'
import { BsList } from 'react-icons/bs';
import {AiOutlineCalendar} from 'react-icons/ai'

function App() {

    

    const event = [
    {
      "id": 1,
      "title": "Event 1",
      "upcoming_date": "2023-11-01"
    },
    {
      "id": 2,
      "title": "Event 2",
      "upcoming_date": "2023-11-03"
    },
    {
      "id": 3,
      "title": "Event 3",
      "upcoming_date": "2023-11-05"
    },
    {
      "id": 4,
      "title": "Event 4",
      "upcoming_date": "2023-11-07"
    }
  ]

  const [showEvent, setShowEvents ] = useState(false);
  const [ data, setData ] = useState(event)
  console.log(data)

  const handleComponent = () => {
    setShowEvents(true);
  }

    const [events, setEvents] = useState([
      { date: "2023-11-05", title: "Event 1" },
      { date: "2023-11-15", title: "Event 2" },
      // Add more events here
    ]);

    const [hoveredDate, setHoveredDate] = useState(null);

    const handleMouseEnter = (date) => {
        setHoveredDate(date);
      };
  

  return (
    <>
      <newCalander events={events} />
      <EventSelector events={events} hoveredDate={hoveredDate} />
      <SecondCalander data={data} />
      <div className="flex items-center justify-center h-[100vh]">
        <div className="w-[500px] h-3/5  outline px-4 py-4 gap-2 rounded">
          <div className="h-full w-full flex justify-between flex-col">
            <div className="h-[100%] w-[100%] flex justify-end items-center">
              <div className="h-[100%] pb-5 w-[100%] relative bottom-2 ">
                {showEvent ? <Calender data={data} /> : <Events data={data} />}
              </div>
              <button
                className=" transition black self-start hover:white hover:bg-blue-400 focus:bg-gray-300 border"
                onClick={handleComponent}
              >
                <AiOutlineCalendar size={30} />
              </button>
              <button
                className=" transition self-start black hover:white hover:bg-blue-400 focus:bg-gray-300 border"
                onClick={() => setShowEvents(false)}
              >
                {" "}
                <BsList size={30} color="black" />
              </button>
            </div>
          </div>
        </div>
        {/* <Events /> */}
        {/* <Calender /> */}

        <div></div>
      </div>
    </>
  );
}

export default App;

