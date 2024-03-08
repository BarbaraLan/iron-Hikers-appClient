import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import '../style/UserPage.css';


function UserPage() {


    const [user, setUser] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        likes: '',
        hobbies: '',
        addinfo: '',
        img: ''
    });

    const [displayData, setDisplayData] = useState({
        name: '',
        age: '',
        likes: '',
        hobbies: '',
        addinfo: '',
        img: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFieldSubmit = (field) => {
        setDisplayData({ ...displayData, [field]: formData[field] });
    };

    const getUserinfo = () => {
        axios
            .get('http://localhost:5005/user') // not sure of correct endpoint
            .then((response) => getUser(response.data))
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        getUserinfo();
    }, []);

    return (

        ///user/update - PUT/PATCH route to edit currently logged in user info ?

        <div className="yourinfodiv">
            <h2>Your Info.</h2>
            <div>
                <label>Username: </label>
                <p>{user.name}</p>
                <label>Email: </label>
                <p>{user.email}</p>
                <label>Password: </label>
                <p>{user.password}</p>

                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <button type="button" onClick={() => handleFieldSubmit('name')}>Set</button>
                </label>
                {displayData.name && <div>{displayData.name}</div>}
            </div>
            <div>
                <label>
                    Age:
                    <input
                        type="number" 
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                    <button type="button" onClick={() => handleFieldSubmit('age')}>Set</button>
                </label>
                {displayData.age && <div>{displayData.age}</div>}
            </div>
            <div>
                <label>
                    Likes:
                    <input
                        type="text"
                        name="likes"
                        value={formData.likes}
                        onChange={handleChange}
                    />
                    <button type="button" onClick={() => handleFieldSubmit('likes')}>Set</button>
                </label>
                {displayData.likes && <div>{displayData.likes}</div>}
            </div>
            <div>
                <label>
                    Hobbies:
                    <textarea
                        name="hobbies"
                        value={formData.hobbies}
                        onChange={handleChange} />
                    <button type="button" onClick={() => handleFieldSubmit('hobbies')}>Set</button>
                </label>
                {displayData.hobbies && <div>{displayData.hobbies}</div>}
            </div>

            <div>
                <label>
                    Additional Info.
                    <textarea
                        name="addinfo"
                        value={formData.addinfo}
                        onChange={handleChange} />
                    <button type="button" onClick={() => handleFieldSubmit('addinfo')}>Set</button>
                </label>
                {displayData.addinfo && <div>{displayData.addinfo}</div>}
            </div>
            <div>
                <label>
                    Upload Image:
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                    />
                </label>
                
                
            </div>
        </div>
    );
}

export default UserPage;
