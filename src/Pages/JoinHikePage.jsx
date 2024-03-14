import { useState } from "react";
import "../style/JoinHikePage.css";
import Calendar from '../components/Calendar';
import UpcomingHikes from '../components/UpcomingHikes';

function JoinHikePage() {

    const [today, setToday] = useState(new Date());
    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());
    const [yearAndMonth, setYearAndMonth] = useState(
        `${year}-${String(month + 1).padStart(2, "0")}`
      );

    const formatDate = (day) => {
        return `${year}-${String(month + 1).padStart(2, "0")}-${String(
          day
        ).padStart(2, "0")}`;
      };

    return(
        <div id="container-dashboard">
            <Calendar today={today} setToday={setToday} month={month} setMonth={setMonth} year={year} setYear={setYear} formatDate={formatDate}/>
            <UpcomingHikes today={today} month={month} year={year} formatDate={formatDate}/>
        </div>
    )
}

export default JoinHikePage;