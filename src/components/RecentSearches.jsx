import React from "react";

const RecentSearches = ({ searchHistory, setCity, handleSearch }) => {
  return (
    <div className="mt-8 w-full max-w-md text-center">
      <h3 className="text-lg font-semibold mb-2">Recent Searches</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {searchHistory.map((cityName, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCity(cityName);
              handleSearch({ preventDefault: () => {} });
            }}
            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm backdrop-blur-md transition-all"
          >
            {cityName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;