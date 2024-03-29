import "./weatherCard.css";

const getDayName = (dateCurr) => {
        const date = new Date(dateCurr);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
}

const WeatherCard = ({ data }) => {

    //console.log(data);
    const { location, current, forecast } = data;
    const isDay = current.is_day;
    const dayName = getDayName(current.last_updated);
    const todayForecast = forecast.forecastday[0];

    return (
        <div className={`weather-card ${isDay ? 'day' : 'night'}`}>
            <div className="head">
                <h4 className="city">{location.name}, {location.country}</h4>
                <p>{current.condition.text}</p>
                <p>Today {dayName} {current.last_updated}</p>
                <img src={current.condition.text === 'Sunny' && isDay ? "images/sun.png" : isDay ? "images/cloud.png" : "images/night.png"} className="weather-status" alt="" />
            </div>
            <div className="details">
                <h4 className="current-temp">{current.temp_c} °C</h4>
                <div className="parameter-row">
                    <span className="parameter-label">Feels like </span>
                    <span className="parameter-value">{current.feelslike_c}°C </span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-value">{todayForecast.day.mintemp_c}°C </span>
                    <span className="parameter-value">{todayForecast.day.maxtemp_c}°C</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-value">Sunrise {todayForecast.astro.sunrise} </span>
                    <span className="parameter-value">Sunset {todayForecast.astro.sunset} </span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Wind </span>
                    <span className="parameter-value">{current.wind_kph} kph</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Humidity </span>
                    <span className="parameter-value">{current.humidity}%</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Chance of rain </span>
                    <span className="parameter-value">{todayForecast.day.daily_chance_of_rain}%</span>
                </div>
            </div>
            
        </div>
    );
}

export default WeatherCard;