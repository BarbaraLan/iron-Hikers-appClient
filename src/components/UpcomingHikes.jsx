import { useState } from "react";
import HikeListCard from "./HikeListCard";
import axios from "axios";
import '../style/UpcomingHikes.css';

function UpcomingHikes() {
    const [upcomingHikes, setUpcomingHikes] = useState([]);

    const getUpcomingHikes = ()=>{

    }

    return(
       <div id="container-upcoming-hikes">
        <h8>Upcoming Hikes</h8>
        <div id='upcoming-hike-list'>
            {/*TO-DO: Conditional rendering of the first X hikes starting from today, or if no hikes have a "no upcoming hikes" message*/ }
        </div>
       </div>
    )
}

export default UpcomingHikes;
