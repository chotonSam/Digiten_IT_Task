# Weather App – Development Documentation
👨‍💻 **Developed by:** Fakhar Uzzaman (Sayem)

## 🧭 Project Goal
Build a responsive Weather Application using:
- **React + TypeScript**
- **Tailwind CSS** for styling
- **OpenWeatherMap API** for weather data
- **Redux Toolkit** for state management

---

## 🧱 Development Process

### 1. Project Setup
- Initialized project with **Vite** for React + TypeScript.
- Installed dependencies: **Axios**, **React-Redux**, **Redux Toolkit**, **Tailwind CSS**.
- Configured Tailwind CSS for responsive design.

### 2. Project Structure
- **/components**: Reusable UI components.
- **/features**: Redux slices.
- **/store**: Redux store.
- **/types**: TypeScript interfaces.
- **/context**: For context api.
- **/hook**: for custom hook.


### 3. Redux & Weather Data
- Used **Redux Toolkit** to manage weather data.
- Set up async thunks to fetch weather data from OpenWeatherMap API.

### 4. UI Implementation
- **SearchBar** for city input and weather fetch.
- **WeatherSection** to display city, temperature, description, and icons.
- **WeatherMetrics** to show wind speed, humidity, and min/max temp.
- Responsive layout with Tailwind CSS and dark mode support.

### 5. Theme Context with Dark Mode Toggle
- **Dark mode** was implemented using a custom **ThemeContext** to manage the theme state globally.
- The `ThemeContext` provides a `toggleTheme` function that switches between light and dark modes.
- **Context API** was used to share the theme state across the application:
  - **`ThemeContext.Provider`** wraps the entire app to supply the current theme and toggle function.
  - The **`useTheme`** hook allows easy access to the theme state and toggle function.
  
- When the theme is toggled, the `html` class is updated to either `dark` or `light`, and the theme preference is stored in `localStorage` for persistence across sessions.
