import { useEffect } from "react";
import { fetchWeather } from "./features/weatherSlice";

import Header from "./components/Header";
import SearchHistory from "./components/SearchHistory";
import WeatherSection from "./components/WeatherSection";
import { useAppDispatch } from "./hooks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeather("Chittagong"));
  }, [dispatch]);

  return (
    <div
      className={`w-screen h-screen flex items-center justify-center flex-col transition-colors duration-500 dark:bg-gray-900 dark:text-white bg-[#F7D9A3] text-black`}
    >
      <h2 className="sm:text-3xl text-2xl mb-8 sm:mb-16 font-bold text-gray-800 dark:text-white">
        A Simple Weather App
      </h2>
      <div className="w-full sm:w-[800px] bg-white dark:bg-gray-800 rounded-xl shadow-lg pt-6  transition-colors duration-500">
        <Header />
        <SearchHistory />
        <WeatherSection />
      </div>
      <p className="text-center text-xs sm:text-sm text-gray-500 mt-8 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Digiten IT. Developed by Fakhar
        Uzzaman. All rights reserved. <br />
        Built with care for the Digiten IT job task.
      </p>
    </div>
  );
}

export default App;
