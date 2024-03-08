import axios from "axios";
import { useState } from "react";

function DayHikesPage() {
    const [dayHikes, setDayHikes]=useState([]);

    /*
    Do axios call to populate page
    axios
    .get('http://localhost:5005/days/${date}`)
    .then((response)=>{
        setDayHikes(response.data.hikes);
    })
    .catch((error)=>error)
    */

    return(
        <>
            <div>HIKE CARD GOES HERE</div>
            <div>HIKE CARD GOES HERE</div>
            <div>HIKE CARD GOES HERE</div>
            <div>HIKE CARD GOES HERE</div>
        </>
    )
}

export default DayHikesPage;