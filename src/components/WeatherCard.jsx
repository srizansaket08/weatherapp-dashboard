import React from "react";
import { motion } from "framer-motion";
import { WiHumidity, WiStrongWind } from "react-icons/wi";

const WeatherCard = ({ weather }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-md w-full text-center shadow-md"
    >
      <h2 className="text-2xl font-semibold">{weather.name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.description}
        className="mx-auto"
      />
      <p className="text-4xl font-bold">{weather.temp}°C</p>
      <p className="capitalize">{weather.description}</p>
      <div className="flex justify-center gap-6 mt-4 text-sm">
        <div className="flex items-center gap-1">
          <WiHumidity size={24} /> {weather.humidity}%
        </div>
        <div className="flex items-center gap-1">
          <WiStrongWind size={24} /> {weather.wind} km/h
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;