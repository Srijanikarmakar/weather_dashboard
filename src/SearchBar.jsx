// src/components/SearchBar.jsx
import React from 'react';

function SearchBar({ city, setCity, fetchWeather }) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <button
        onClick={fetchWeather}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
      >
        Get Weather
      </button>
    </div>
  );
}

export default SearchBar;
