import '../style/RouteIdPage.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RouteIdPage(props) {

    const [existingRoute, setExistingRoute] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    
    const routId = useParams().routeId
    console.log(routId)
    const { name, city, length, duration, intensity, type, description, map, routeComments, addedBy,  image, ratings } = existingRoute;

    const RouteId = () => {
        axios
            .get(`http://localhost:5005/api/routes/${routId}`)
            .then((response) => {
                setExistingRoute(response.data);
            })
            .catch((error) => {
                error
            })
    }

    useEffect(() => {
        RouteId();
    }, [])


    return (
        <>
            <h6> this is your Hike!! </h6>
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
        </>
    )
}
export default RouteIdPage;