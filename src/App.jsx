import React, { useState } from "react";

import Layout from "./components/Layout";
import useWeatherData from "./hooks/useWeatherData";
import useDarkMode from "./hooks/useDarkMode";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [city, setCity] = useState("");
  const [darkMode, setDarkMode] = useDarkMode();

  const {
    weather,
    forecast,
    loading,
    error,
    searchHistory,
    handleSearch,
    handleRefresh,
  } = useWeatherData(city);

  return (
    <Layout>
      <Dashboard
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        city={city}
        setCity={setCity}
        handleSearch={handleSearch}
        handleRefresh={handleRefresh}
        weather={weather}
        forecast={forecast}
        loading={loading}
        error={error}
        searchHistory={searchHistory}
      />
    </Layout>
  );
};

export default App;
