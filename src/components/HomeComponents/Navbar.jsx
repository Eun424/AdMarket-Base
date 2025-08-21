import React, { useContext, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { Link } from 'react-router'
import { FaMoon, FaSun } from 'react-icons/fa'
import logo from '../../assets/images/logo6.png'
import { themeContext } from '../../context/ThemeContext'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(themeContext)
  const [toggle, setToggle] = useState(false)

  return (
    <div
      className={`w-full ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-[#024658] text-black'
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 border-b border-[#9CD2F6]">
        <div>
          <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
        </div>

        <div className="flex items-center gap-4">
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full shadow hover:scale-105 transition ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-white'
            }`}
          >
            {theme === 'light' ? (
              <FaMoon className="text-gray-800" />
            ) : (
              <FaSun className="text-yellow-400" />
            )}
          </button>

          <Link
            to="/signup"
            className="bg-[#9CD2F6] text-black font-bold py-3 px-10 rounded hover:bg-[#82c9f2] transition duration-200 text-lg"
          >
            SELLER
          </Link>
        </div>
      </div>

      <section className="flex flex-wrap justify-center items-center gap-4 px-4 py-4">
        {/* University select */}
        <div
          className={`rounded-lg shadow-sm w-48 ${
            theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-700'
          }`}
        >
          <select
            id="university"
            name="university"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              theme === 'dark'
                ? 'border-gray-600 bg-gray-800 text-gray-200'
                : 'border-gray-300 bg-white text-gray-700'
            }`}
          >
            <option value="">LEGON</option>
            <option value="">UCC</option>
            <option value="">KNUST</option>
            <option value="">UHAS</option>
            <option value="">UEW</option>
          </select>
        </div>

        {/* Search input */}
        <div className="flex w-full max-w-xl">
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-l-lg shadow-sm border border-r-0 w-full focus-within:ring-2 focus-within:ring-blue-400 ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-600 text-gray-200'
                : 'bg-white border-gray-300 text-gray-700'
            }`}
          >
            <IoIosSearch
              className={`text-xl ${
                theme === 'dark' ? 'text-gray-400' : 'text-[#8B8B8C]'
              }`}
            />
            <input
              type="search"
              placeholder="Search..."
              className={`w-full bg-transparent outline-none placeholder:text-gray-400 ${
                theme === 'dark'
                  ? 'text-gray-200 placeholder:text-gray-500'
                  : 'text-gray-700 placeholder:text-gray-400'
              }`}
            />
          </div>

          <button className="bg-[#9CD2F6] px-5 py-2 rounded-r-lg text-[#0C1C3D] font-semibold hover:bg-[#7cc4f1] transition duration-200">
            Search
          </button>
        </div>
      </section>
    </div>
  )
}

export default Navbar
