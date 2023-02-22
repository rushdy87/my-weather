import { useContext } from 'react';
import { weatherContext } from '../../context/weatherContext';
import './WeatherCard.css';

const WeatherCard = () => {
  const { weather } = useContext(weatherContext);

  if (weather) {
    return (
      <div className="weather-card">
        <h3 className="weather-card_heading">{weather.name}</h3>
        <p className="weather-card_title">
          Temp: <span>{weather.main.temp}</span>C
        </p>
        <p className="weather-card_title">
          Feels Like: <span>{weather.main.feels_like}</span> C
        </p>
        <p className="weather-card_title">
          Humidity: <span>{weather.main.humidity}</span>%
        </p>
        <p className="weather-card_title">
          Pressure: <span>{weather.main.pressure}</span>
        </p>
        <p className="weather-card_title">
          Max Temp: <span>{weather.main.temp_max}</span>
        </p>
        <p className="weather-card_title">
          Min Tem: <span>{weather.main.temp_min}</span>
        </p>
        <p className="weather-card_title">
          Description: <span>{weather.weather[0].description}</span>
        </p>
      </div>
    );
  }
};
export default WeatherCard;
