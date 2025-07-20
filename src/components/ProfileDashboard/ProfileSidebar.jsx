import React from 'react'
import { NavLink } from 'react-router'

const ProfileSidebar = () => {
  return (
    <div className="px-2 md:px-4 py-4">
      <div className="flex flex-row md:flex-col justify-between items-center gap-2 md:gap-4">
        <ul className="flex flex-row md:flex-col gap-2 md:gap-4 w-full text-sm font-medium text-gray-700 ">
          <li>
            <NavLink
              to="/dashboard/profile"
              end
              className={({ isActive }) =>
                `block px-4 py-2 rounded-full transition text-center ${
                  isActive ? 'text-blue-600 bg-blue-100' : 'hover:bg-gray-100'
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
                  isActive ? 'text-blue-600 bg-blue-100' : 'hover:bg-gray-100'
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
                  isActive ? 'text-blue-600 bg-blue-100' : 'hover:bg-gray-100'
                }`
              }
            >
              Preferences
            </NavLink>
          </li>
        </ul>

        <div className=" md:mt-10">
          <button className="text-red-500 hover:text-red-700 text-sm">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileSidebar
