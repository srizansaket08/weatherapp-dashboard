import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import AnimatedTitle from "./AnimatedTitle";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";
import RecentSearches from "./RecentSearches";


const Dashboard = ({
  darkMode,
  setDarkMode,
  city,
  setCity,
  handleSearch,
  handleRefresh,
  weather,
  forecast,
  loading,
  error,
  searchHistory,
}) => {
  return (
    <>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <AnimatedTitle text="Weather Dashboard" />

      <SearchBar
        city={city}
        setCity={setCity}
        handleSearch={handleSearch}
        handleRefresh={handleRefresh}
        weather={weather}
      />

      {loading && <p className="text-lg animate-pulse">Loading...</p>}
      {error && <p className="text-red-300 text-lg">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
      {forecast.length > 0 && <Forecast forecast={forecast} />}
      {searchHistory.length > 0 && (
        <RecentSearches
          searchHistory={searchHistory}
          setCity={setCity}
          handleSearch={handleSearch}
        />
      )}
    </>
  );
};

export default Dashboard;
