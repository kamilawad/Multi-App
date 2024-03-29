import "./index.css";
import WeatherCard from "./Components/WeatherCard";
import ForecastCard from "./Components/ForecastCard";

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Weather = () => {

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("beirut");
    
    useEffect(() => {
        fetchWeatherData();
    }, []);

    useEffect(() => {
    }, [weatherData]);

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=fd3fe140d3de4bab809212205242703&q=${city}&days=4`);
            if (response.data) {
                setWeatherData(response.data);
            }
            
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
    };
    return (
        <div className="container flex center">
            {weatherData && <WeatherCard data={weatherData}/>}
            {weatherData && weatherData.forecast.forecastday.map((forecast, index) => (
                index !== 0 && <ForecastCard key={forecast.date} forecast={forecast} location={weatherData.location} />
            ))}
        </div>
    );
}

export default Weather;