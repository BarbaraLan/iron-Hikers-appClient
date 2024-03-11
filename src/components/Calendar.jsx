import "../style/Calendar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Calendar() {
  const [today, setToday] = useState(new Date());
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [monthDays, setMonthDays] = useState(
    new Date(year, month+1, 0).getDate()
  );
  const [firstDay, setFirstDay] = useState(new Date(year, month, 0).getDay());

  const [dayHikesArray, setDayHikesArray] = useState([]);
  const blanksArray = [];

  for (let i = 0; i <= firstDay; i++) {
    blanksArray.push("");
  }

  const changeMonth = (action) => {
    let newMonth = action === "minus" ? month - 1 : month + 1;
    setMonth(newMonth);
    setToday(new Date(year, newMonth));
    setMonthDays(new Date(year, newMonth + 1, 0).getDate());
    setFirstDay(new Date(year, newMonth, 0).getDay());
  };

  let days = [];
  for (let i = 0; i < monthDays; i++) {
    days.push(i + 1);
  }

  const formatDate = (day) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
  };

  const checkHikeData = (day) => {
    const dayHikes = dayHikesArray.find((element) => (element.date = day));
    if (dayHikes) {
      if (dayHikes) {
        // DO STUFF FOR DAYS THAT HAVE HIKES SCHEDULED
      }
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5005/api/days") //* TO-DO: FIND THE RIGHT ENDPOINT
      .then((response) => {
        setDayHikesArray([...response.data]);
        //* TO-DO: get number of hikes for each day in the month
      })
      .catch((error) => error);
  }, []);

  return (
    <>
      {/* CALENDAR HEADER - Prev Month - Month/Year - Next Month */}
      <div id="month-bar">
        <button onClick={() => changeMonth("minus")}>Prev</button>
        <h2>{today.toLocaleString("en-EN", { month: "long" })}</h2>
        <h2>{today.getFullYear()}</h2>
        <button onClick={() => changeMonth("plus")}>Next</button>
      </div>

      {/* CALENDAR HEADER - Weekdays */}
      <div className="calendar">
        <div className="weekday"> Sun </div>
        <div className="weekday"> Mon </div>
        <div className="weekday"> Tue </div>
        <div className="weekday"> Wed </div>
        <div className="weekday"> Thu </div>
        <div className="weekday"> Fri </div>
        <div className="weekday"> Sat </div>

        {/* BLANK DAY CELLS */}
        {blanksArray.map((day, index) => (
          <div key={index} className="blank"></div>
        ))}

        {/* DAY CELLS */}
        {days.map((day) => (
          //* TO-DO: Update this so that only days with hikes scheduled in them have links
          <Link key={day} to={`/day/${formatDate(day)}`}>
          {/* //*TO-DO: Make sure the current day is highlighted */
          }
          <div className={(formatDate((day))===(formatDate(today.getDate()))? "day day-current" : "day")}>
            {day}
          </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Calendar;
