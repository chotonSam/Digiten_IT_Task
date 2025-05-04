import {
  FaBolt,
  FaCloud,
  FaCloudRain,
  FaCloudSun,
  FaSnowflake,
  FaSun,
  FaUmbrella,
} from "react-icons/fa";

type WeatherTempProps = {
  city: string;
  temperature: number;
  condition: string;
  icon: string;
};

const WeatherTemp = ({
  city,
  temperature,
  condition,
  icon,
}: WeatherTempProps) => {
  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "clear":
        return <FaSun className="text-yellow-500 text-6xl" />;
      case "clouds":
        return <FaCloudSun className="text-gray-500 text-6xl" />;
      case "rain":
        return <FaCloudRain className="text-blue-500 text-6xl" />;
      case "snow":
        return <FaSnowflake className="text-blue-300 text-6xl" />;
      case "thunderstorm":
        return <FaBolt className="text-yellow-300 text-6xl" />;
      case "drizzle":
        return <FaUmbrella className="text-teal-500 text-6xl" />;
      default:
        return <FaCloud className="text-gray-400 text-6xl" />;
    }
  };

  return (
    <div className="mt-8 p-6 text-center text-gray-800 dark:text-white max-w-sm mx-auto">
      <h2 className="text-3xl font-bold mb-2">{city}</h2>

      {/* Weather Icon */}
      <div className="flex justify-center items-center mb-4">
        {getWeatherIcon(condition)}
      </div>

      {/* Temperature */}
      <div className="text-4xl font-semibold mb-1">{temperature}°C</div>

      {/* Condition */}
      <div className="text-lg text-gray-600 dark:text-gray-300 capitalize">
        {condition}
      </div>
    </div>
  );
};

export default WeatherTemp;
