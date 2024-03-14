import '../style/RouteIdPage.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL

function RouteIdPage(props) {

    const [existingRoute, setExistingRoute] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const routId = useParams().routeId
    // console.log(routId)
    const { name, city, length, duration, intensity, type, description, map, routeComments, addedBy, image, ratings } = existingRoute;

    const routeIdCall = () => {
        axios
            .get(`${API_URL}/api/routes/${routId}`)
            .then((response) => {
                setExistingRoute(response.data);
            })
            .catch((error) => {
                error
            })
    }

    useEffect(() => {
        routeIdCall();
    }, [])


    return (
        <div className='route-id-box'>
            <img className='route-id-img' src={image} alt="" />

            <div className='complete-id-info'>
                <div className='title-back'>
                <h3> {name} </h3>
                </div>

                <div className='route-id-info'>
                    <p> {city}</p>
                    <p> {length}</p>
                    <p> {duration}</p>
                    <p> {intensity}</p>
                    <p> {type}</p>
                    <p> {description}</p>
                    <img className='route-id-map' src={map} alt="" />
                    <p> {routeComments}</p>
                    <p> {addedBy}</p>
                    <p> {ratings}</p>
                </div>
            </div>
        </div>
    )
}
export default RouteIdPage;