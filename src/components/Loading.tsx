const Loading = () => {
  return (
    <div className="mt-8 p-6 text-center text-gray-800 dark:text-white max-w-sm mx-auto">
      <div className="flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
