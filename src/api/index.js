import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPEN_WEATER_API_KEY;

export const getWatherByCity = async (city) => {
  const { data } = await axios(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  return data;
};

export const getWatherByPsition = async (lat, lon) => {
  const { data } = await axios(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  return data;
};
