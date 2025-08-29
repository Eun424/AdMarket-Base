import React from 'react'
import AuthStructure from './AuthStructure'

const Login = () => {
  return (
    <div>
      <AuthStructure>
    <div className="w-full md:w-1/2 p-8 mt-3">
          <h2 className="text-3xl font-semibold text-[#3690cc] mb-6 text-center">Login</h2>

          <form className="space-y-6">
           
           <label htmlFor="" className='text-sky-900'>Email</label>
            <input
              type="email"
              placeholder="Please enter your email"
              className="w-full px-4 py-3 mt-1 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
             <label htmlFor="" className='text-sky-900'>Password</label>
            <input
              type="password"
              placeholder="Please enter your password"
              className="w-full px-4 py-3 mt-1 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <button
              type="submit"
              className="w-full py-3 bg-[#3690cc] hover:bg-blue-900 text-white font-semibold rounded-md transition duration-200"
            >
              LOGIN
            </button>
            <div>
              <a href="">Forgot Password?</a>
            </div>

            <p className="text-center text-sm ">
              Don't have an account?{' '}
              <a href="/signup" className="text-[#1778b9] font-semibold underline">
                Signup
              </a>
            </p>
          </form>
        </div>
    </AuthStructure>
    </div>
  )
}

export default Login
