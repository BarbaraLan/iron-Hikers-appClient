import { useState } from "react";
import HikeListCard from "./HikeListCard";
import axios from "axios";

function UpcomingHikes() {
    const [upcomingHikes, setUpcomingHikes] = useState([]);

    const getUpcomingHikes = ()=>{

    }

    return(
       <div id="container-upcoming-hikes">
        <h2>Upcoming Hikes</h2>
        <div id='upcoming-hike-list'>
            {/*TO-DO: Conditional rendering of the first X hikes starting from today, or if no hikes have a "no upcoming hikes" message*/ }
        </div>
       </div>
    )
}

export default UpcomingHikes;
