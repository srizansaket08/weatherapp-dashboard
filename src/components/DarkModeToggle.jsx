import React from "react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="absolute top-5 right-6 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-md text-sm transition duration-300"
    >
      {darkMode ? "🌞Light Mode" : "🌙Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;