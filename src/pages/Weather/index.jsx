import "./index.css";

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Weather = () => {

    useEffect(() => {
        fetchWeatherData();
    }, []);

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get('https://api.weatherapi.com/v1/forecast.json?key=fd3fe140d3de4bab809212205242703&q=beirut&days=4');
            if (response.data) {
                const data = response.data;
                console.log(data);
                const {name, country} = data.location;
                const {is_day, temp_c, feelslike_c} = data.current;
                data.forecast.forecastday.forEach(({ date, day, astro }) => {
                    console.log(date)
                    const  { maxtemp_c, mintemp_c, avghumidity, maxwind_kph, totalprecip_mm, daily_chance_of_rain } = day;
                    const { sunrise, sunset } = astro;
                    console.log( maxtemp_c, mintemp_c, avghumidity, maxwind_kph, totalprecip_mm, daily_chance_of_rain,sunrise, sunset);

                });
            }
            
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
    };
    return (
        <div>
            Weather
        </div>
    );
}

export default Weather;