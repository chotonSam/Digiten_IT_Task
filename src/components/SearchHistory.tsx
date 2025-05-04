import { useState } from "react";
import { FaHistory, FaTimes } from "react-icons/fa";
import { clearHistory } from "../features/searchHistorySlice";
import { fetchWeather } from "../features/weatherSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

const SearchHistory = () => {
  const dispatch = useAppDispatch();
  const history: string[] = useAppSelector(
    (state) => state.weather.searchHistory
  );

  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  const toggleHistory = () => {
    setIsHistoryVisible((prev) => !prev);
  };

  const closeHistory = () => {
    setIsHistoryVisible(false);
  };

  return (
    <div className="mt-4 relative px-6 ">
      <button
        onClick={toggleHistory}
        className="flex items-center space-x-2 text-sm text-black cursor-pointer hover:underline dark:text-white"
      >
        <FaHistory className="text-lg" />
        <span>View History</span>
      </button>

      {isHistoryVisible && (
        <div className="mx-4 absolute top-10 left-0 p-4 rounded-lg shadow-lg w-64 space-y-2 bg-white dark:bg-gray-700">
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-semibold text-black dark:text-white">
              Previous Searches
            </h4>

            <button
              onClick={closeHistory}
              className="text-xs text-gray-600 cursor-pointer hover:text-red-500 dark:text-white"
            >
              <FaTimes />
            </button>
          </div>
          <ul className="space-y-1 mt-2">
            {history.length > 0 ? (
              history.map((city: string, idx: number) => (
                <li
                  key={idx}
                  onClick={() => dispatch(fetchWeather(city))}
                  className="capitalize cursor-pointer text-black hover:bg-gray-100 dark:text-white p-1 pl-2 rounded-md dark:hover:bg-gray-800 transition-all duration-200 ease-in-out text-sm"
                >
                  {city}
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-500 dark:text-gray-300">
                No previous searches
              </li>
            )}
          </ul>
          <button
            onClick={handleClearHistory}
            className="w-full mt-2 py-1 text-sm text-red-500 cursor-pointer hover:underline dark:text-red-400"
          >
            Clear History
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchHistory;
