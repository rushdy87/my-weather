import { useContext } from 'react';
import { weatherContext } from '../../context/weatherContext';
import './WeatherCard.css';

const WeatherCard = () => {
  const { weather, deleteWeather } = useContext(weatherContext);

  const handleDelete = (city) => {
    deleteWeather(city);
  };

  if (weather.length) {
    return (
      <div className="weather-card-container">
        {weather.map((city, index) => {
          return (
            <div className="weather-card" key={index}>
              <button
                className="weather-card_delete"
                onClick={() => handleDelete(city)}
              >
                X
              </button>
              <h3 className="weather-card_heading">{city.data.name}</h3>
              <p className="weather-card_title">
                Temp: <span>{city.data.main.temp}</span>C
              </p>
              <p className="weather-card_title">
                Feels Like: <span>{city.data.main.feels_like}</span> C
              </p>
              <p className="weather-card_title">
                Humidity: <span>{city.data.main.humidity}</span>%
              </p>
              <p className="weather-card_title">
                Pressure: <span>{city.data.main.pressure}</span>
              </p>
              <p className="weather-card_title">
                Max Temp: <span>{city.data.main.temp_max}</span>
              </p>
              <p className="weather-card_title">
                Min Tem: <span>{city.data.main.temp_min}</span>
              </p>
              <p className="weather-card_title">
                Description: <span>{city.data.weather[0].description}</span>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
};
export default WeatherCard;
