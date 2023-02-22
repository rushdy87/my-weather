import './App.css';
import SearchBox from './components/search-box/SearchBox';
import WeatherCard from './components/weather-card/WeatherCard';
import CurrentLocation from './components/current-location/CurrentLocation';

function App() {
  return (
    <div className="app-container">
      <SearchBox />
      <CurrentLocation />
      <WeatherCard />
    </div>
  );
}

export default App;
