import { useState, useEffect } from "react";

const API_KEY = "161f541390b1ecedcc2191495f9baf7c";

const useWeatherData = (city) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("weatherSearchHistory"));
    if (saved) setSearchHistory(saved);
  }, []);

  const fetchWeatherData = async (cityName) => {
    setLoading(true);
    setError("");
    setWeather(null);
    setForecast([]);

    try {
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (!weatherRes.ok) throw new Error("City not found");

      const weatherData = await weatherRes.json();
      const details = {
        name: weatherData.name,
        temp: weatherData.main.temp,
        humidity: weatherData.main.humidity,
        wind: weatherData.wind.speed,
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
      };
      setWeather(details);

      const updatedHistory = [
        weatherData.name,
        ...searchHistory.filter((c) => c !== weatherData.name),
      ].slice(0, 5);
      setSearchHistory(updatedHistory);
      localStorage.setItem("weatherSearchHistory", JSON.stringify(updatedHistory));

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const forecastData = await forecastRes.json();
      const formatted = forecastData.list.slice(0, 10).map((f) => ({
        time: f.dt_txt,
        temp: f.main.temp,
        icon: f.weather[0].icon,
        desc: f.weather[0].description,
      }));
      setForecast(formatted);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (city.trim()) {
      await fetchWeatherData(city);
    }
  };

  const handleRefresh = () => {
    if (weather) {
      fetchWeatherData(weather.name);
    }
  };

  return {
    weather,
    forecast,
    loading,
    error,
    searchHistory,
    handleSearch,
    handleRefresh,
  };
};

export default useWeatherData;
