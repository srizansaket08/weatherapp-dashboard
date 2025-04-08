import React from "react";
import { FaSearch, FaSyncAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const SearchBar = ({ city, setCity, handleSearch, weather, handleRefresh }) => {
  return (
    <motion.form
      onSubmit={handleSearch}
      className="flex gap-2 w-full max-w-md mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        className="flex-1 px-4 py-2 rounded-md text-black outline-none"
      />
      <button type="submit" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
        <FaSearch />
      </button>
      {weather && (
        <button
          onClick={handleRefresh}
          type="button"
          className="bg-white text-blue-600 px-3 py-2 rounded hover:bg-gray-200"
        >
          <FaSyncAlt />
        </button>
      )}
    </motion.form>
  );
};

export default SearchBar;