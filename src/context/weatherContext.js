import { useState, createContext } from 'react';

import { getWatherByCity, getWatherByPsition } from '../api';

export const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);

  const searchBaseOnCity = async (city) => {
    const data = await getWatherByCity(city);
    setWeather((prev) => [...prev, { city, data }]);
  };

  const searchBaseOnPostion = async (lat, lon) => {
    const data = await getWatherByPsition(lat, lon);
    setWeather((prev) => [...prev, { city: 'Your Location', data }]);
  };

  const deleteWeather = (city) => {
    const updatedWeather = weather.filter((item) => item.city !== city.city);
    setWeather(updatedWeather);
  };

  const value = {
    weather,
    searchBaseOnCity,
    searchBaseOnPostion,
    deleteWeather,
  };

  return (
    <weatherContext.Provider value={value}>{children}</weatherContext.Provider>
  );
};
