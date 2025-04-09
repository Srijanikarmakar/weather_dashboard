// src/components/WeatherCard.jsx
import React from 'react';

function WeatherCard({ data }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md text-center">
      <h2 className="text-2xl font-semibold mb-2">{data.name}, {data.sys.country}</h2>
      <p className="text-xl">{data.weather[0].main}</p>
      <p className="text-6xl font-bold mt-2">{Math.round(data.main.temp)}°C</p>
      <p className="text-sm text-gray-500 mt-1">Feels like {Math.round(data.main.feels_like)}°C</p>
      <div className="mt-4 text-gray-700">
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind: {data.wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
