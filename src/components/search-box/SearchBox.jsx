import { useState, useContext } from 'react';
import { FaSearchLocation } from 'react-icons/fa';

import './SearchBox.css';
import { weatherContext } from '../../context/weatherContext';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchBaseOnCity } = useContext(weatherContext);

  const handleCiteChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    searchBaseOnCity(searchTerm);
    setSearchTerm('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <div className="search-box-container">
      <input
        className="search-bar"
        type="search"
        name="search"
        placeholder="Search City"
        value={searchTerm}
        onChange={handleCiteChange}
        onKeyDown={handleKeyPress}
      />
      <button className="search-button" onClick={handleSearch}>
        <FaSearchLocation /> Search
      </button>
    </div>
  );
};

export default SearchBox;
