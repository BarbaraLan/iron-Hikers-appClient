import '../style/HikeIdPage.css'
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../context/auth.context";
import { useParams } from 'react-router-dom';
import '../style/HikeIdPage.css'

function HikeIdPage(props) {

    const [existingRoute, setExistingRoute] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const hikeId = useParams().hikeId
    const { name, description, route, hikeComments, createdBy, image } = existingRoute;

    const hikeIdCall = () => {
        axios
            .get(`http://localhost:5005/api/hikes/${hikeId}`)
            .then((response) => {
                setExistingRoute(response.data);
                console.log(existingRoute);
            })
            .catch((error) => {
                error
            })
    }

    const handleJoin = (event) => {
        event.prevent.default;
        axios
            .put(``)
    }

    useEffect(() => {
        hikeIdCall();
    }, [])


    return (
        <div className='hike-box'>
            <div className='hikeImg'>
                <img src={image} alt="" />
            </div>
            <h3> {name} </h3>
            <div className='hikeInfoId'>
                <p> description:  {description}</p>
                <p> route {route}</p>
                <p> Created By:{createdBy}</p>
                <p> comments: {hikeComments}</p>
            </div>
            <button className='join-btn' onClick={handleJoin}>JOIN</button>
        </div>
    )
}
export default HikeIdPage;