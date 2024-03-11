import React, { useState } from 'react';
import '../style/City.css';

// npm install countries-list gives you all countries says AI. will put on backlog to try


function CityPage() {

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const countryOptions = ['Country 1', 'Country 2', 'Country 3']; // Replace with your country options
    const cityOptions = {
        'Country 1': {
            'Region 1': ['City 1-1-1', 'City 1-1-2', 'City 1-1-3'],
            'Region 2': ['City 1-2-1', 'City 1-2-2', 'City 1-2-3']
        },
        'Country 2': {
            'Region 1': ['City 2-1-1', 'City 2-1-2', 'City 2-1-3'],
            'Region 2': ['City 2-2-1', 'City 2-2-2', 'City 2-2-3']
        },
        'Country 3': {
            'Region 1': ['City 3-1-1', 'City 3-1-2', 'City 3-1-3'],
            'Region 2': ['City 3-2-1', 'City 3-2-2', 'City 3-2-3']
        }
    };


    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setSelectedRegion('');
        setSelectedCity('');
    };

    const handleRegionChange = (event) => {
        setSelectedRegion(event.target.value);
        setSelectedCity('');
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    return (
        <div>
            <h2>Select Your City! </h2>

            <label value="country">Country:</label>
            <select id="country" value={selectedCountry} onChange={handleCountryChange}>
                <option value="">Select a Country</option>
                {countryOptions.map((country, index) => (
                    <option key={index} value={country}>
                        {country}
                    </option>
                ))}
            </select>

            <label value="region">Region:</label>
            <select id="region" value={selectedRegion} onChange={handleRegionChange} disabled={!selectedCountry}>
                <option value="">Select a Region</option>
                {selectedCountry && Object.keys(cityOptions[selectedCountry]).map((region, index) => (
                    <option key={index} value={region}>
                        {region}
                    </option>
                ))}
            </select>

            <label value="city">City:</label>
            <select id="city" value={selectedCity} onChange={handleCityChange} disabled={!selectedRegion}>
                <option value="">Select a City</option>
                {selectedRegion && cityOptions[selectedCountry][selectedRegion].map((city, index) => (
                    <option key={index} value={city}>
                        {city}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CityPage;


