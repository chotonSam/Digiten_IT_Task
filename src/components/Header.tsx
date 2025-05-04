import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className=" sm:px-6 flex justify-between items-center p-4 border-b-2 border-gray-300 dark:border-gray-700">
      <Logo />

      <Search />

      {/* Toggle Switch */}
      <div
        onClick={toggleDarkMode}
        className="w-12 h-6 flex items-center bg-gray-400 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-colors duration-300"
      >
        <div
          className={`w-4 h-4  rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-white ${
            darkMode ? "translate-x-6 bg-gray-800" : "translate-x-0 bg-white"
          }`}
        >
          {darkMode ? (
            <FaMoon className="text-xs " />
          ) : (
            <FaSun className="text-gray-800 text-xs " />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
