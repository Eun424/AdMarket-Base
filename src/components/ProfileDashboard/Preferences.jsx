import React, { useContext } from "react";

import { themeContext } from "../../context/ThemeContext";

const Preferences = () => {
  const { theme, setTheme } = useContext(themeContext);

  return (
    <div className="space-y-6">
      <h2 className= {`text-2xl font-bold text-gray-800 ${
          theme === "dark" ? " text-white" : " text-gray-700"
        } `} >
        Preferences
      </h2>

      <div
        className={`shadow rounded-xl p-6 space-y-4 ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-700"
        }`}
      >
        {/* Notifications */}
        <div className="flex items-center justify-between">
  <span className="font-medium">Notifications</span>
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      className="sr-only peer"
      
    />
    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300"></div>
    <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all duration-300 peer-checked:translate-x-5"></div>
  </label>
</div>

        {/* Dark Mode */}
     <div className="flex items-center justify-between">
      <span className="font-medium">Dark Mode</span>

      <label className="relative inline-flex items-center cursor-pointer">
        {/* Hidden but accessible checkbox */}
        <input
          type="checkbox"
          className="sr-only peer"
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        {/* Track */}
        <div
          className={`w-11 h-6 rounded-full transition-all duration-300
            ${theme === "dark" ? "bg-gray-700" : "bg-gray-300"}
            peer-checked:bg-blue-600
            peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500
          `}
        />
        {/* Thumb */}
        <div
          className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-5"
        />
      </label>
    </div>



        {/* Email Updates */}
         <div className="flex items-center justify-between">
  <span className="font-medium">Email Updates</span>
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      className="sr-only peer"
    />
    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300"></div>
    <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all duration-300 peer-checked:translate-x-5"></div>
  </label>
</div>
      </div>

      <div className="flex justify-end">
        <button className="btn btn-primary">Save Changes</button>
      </div>
    </div>
  );
};

export default Preferences;
