import { ImSpinner } from "react-icons/im";
import { MdError } from "react-icons/md";
import { useAppSelector } from "../hooks";
import WeatherMetrix from "./WeatherMetrix";
import WeatherTemp from "./WeatherTmp";

const WeatherSection = () => {
  const { data, loading, error } = useAppSelector((state) => state.weather);

  if (loading) {
    return (
      <div className="mt-8 p-6 text-center text-gray-800 dark:text-white max-w-sm mx-auto">
        <div className="flex justify-center items-center">
          <ImSpinner className="text-gray-800 text-6xl animate-spin" />
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
          Loading...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 p-6 text-center text-red-500 max-w-sm mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-lg">
        <div className="text-4xl mb-4">
          <MdError className="text-gray-500 text-6xl m-auto" />
        </div>
        <p className="text-2xl font-bold">Oops, something went wrong!</p>
        <p className="text-lg mt-2">{error}</p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <>
      <WeatherTemp
        city={data.name}
        temperature={Math.round(data.main.temp)}
        condition={data.weather[0].main}
      />
      <WeatherMetrix
        windSpeed={data.wind.speed}
        humidity={data.main.humidity}
        tempMax={Math.round(data.main.temp_max)}
        tempMin={Math.round(data.main.temp_min)}
      />
    </>
  );
};

export default WeatherSection;
