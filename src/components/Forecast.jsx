import React from "react";
import { motion } from "framer-motion";

const Forecast = ({ forecast }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-8 w-full max-w-4xl"
    >
      <h3 className="text-lg font-semibold mb-3 text-center">5-Day Forecast (Next 30 Hours)</h3>
      <div className="flex overflow-x-auto gap-4 p-2 scrollbar-hide">
        {forecast.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="min-w-[120px] bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-lg p-4 text-center text-sm flex-shrink-0"
          >
            <p className="mb-1">{new Date(item.time).toLocaleDateString()}</p>
            <p className="mb-1">
              {new Date(item.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
              alt={item.desc}
              className="mx-auto"
            />
            <p className="font-bold">{item.temp.toFixed(1)}°C</p>
            <p className="capitalize">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Forecast;