import { FaCloud } from "react-icons/fa";

const Error = () => {
  return (
    <div className="mt-8 p-6 text-center text-red-500 max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="flex justify-center items-center text-4xl mb-4">
        <FaCloud className="text-gray-500 text-6xl" />
      </div>
      <p className="text-2xl font-bold">Oops, something went wrong!</p>
      <p className="text-lg mt-2">{error}</p>
    </div>
  );
};

export default Error;
