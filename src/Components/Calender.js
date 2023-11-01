import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import './calender.css'

const Calender = () => {
  return (
    <>
    <div className="py-2 text-2xl font-semibold"><h1>Calander</h1></div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar  />
      </LocalizationProvider>
    </>
  );
};

export default Calender



// import React, { useState } from "react";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import { makeStyles } from "@mui/styles";
// import Popover from "@mui/material/Popover";
// import Typography from "@mui/material/Typography";

// const useStyles = makeStyles((theme) => ({
//   eventMarker: {
//     background: "gray",
//     borderRadius: "50%",
//     width: "6px",
//     height: "6px",
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//   },
// }));

// const Calender = (props) => {
//   const events = props.data
//   const classes = useStyles();
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleDateClick = (date) => (event) => {
//     setSelectedDate(date);
//     setAnchorEl(event.currentTarget);
//   };

//   const handlePopoverClose = () => {
//     setSelectedDate(null);
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);

//   return (
//     <>
//       <div className="py-2 text-2xl font-semibold">
//         <h1>Calendar</h1>
//       </div>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DateCalendar/>
//         {events.map((event, index) => (
//           <div
//             key={index}
//             className={classes.eventMarker}
//             style={{ left: event.left, top: event.top }}
//             onClick={handleDateClick(event.date)}
//           />
//         ))}
//         <Popover
//           open={open}
//           anchorEl={anchorEl}
//           onClose={handlePopoverClose}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "left",
//           }}
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "left",
//           }}
//         >
//           <Typography variant="h6" component="div">
//             Event on {selectedDate ? selectedDate.format("DD-MM-YYYY") : ""}
//           </Typography>
//         </Popover>
//       </LocalizationProvider>
//     </>
//   );
// };

// export default Calender;
