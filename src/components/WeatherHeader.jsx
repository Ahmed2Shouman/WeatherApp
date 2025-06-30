// src/components/WeatherHeader.jsx
import React from 'react';

const WeatherHeader = ({ icon, temperature, location }) => {
  return (
    <div className='flex flex-col items-center justify-center px-5 py-6 text-center mb-7'>
        <img src={icon} alt="Weather Icon" className="w-32 h-32 mb-4" />
        <h1 className="pb-4 text-5xl">{temperature}°c</h1>
        <h1 className="text-3xl">{location}</h1>
    </div>
  );
};

export default WeatherHeader;