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

            <div className='complete-id-title-img'>
                <div className='title-back'>
                    <h3> {name} </h3>
                </div>
                <img className='route-id-img' src={image} alt="" />
            </div>

            <div className='complete-id-info-form'>
                <img className='route-id-map' src={map} alt="" />
                <div className='route-id-info'>
                    <p> <span className='titles-descript'> city:</span>{city}</p>
                    <p> <span className='titles-descript'> length: </span>{length}km </p>
                    <p> <span className='titles-descript'> duration: </span>{duration}</p>
                    <p> <span className='titles-descript'> intensity: </span>{intensity}</p>
                    <p> <span className='titles-descript'> type: </span>{type}</p>
                    <p><span className='titles-descript'> description:</span>
                    <br /> {description}</p>
                    <p> <span className='titles-descript'> comments:</span> {routeComments}</p>
                    <p> <span className='titles-descript'> added by: </span>{addedBy}</p>
                    <p> <span className='titles-descript'> ratings: </span>{ratings}</p>
                </div>
            </div>

        </div>
    )
}
export default RouteIdPage;