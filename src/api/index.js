import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPEN_WEATER_API_KEY;

export const getWather = async (city) => {
  const { data } = await axios(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  return data;
};
