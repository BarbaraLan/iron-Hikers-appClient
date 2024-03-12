import React, { useState, useContext, useEffect } from 'react';
import '../style/City.css';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';

// npm install countries-list gives you all countries says AI. will put on backlog to try


function CityPage() {

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [countryCities, setCountryCities] = useState([])
    const [showForm, setShowForm] = useState(false)

    const { userInfo } = useContext(AuthContext)
    const userId = userInfo._id

    const countryCitiesMap = {
        'Spain': ['Barcelona', 'Madrid'],
        'France': ['Paris'],
        'Scotland': ['Edimburgh'],
        'Italy': ['Rome']
    }

    const handleCountryChange = (event) => {
        const country = event.target.value
        setSelectedCountry(country);
        setCountryCities(countryCitiesMap[country]);

    }

    const handleCityChange = (event) => {
        const city = event.target.value;
        setSelectedCity(city);
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const userData = {
            userId: userInfo._id,
            city: selectedCity
        };

        axios
            .put(('http://localhost:5005/api/user/update'), userData)
            .then((response) => {
                setShowForm(false)
                /* we should add here a message for the user (SUCCESS) */
            })
            .catch((error) => error)
    }

    useEffect(() => {

        axios
            .get(`http://localhost:5005/api/user/${userId}`)
            .then((response) => {
                if(response.data.city){
                    setShowForm(false)
                    setSelectedCity(response.data.city)
                }else{
                    setShowForm(true)
                }
            })
            .catch((error) => error)
    }, [])


    return (
        <>
            {showForm ? (
                <div className='city-box'>
                    <h2>Select Your City </h2>
                    <div className='select-city-box'>
                        <div className='country'>
                            <label>Country:</label>
                            <select value={selectedCountry} onChange={handleCountryChange}>
                                <option value=""> Select a Country</option>


                                {Object.keys(countryCitiesMap).map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='city'>
                            <label>City:</label>
                            <select value={selectedCity} onChange={handleCityChange}>
                                <option value=""> Select a City</option>

                                {countryCities.map((city) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button className='submit-city' onClick={handleSubmit}> submit city </button>
                    </div>
                </div>
            ) :
            
                (<nav className='city-selected'>
                <p className='city-text'> Your current city is </p>
                   <p> <span className= 'city-btn' onClick={()=>setShowForm(true)}>{selectedCity} 
                   <p className='edit-city'>edit</p>
                    </span>
                    </p>
                    
                    </nav>

                )
            }

        </>
    )


}
export default CityPage;


