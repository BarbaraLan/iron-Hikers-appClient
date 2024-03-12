import { useState, useEffect } from "react";
import HikeListCard from "./HikeListCard";
import axios from "axios";
import '../style/UpcomingHikes.css';

function UpcomingHikes(props) {
    const {today, month, year, formatDate} = props;
    const [upcomingHikes, setUpcomingHikes] = useState([]);

    const yearMonth =`${year}-${String(month + 1).padStart(2, "0")}`;
    const todayDate = formatDate(today.getDate())

    useEffect(() => {
        // console.log(yearMonth, todayDate)
        axios
        .get(`http://localhost:5005/api/hikes/upcoming/${todayDate}`)
        .then((response) => {
            setUpcomingHikes([...response.data]);
            console.log(upcomingHikes);
          })
          .catch((error) => error);
      }, []);

    return(
       <div id="container-upcoming-hikes">
        <h8>Upcoming Hikes</h8>
        <div id='upcoming-hike-list'>
        {upcomingHikes.map((hike) => (
                <HikeListCard key={hike._id} hike={hike}></HikeListCard>
            
        ))}
            {/*TO-DO: Conditional rendering of the first X hikes starting from today, or if no hikes have a "no upcoming hikes" message*/ }
        </div>
       </div>
    )
}

export default UpcomingHikes;
