import '../style/HikeIdPage.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function HikeIdPage(props) {

    const [existingRoute, setExistingRoute] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    
    const hikeId = useParams().hikeId
    const { name, city, length, duration, intensity, type, description, map, routeComments, addedBy,  image, ratings } = existingRoute;

    const hikeIdCall = () => {
        axios
            .get(`http://localhost:5005/api/hikes/${hikeId}`)
            .then((response) => {
                setExistingRoute(response.data);
            })
            .catch((error) => {
                error
            })
    }

    useEffect(() => {
        hikeIdCall();
    }, [])


    return (
        <div>
            <img src={image} alt="" />
            <h6> {name} </h6>
            <p> {city}</p>
            <p> {length}</p>
            <p> {duration}</p>
            <p> {intensity}</p>
            <p> {type}</p>
            <p> {description}</p>
            <p> {map}</p>
            <p> {routeComments}</p>
            <p> {addedBy}</p>
            <p> {ratings}</p>
        </div>
    )
}
export default HikeIdPage;