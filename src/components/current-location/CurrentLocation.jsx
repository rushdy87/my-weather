import { useContext } from 'react';
import { FaLocationArrow } from 'react-icons/fa';

import { weatherContext } from '../../context/weatherContext';
import './CurrentLocation.css';

const CurrentLocation = () => {
  const { searchBaseOnPostion } = useContext(weatherContext);

  const handlePositonSearch = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        searchBaseOnPostion(coords.latitude, coords.longitude);
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, maximumAge: 10000 }
    );
  };

  return (
    <div>
      <button className="locatin-button" onClick={handlePositonSearch}>
        <FaLocationArrow /> Your Locatin
      </button>
    </div>
  );
};

export default CurrentLocation;
