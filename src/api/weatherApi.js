import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';

const allIcons = {
  "01d": clear_icon,
  "01n": clear_icon,
  "02d": cloud_icon,
  "02n": cloud_icon,
  "03d": cloud_icon,
  "03n": cloud_icon,
  "04d": drizzle_icon,
  "04n": drizzle_icon,
  "09d": rain_icon,
  "09n": rain_icon,
  "10d": rain_icon,
  "10n": rain_icon,
  "13d": snow_icon,
  "13n": snow_icon,
};

export const fetchWeatherData = async (city) => {
  if (!city) throw new Error('Please enter a city name');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Failed to fetch weather data');
  }

  const iconCode = data.weather?.[0]?.icon;
  const icon = allIcons[iconCode] || allIcons["01d"];
  return {
    humidity: data.main?.humidity,
    windSpeed: data.wind?.speed,
    temperature: Math.floor(data.main?.temp),
    location: data.name,
    icon: icon
  };
};