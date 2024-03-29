import "./weatherCard.css";

const WeatherCard = ({ data }) => {

    console.log(data)
    const { location, current } = data;

    return (
        <div className="weather-card">
            <div className="head">
                <h4 className="city">Beirut, Lebanon</h4>
                <p>Sunny</p>
                <p>Thursday Today</p>
                <img src="images/sun.png" className="weather-status" alt="" />
            </div>
            <div className="details">
                <h4 className="current-temp">17 °C</h4>
                <div className="parameter-row">
                    <span className="parameter-label">Feels like </span>
                    <span className="parameter-value">22°C </span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-value">17°C </span>
                    <span className="parameter-value">22°C</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-value">Sunrise 5:27 AM </span>
                    <span className="parameter-value">Sunset 5:53 PM </span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Wind </span>
                    <span className="parameter-value">5.6 m/h</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Humidity </span>
                    <span className="parameter-value">39%</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Chance of rain </span>
                    <span className="parameter-value">39%</span>
                </div>
            </div>
            
        </div>
    );
}

export default WeatherCard