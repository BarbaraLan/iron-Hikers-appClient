import React, { useState, useEffect, useContext } from 'react';
import '../style/UserPage.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import axios from 'axios';


const API_URL = "http://localhost:5005/api/user/update";

//axios call to get username, and email 

function UserPage() {

    const { userInfo } = useContext(AuthContext);
    const [data, setData] = useState(false);

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [likes, setLikes] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
    const [showImgInput, setShowImgInput] = useState(false);
    console.log(userInfo);

    const [errorMessage, setErrorMessage] = useState(undefined);
    const [successMessage, setSuccessMessage] = useState(undefined);

    function handleSubmission() {
        const userData = {
            userId: userInfo._id,
            age: age,
            hobbies: hobbies,
            likes: likes,
            description: description,
            img: ""
        };
        console.log(userData);

        axios
            .put(`${API_URL}`, userData)
            .then((response) => {
                response.data
                console.log(response.data)
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

    function toggleGetData() {
        const userInfo = JSON.parse(localStorage.getItem("userInfo") || '{}');
        if (userInfo) {
            setAge(userInfo.Age || "");
            setHobbies(userInfo.Hobbies || "");
            setLikes(userInfo.Likes || "");
            setDescription(userInfo.Description || "");
            setImg(userInfo.Img || "");
            setData(true);
        }
    }


    useEffect(() => {
        toggleGetData();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImg(reader.result);
            };
            reader.readAsDataURL(file);
        }



        const handleLogout = () => {


            const navigate = useNavigate();


            logoutUser();
            navigate('/');

        };
    };

    return (




        <div>

            {data && (
                <div className="data">
                    <div>Name - {name}</div>
                    <div>Age - {age}</div>
                    <div>Hobbies - {hobbies}</div>
                    <div>Likes - {likes}</div>
                    <div>Additional Info. - {description}</div>
                    {img && <div> <img src={img} alt="User" style={{ maxWidth: '100px', maxHeight: '100px' }} /></div>}
                </div>
            )}



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
            ></textarea>
            <button type="button" onClick={() => setShowImgInput(!showImgInput)}>Select Image</button>

            <button onClick={handleSubmission}>Store my data</button>


            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}



        </div>

    );
}

export default UserPage;


