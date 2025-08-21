import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import { themeContext } from '../../context/ThemeContext'

const ProfileSidebar = () => {
  const { theme } = useContext(themeContext)

  return (
    <div
      className={`px-2 md:px-4 py-4 rounded-2xl ${
        theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-700'
      }`}
    >
      <div className="flex flex-row md:flex-col justify-between items-center gap-2 md:gap-4">
        <ul
          className={`flex flex-row md:flex-col gap-2 md:gap-4 w-full text-sm font-medium ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          <li>
            <NavLink
              to="/dashboard/profile"
              end
              className={({ isActive }) =>
                `block px-4 py-2 rounded-full transition text-center ${
                  isActive
                    ? theme === 'dark'
                      ? 'text-cyan-400 bg-gray-800'
                      : 'text-blue-600 bg-blue-100'
                    : theme === 'dark'
                    ? 'hover:bg-gray-800'
                    : 'hover:bg-gray-100'
                }`
              }
            >
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/profile/security"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-full transition text-center ${
                  isActive
                    ? theme === 'dark'
                      ? 'text-cyan-400 bg-gray-800'
                      : 'text-blue-600 bg-blue-100'
                    : theme === 'dark'
                    ? 'hover:bg-gray-800'
                    : 'hover:bg-gray-100'
                }`
              }
            >
              Security
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/profile/preferences"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-full transition text-center ${
                  isActive
                    ? theme === 'dark'
                      ? 'text-cyan-400 bg-gray-800'
                      : 'text-blue-600 bg-blue-100'
                    : theme === 'dark'
                    ? 'hover:bg-gray-800'
                    : 'hover:bg-gray-100'
                }`
              }
            >
              Preferences
            </NavLink>
          </li>
        </ul>

        <div className="md:mt-10">
          <button
            className={`text-sm ${
              theme === 'dark'
                ? 'text-red-400 hover:text-red-500'
                : 'text-red-500 hover:text-red-700'
            }`}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileSidebar
