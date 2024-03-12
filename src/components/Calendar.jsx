import "../style/Calendar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Calendar(props) {
  const {today, setToday, month, setMonth, year, setYear, formatDate} = props;

  const [monthDays, setMonthDays] = useState(
    new Date(year, month + 1, 0).getDate()
  );
  const [firstDay, setFirstDay] = useState(new Date(year, month, 0).getDay());

  const [dayHikesArray, setDayHikesArray] = useState([]);
  const [yearAndMonth, setYearAndMonth] = useState(
    `${year}-${String(month + 1).padStart(2, "0")}`
  );
  const blanksArray = [];

  let dayHasHikes = false;

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

  

  const checkHikeData = (day) => {
    const dayHikes = dayHikesArray.find((element) => element.date === day);
    if (dayHikes) {
      dayHasHikes = true;
      return true;
    } else {
      dayHasHikes = false;
      return false;
    }
  };

  const getDayClasses = (day) => {
    let dayClasses = "day";
    const dayDate = formatDate(day);
    const todayDate = formatDate(today.getDate());

    dayDate === todayDate ? (dayClasses += " day-current") : null;

    checkHikeData(formatDate(day)) ? (dayClasses += " day-has-hikes") : null;
    return dayClasses;
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/day/${yearAndMonth}`)
      .then((response) => {
        setDayHikesArray([...response.data]);
        //console.log(dayHikesArray);
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
          <>
            {checkHikeData(formatDate(day)) ? (
              <Link to={`/day/${formatDate(day)}`}>
                <div key={day} className={getDayClasses(day)}>
                  {day}
                </div>
              </Link>
            ) : (
              <div
                key={day}
                className={
                  formatDate(day) === formatDate(today.getDate())
                    ? "day day-current"
                    : "day"
                }
              >
                <div
                  className={
                    checkHikeData(formatDate(day))
                      ? "day-has-hikes"
                      : "day-no-hikes"
                  }
                >
                  {day}
                </div>
              </div>
            )}
          </>
        ))}
      </div>
      </>
  );
}

export default Calendar;
