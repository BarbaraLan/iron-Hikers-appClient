import { useState, useEffect } from "react";
import HikeListCard from "./HikeListCard";
import axios from "axios";
import '../style/UpcomingHikes.css';

const API_URL = import.meta.env.VITE_API_URL

function UpcomingHikes(props) {
    const { today, month, year, formatDate } = props;
    const [upcomingHikes, setUpcomingHikes] = useState([]);

    const yearMonth = `${year}-${String(month + 1).padStart(2, "0")}`;
    const todayDate = formatDate(today.getDate())

    useEffect(() => {
        axios
            .get(`${API_URL}/api/hikes/upcoming/${todayDate}`)
            .then((response) => {
                setUpcomingHikes([...response.data]);
            })
            .catch((error) => error);
    }, []);

    return (
        <div id="container-upcoming-hikes">
            <h2>Upcoming Hikes</h2>
            <div id='upcoming-hike-list'>
                {upcomingHikes.map((hike) => (
                    <HikeListCard key={hike._id} hike={hike}></HikeListCard>

                ))}
                {/*TO-DO: Conditional rendering of the first X hikes starting from today, or if no hikes have a "no upcoming hikes" message*/}
            </div>
        </div>
    )
}

export default UpcomingHikes;
