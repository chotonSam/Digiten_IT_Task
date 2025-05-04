export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    temp_min: number; // Add this property
    temp_max: number; // Add this property
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}
