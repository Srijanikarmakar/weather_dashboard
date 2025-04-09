// App.js
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

const API_KEY = '77a1876df1b7c01656e31f86c669cb0d'; 

const App = () => {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const getWeatherData = useCallback(async () => {
    const userInput = city.trim();
    if (!userInput) {
      setErrorMsg('Please enter a city name.');
      setWeatherInfo(null);
      return;
    }

    setIsLoading(true);
    setErrorMsg('');
    setWeatherInfo(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${API_KEY}&units=metric`
      );
      setWeatherInfo(response.data);
    } catch (error) {
      if (error.response?.status === 404) {
        setErrorMsg('City not found. Try another.');
      } else {
        setErrorMsg('Could not retrieve weather data. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [city]);

  return (
    <main className="min-h-screen bg-gradient-to-r from-sky-100 via-purple-200 to-pink-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 drop-shadow-sm">🌦 Weather App</h1>
      <SearchBar
        city={city}
        setCity={setCity}
        fetchWeather={getWeatherData}
      />
      {isLoading && <p className="mt-6 text-gray-600 animate-pulse">Fetching data...</p>}
      {errorMsg && <p className="mt-6 text-red-500 font-medium">{errorMsg}</p>}
      {weatherInfo && !isLoading && <WeatherCard data={weatherInfo} />}
    </main>
  );
};

export default App;
