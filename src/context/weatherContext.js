import { useState, createContext } from 'react';

import { getWather } from '../api';

export const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);

  const searchBaseOnCity = async (city) => {
    const data = await getWather(city);
    setWeather(data);
  };

  const value = { weather, searchBaseOnCity };

  return (
    <weatherContext.Provider value={value}>{children}</weatherContext.Provider>
  );
};
