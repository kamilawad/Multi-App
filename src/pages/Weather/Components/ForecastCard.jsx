import "./weatherCard.css";

const getDayName = (dateCurr) => {
        const date = new Date(dateCurr);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
}

const ForecastCard = ({ forecast, location }) => {

    const dayName = getDayName(forecast.date);

    return (
        <div className='weather-card night'>
            <div className="head">
                <h4 className="city">{location.name}, {location.country}</h4>
                <p>{forecast.day.condition.text}</p>
                <p>{dayName} {forecast.date}</p>
                <img src="images/sun.png" className="weather-status" alt="" />
            </div>
            <div className="details">
                <h4 className="current-temp">{forecast.day.avgtemp_c} °C</h4>
                <div className="parameter-row">
                    <span className="parameter-value">{forecast.day.maxtemp_c}°C </span>
                    <span className="parameter-value">{forecast.day.mintemp_c}°C</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-value">Sunrise {forecast.astro.sunrise} </span>
                    <span className="parameter-value">Sunset {forecast.astro.sunset}</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Wind </span>
                    <span className="parameter-value"> {forecast.day.maxwind_kph} kph</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Humidity </span>
                    <span className="parameter-value">{forecast.day.avghumidity}%</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Chance of rain </span>
                    <span className="parameter-value">{forecast.day.daily_chance_of_rain}%</span>
                </div>
            </div>
            
        </div>
    );
}

export default ForecastCard;