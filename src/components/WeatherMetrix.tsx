import {
  WiHumidity,
  WiStrongWind,
  WiThermometer,
  WiThermometerExterior,
} from "react-icons/wi";

type WeatherMetrixProps = {
  windSpeed: number;
  humidity: number;
  tempMax: number;
  tempMin: number;
};

const WeatherMetrix = ({
  windSpeed,
  humidity,
  tempMax,
  tempMin,
}: WeatherMetrixProps) => {
  return (
    <div className="grid grid-cols-4 mt-4">
      {/* Wind */}
      <div className="flex flex-col items-center  bg-white dark:bg-gray-800 py-10 text-center">
        <WiStrongWind className="text-2xl sm:text-3xl mb-1 text-blue-500" />
        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
          Wind
        </div>
        <div className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white">
          {windSpeed} km/h
        </div>
      </div>

      {/* Humidity */}
      <div className="flex flex-col items-center bg-[#F1F1F1]  dark:bg-gray-700 py-10 text-center">
        <WiHumidity className="text-2xl sm:text-3xl mb-1 text-blue-400" />
        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
          Humidity
        </div>
        <div className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white">
          {humidity}%
        </div>
      </div>

      {/* Max Temperature */}
      <div className="flex flex-col items-center bg-white dark:bg-gray-800 py-10 text-center">
        <WiThermometer className="text-2xl sm:text-3xl mb-1 text-red-500" />
        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
          Max Temp
        </div>
        <div className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white">
          {tempMax}°C
        </div>
      </div>

      {/* Min Temperature */}
      <div className="flex flex-col items-center bg-[#F1F1F1] dark:bg-gray-700 py-10 text-center">
        <WiThermometerExterior className="text-2xl sm:text-3xl mb-1 text-blue-600" />
        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
          Min Temp
        </div>
        <div className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white">
          {tempMin}°C
        </div>
      </div>
    </div>
  );
};

export default WeatherMetrix;
