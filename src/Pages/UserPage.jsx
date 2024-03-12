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

    const [age, setAge] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [likes, setLikes] = useState("");
    const [description, setDescription] = useState("");
    const [showForm, setShowForm] = useState(false);

    const [errorMessage, setErrorMessage] = useState(undefined);
    const [successMessage, setSuccessMessage] = useState(undefined);


    const navigate = useNavigate();

    function handleSubmission() {
        const userData = {
            userId: userInfo._id,
            age: age,
            hobbies: hobbies,
            likes: likes,
            description: description,
        };
        console.log(userData);

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
                    setAge(response.data.age || "");
                    setHobbies(response.data.hobbies || "");
                    setLikes(response.data.likes || "");
                    setDescription(response.data.description || "");
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



        <div>

            {data && (
                <div className="data">
                    <h2>User Profile</h2>
                    <div>Age: {age}</div>
                    <div>Hobbies: {hobbies}</div>
                    <div>Likes: {likes}</div>
                    <div>Additional Info.: {description}</div>

                </div>
            )}


            <button id="btn" onClick={() => { setShowForm(!showForm) }}>Show Edit Form</button>

            {showForm && (
                <form>


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

                    <button onClick={handleSubmission}>Store my data</button>

                </form>)}


            <button onClick={handleLogout}>Log Out</button>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}

        </div>

    );
}

export default UserPage;


