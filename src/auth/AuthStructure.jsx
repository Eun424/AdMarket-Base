import React from 'react'
import signup from '../assets/images/signup2.jpg'

const AuthStructure = ({children}) => {
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-50 to-blue-100 p-4">
<div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row overflow-hidden max-w-4xl w-full">
  {/* Image Section */}
  <div className="w-full md:w-1/2 relative flex items-center justify-center p-6">
    <img
      src={signup}
      alt="Model"
      className="rounded-lg w-full "
    />
  </div>



        
                {/* Signup Form */}
               {children}
              </div>
            </div>
    </div>
  )
}

export default AuthStructure