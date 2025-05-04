import { TiWeatherWindyCloudy } from "react-icons/ti";

const Logo = () => {
  return (
    <a
      href="/"
      className="flex items-center space-x-1 text-2xl font-bold text-gray-800 dark:text-white"
    >
      <TiWeatherWindyCloudy className="text-gary-900 text-3xl" />
      <span>Weather</span>
    </a>
  );
};

export default Logo;
