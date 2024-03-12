import React, { useState, useContext } from 'react';
import '../style/City.css';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';

// npm install countries-list gives you all countries says AI. will put on backlog to try


function CityPage() {

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [countryCities, setCountryCities] = useState([])

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
                setSelectedCity(response.data)
            })
            .catch((error) => error)
    }

    return (
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
    )


}
export default CityPage;


