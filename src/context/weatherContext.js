import { useState, createContext } from 'react';

import { getWatherByCity, getWatherByPsition } from '../api';

export const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);

  const searchBaseOnCity = async (city) => {
    const data = await getWatherByCity(city);
    setWeather(data);
  };

  const searchBaseOnPostion = async (lat, lon) => {
    const data = await getWatherByPsition(lat, lon);
    setWeather(data);
  };

  const value = { weather, searchBaseOnCity, searchBaseOnPostion };

  return (
    <weatherContext.Provider value={value}>{children}</weatherContext.Provider>
  );
};
