// src/components/WeatherInfoCard.jsx
import React from 'react';

const WeatherInfoCard = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-3">
      <img src={icon} alt={`${label} Icon`} className="w-12 h-12" />
      <div className="text-left">
        <p className="text-lg font-semibold">{value}</p>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </div>
  );
};

export default WeatherInfoCard;