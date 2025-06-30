import React, { useEffect, useState, useRef } from 'react'
import WeatherHeader from './WeatherHeader';
import { fetchWeatherData } from '../api/weatherApi';
import Search from './Search';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';
import WeatherInfoCard from './WeatherInfoCard';
import ErrorMessage from './ErrorMessage';

const Weather = () => {

  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const [error, setError] = useState('');

  const search = async (city) => {
    setError('');
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (error) {
      setWeatherData(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    search('chicago'); 
  },[]);

  return (
    <div>
      <Search onSearch={search} />
      <ErrorMessage message={error} />
      {weatherData && (
        <>
          <WeatherHeader
            icon={weatherData.icon}
            temperature={weatherData.temperature}
            location={weatherData.location}
          />
          <div className='flex justify-around'>
            <WeatherInfoCard
              icon={humidity_icon}
              label="Humidity"
              value={`${weatherData.humidity} %`}
            />
            <WeatherInfoCard
              icon={wind_icon}
              label="Wind Speed"
              value={`${weatherData.windSpeed} km/h`}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Weather
