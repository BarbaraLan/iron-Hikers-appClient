import '../style/Routes.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import RoutesListCard from '../components/RoutesListCard';
import { Link } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL

function Routes() {

    const [existingRoutes, setExistingRoutes] = useState([]); // Routes database array
    const [routeSearchResults, setRouteSearchResults] = useState([]); // Search results arrayconst [name, setName] = useState("");
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [length, setLength] = useState("");
    const [duration, setDuration] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [map, setMap] = useState("");
    const [image, setImage] = useState("");
    const [routeComments, setRouteComments] = useState("");
    const [ratings, setRatings] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const getAllRoutes = () => {
        axios
            .get(`${API_URL}/api/routes`)
            .then((response) => {
                setExistingRoutes(response.data);
            })
            .catch((error) => error)
    };

    useEffect(() => {
        getAllRoutes()
    }, [])


    const postNewRoute = () => {

        axios
            .post(`${API_URL}/api/routes/create`, {
                name, city, length, duration, intensity, type, description, map, image, routeComments, ratings
            })
            .then((response) => {
                getAllRoutes();
            })
            .catch((error) => {
                error
            });
    };

    return (
        <div className='routes-box'> 
            <h2> Explore the routes</h2>
                <Link className='create-route' to= '/routes/create'> Create New Route </Link>
            <div className="routes-container">
                {existingRoutes? existingRoutes.map((route) => {
                    return (
                        <Link key={route._id} to={`/routes/${route._id}`}>
                        <RoutesListCard
                            route={route}
                        />
                        </Link>
                    );
                })
                : 'No Routes available'
                }
            </div>
            </div>
    )
}
export default Routes;