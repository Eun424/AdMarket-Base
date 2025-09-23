import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-row items-center gap-1 justify-center min-h-[200px]">
      {/* Icon with spin animation */}
      <FaShoppingCart className="text-4xl text-blue-500 animate-bounce mb-4" />

      {/* Spinner ring */}
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3"></div>

      {/* Message */}
      <p className="text-gray-600 font-medium">{message}</p>
    </div>
  );
};

export default Loader;
