import '../style/HikeIdPage.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../context/auth.context";
import { useParams } from 'react-router-dom';
import '../style/HikeIdPage.css'

const API_URL = import.meta.env.VITE_API_URL



function HikeIdPage(props) {

    const [existingRoute, setExistingRoute] = useState('');
    const [hikesJoined, setHikesJoined] = useState('');
    const [attendees, setAttendees] = useState('');

    const hikeId = useParams().hikeId
    const { name, description, route, hikeComments, addedBy, image } = existingRoute;
    const {userInfo} = useContext(AuthContext);
    const userId = userInfo._id

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
    };

  
    const hikeIdCall = () => {
        axios
            .get(`${API_URL}/api/hikes/${hikeId}`)
            .then((response) => {
                setExistingRoute(response.data);
                console.log(existingRoute);
            })
            .catch((error) => {
                error
            })
    }


    //   PUT - add user to attendees array (hikes)
    const handleJoin = (event) => {
        navigate('/dashboard');  
        event.preventDefault();
        
        axios
            .put(`${API_URL}/api/hikes/join/${hikeId}`, userId )
            .then((response) => {
                setHikesJoined(response.data);
                
            })
            .catch((error) => {
                console.error(error);
            });


    };

    //  TO-DO post user id to attendees

    const addAttendees = () => {
        axios
            .post(`${API_URL}/api/user/${userInfo._id}`)
            .then((response) => {
                setAttendees(response.data);
            })
            .catch((error) => {
                error
            })
    }
    //   TO-DO post hike ID into users hike joined array

    const joinedHikes = () => {
        axios
            .post(`${API_URL}/api/user/${userInfo._id}`)
            .then((response) => {
                setAttendees(response.data);
            })
            .catch((error) => {
                error
            })
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
                <p> Created By:{addedBy}</p>
                <p> comments: {hikeComments}</p>
                <p> image placeholder:  {description}</p>
            </div>
            <button className='join-btn' onClick={handleJoin}>JOIN</button>
        </div>
    )
}
export default HikeIdPage;