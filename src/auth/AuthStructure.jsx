import React, { useContext } from 'react'
import signup from '../assets/images/signup2.jpg'
import { themeContext } from '../context/ThemeContext'

const AuthStructure = ({ children }) => {
  const { theme } = useContext(themeContext)

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 
        ${theme === 'dark' 
          ? 'bg-gradient-to-r from-gray-900 to-gray-800' 
          : 'bg-gradient-to-r from-sky-50 to-blue-100'}`}
    >
      <div
        className={`rounded-2xl flex flex-col md:flex-row overflow-hidden max-w-4xl w-full shadow-lg 
          ${theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'}`}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center p-6">
          <img
            src={signup}
            alt="Model"
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Signup/Login Form */}
        {children}
      </div>
    </div>
  )
}

export default AuthStructure
