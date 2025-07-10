import React from 'react';
import signup from '../assets/images/signup2.jpg'
import AuthStructure from './AuthStructure';

const Signup = () => {
  return (
    <div>
<AuthStructure>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-[#3690cc] mb-6 text-center">Sign Up</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <div className="text-sm text-gray-600">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-[#3690cc] mr-2" />
                I agree all statement in{' '}
                <a href="/terms" className="text-[#1976b4] underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#3690cc] hover:bg-blue-900 text-white font-semibold rounded-md transition duration-200"
            >
              SIGN UP
            </button>

            <p className="text-center text-sm mt-4">
              Already have an account?{' '}
              <a href="/login" className="text-[#1778b9] font-semibold underline">
                Login
              </a>
            </p>
          </form>
        </div>
        </AuthStructure>
      </div>
      
    
   
  );
};

export default Signup;
