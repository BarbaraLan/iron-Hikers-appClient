import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HikeListCard from "../components/HikeListCard";



function DayHikesPage() {
    const {date} = useParams();
    const API_URL = 'http://localhost:5005/api'
    const [dayHikes, setDayHikes]=useState([]);
    const [hikesLoaded, setHikesLoaded]=useState(false);
    
    useEffect(() => {
        //Axios call to populate page
        axios
        .get(`${API_URL}/day/${date}`)
        .then((response)=>{
            setDayHikes(response.data);
            setHikesLoaded(true);
            console.log(response.data);
        })
        .catch((error)=>{
            setHikesLoaded(false);
        })
    },[])

    return(
        <>
        <h2>{date}</h2>
        {hikesLoaded && dayHikes.map((hike)=>{
            return(
                <div key={hike._id}>{hike._id}
                </div>
            )
        })}
        <div id='upcoming-hike-list'></div>
            {/* <HikeListCard></HikeListCard> */}
        </>
    )
}

export default DayHikesPage;