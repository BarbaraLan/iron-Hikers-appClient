import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HikeListCard from "../components/HikeListCard";
import '../style/DayHikePage.css'



function DayHikesPage() {
    const { date } = useParams();
    const API_URL = 'http://localhost:5005/api'
    const [dayHikes, setDayHikes] = useState([]);
    const [hikesLoaded, setHikesLoaded] = useState(false);

    useEffect(() => {
        //Axios call to populate page
        axios
            .get(`${API_URL}/day/${date}`)
            .then((response) => {
                setDayHikes(response.data);
                setHikesLoaded(true);
                // console.log(response.data);
            })
            .catch((error) => {
                setHikesLoaded(false);
            })
    }, [])

    return (
        <div className="hikes-background ">
            <h2>{date}</h2>
            {hikesLoaded && dayHikes.map((hike) => {
                return (
                    <HikeListCard key={hike._id} hike={hike}></HikeListCard>
                    // <div key={hike._id}>{hike._id}
                    // </div>
                )
            })}
            <div className='upcoming-hike-list'></div>
            {/* <HikeListCard></HikeListCard> */}
        </div>
    )
}

export default DayHikesPage;