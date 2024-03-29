import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HikeListCard from "../components/HikeListCard";
import '../style/DayHikePage.css'

const API_URL = import.meta.env.VITE_API_URL


function DayHikesPage() {
    const { date } = useParams();
    const [dayHikes, setDayHikes] = useState([]);
    const [hikesLoaded, setHikesLoaded] = useState(false);

    useEffect(() => {
        axios
            .get(`${API_URL}/api/day/${date}`)
            .then((response) => {
                setDayHikes(response.data);
                setHikesLoaded(true);
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