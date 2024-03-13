import React, { useState, useEffect, useContext } from 'react';
import '../style/UserPage.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import axios from 'axios';


const API_URL = "http://localhost:5005/api/user/update";

//axios call to get username, and email on backlog

function UserPage() {

    const { userInfo, logoutUser } = useContext(AuthContext);
    const [data, setData] = useState(false);

    const [userId, setUserId] = useState("");
    const [email, setEmail] = useState("");
    const [selectedCity, setSelectedCity] = useState(""); 


    const [age, setAge] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [likes, setLikes] = useState("");
    const [description, setDescription] = useState("");
    const [showForm, setShowForm] = useState(false);

    const [errorMessage, setErrorMessage] = useState(undefined);
    const [successMessage, setSuccessMessage] = useState(undefined);


    const navigate = useNavigate();

    function handleSubmission(event) {
        event.preventDefault()
        const userData = {
            userId: userInfo._id,
            email: email,
            age: age,
            hobbies: hobbies,
            likes: likes,
            description: description,
        };
        // console.log(userData);

        axios
            .put(`${API_URL}`, userData)
            .then((response) => {
                response.data

                const successDescription = "Your data has been saved!"
                setSuccessMessage(successDescription);
                setErrorMessage(undefined);
            })
            .catch((error) => {
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
                setSuccessMessage(undefined);
            });
    }

    function getUserData() {
        console.log(`This is the ${userInfo}`);
        
        
        if (userInfo) {
            axios
                .get(`http://localhost:5005/api/user/${userInfo._id}`)
                .then((response) => {
                    setUserId(response.data.userId || "");
                    setEmail(response.data.email || "");
                    setAge(response.data.age || "");
                    setHobbies(response.data.hobbies || "");
                    setLikes(response.data.likes || "");
                    setDescription(response.data.description || "");
                    setSelectedCity(response.data.selectedCity || "");
                    setData(true);
                })
                .catch((error) => error)
        }
    }


    useEffect(() => {
        getUserData();
    }, [userInfo]);

    const handleLogout = () => {
        logoutUser();
        navigate('/');
    };


    return (
        <div className='user-page-general'>
            {data && (
                <div className="data">
                    <h2>User Profile</h2>
                    <p>Username: {userInfo._id}</p>
                    <p>Email: {email}</p>
                    <p>Age: {age}</p>
                    <p>Hobbies: {hobbies}</p>
                    <p>Likes: {likes}</p>
                    <p>Additional Info.: {description}</p>
                    <p>Selected City: {selectedCity}</p>
                </div>
            )}


            <button className="btn" onClick={() => { setShowForm(!showForm) }}>Show Edit Form</button>

            {showForm && (
                <form className="form">


                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        name="age"
                        placeholder="Enter your age"
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                    />
                    <label htmlFor="hobbies">Hobbies</label>
                    <input
                        type="text"
                        name="hobbies"
                        placeholder="Type your hobbies"
                        onChange={(e) => setHobbies(e.target.value)}
                        value={hobbies}
                    />
                    <label htmlFor="likes">Likes</label>
                    <input
                        type="text"
                        name="likes"
                        placeholder="Type your likes"
                        onChange={(e) => setLikes(e.target.value)}
                        value={likes}
                    />
                    <label htmlFor="description">Additional Info.</label>
                    <textarea
                        name="description"
                        placeholder="Describe yourself"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    >
                    </textarea>

                    <button className= 'storeData' onClick={handleSubmission}>Store my data</button>

                </form>)}


            <button className= 'log-out' onClick={handleLogout}>Log Out</button>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}

        </div>

    );
}

export default UserPage;


