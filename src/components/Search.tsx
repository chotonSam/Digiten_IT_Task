import { ChangeEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { addToHistory, fetchWeather } from "../features/weatherSlice";

import { useAppDispatch } from "../hooks";

const Search = () => {
  const [city, setCity] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (city.trim()) {
      dispatch(fetchWeather(city));
      dispatch(addToHistory(city)); //
      setCity("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative flex items-center w-40 sm:w-64">
      <input
        type="search"
        value={city}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Search..."
        className="border border-gray-400 dark:border-gray-600 rounded-md px-2 sm:px-3 py-1.5  text-xs sm:text-sm bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none w-full pr-8 sm:pr-10"
      />
      <FaSearch
        onClick={handleSearch}
        className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-white cursor-pointer text-sm sm:text-base"
      />
    </div>
  );
};

export default Search;
