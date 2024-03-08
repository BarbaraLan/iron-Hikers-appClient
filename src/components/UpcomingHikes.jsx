import { useState } from "react";
import axios from "axios";

function UpcomingHikes() {
    const [upcomingHikes, setUpcomingHikes] = useState([]);

    const getUpcomingHikes = ()=>{

    }

    return(
       <div id="container-upcoming-hikes">
        <h2>Upcoming Hikes</h2>
       </div> 
    )
}

export default UpcomingHikes;
