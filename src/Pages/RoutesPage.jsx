import '../style/Routes.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import RoutesListCard from '../components/RoutesListCard';

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
            .get('http://localhost:5005/api/routes')
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
            .post("http://localhost:5005/api/routes/create", {
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
        <>
            <h3> this is the Routes Page</h3>
            <div id="routes-container">
                {existingRoutes? existingRoutes.map((route) => {
                    return (
                        <RoutesListCard
                            key={route._id}
                            route={route}
                        />
                    );
                })
                : 'Not Routes available'
                }
            </div>
        </>
    )
}
export default Routes;