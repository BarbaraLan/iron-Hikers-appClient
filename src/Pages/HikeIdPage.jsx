import '../style/HikeIdPage.css'
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../context/auth.context";
import { useParams } from 'react-router-dom';

function HikeIdPage(props) {

    const [existingRoute, setExistingRoute] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    
    const hikeId = useParams().hikeId
    const { name, description, route, hikeComments, addedBy,  image} = existingRoute;

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

    const handleJoin = (event)=>{
        event.prevent.default;
        axios
        .put(``)
    }

    useEffect(() => {
        hikeIdCall();
    }, [])


    return (
        <div>
            <img src={image} alt="" />
            <h6> {name} </h6> {/* DONE */}
            <p> description {description}</p> {/* DONE */}
            <p> route {route}</p>
            <p> Created By:{addedBy}</p>
            <p> comments: {hikeComments}</p>
            <button  onClick={handleJoin}>JOIN</button>
        </div>
    )
}
export default HikeIdPage;