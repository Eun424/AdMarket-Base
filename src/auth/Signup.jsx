import React, { useContext, useState } from 'react';
import AuthStructure from './AuthStructure';
import { authContext } from '../context/AuthContext';
import api from '../Axios/axios';
import toast from 'react-hot-toast'
import { LuDot } from 'react-icons/lu';
import { IoIosCheckmark, IoIosCheckmarkCircle, IoIosClose } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router';


const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()


  const { password, confirmPassword } = formData
  const passwordRules = {
    length: password.length >= 8,
    upperCase: /[A-Z]/.test(password, confirmPassword),
    lowerCase: /[a-z]/.test(password, confirmPassword),
    specialCharacter: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password, confirmPassword)
  }

  const register = async (e) => {
    setErrorMessage(null)
    e.preventDefault()
    try {
      const { fullName, email, password, confirmPassword } = formData
      if (!fullName || !email || !password || !confirmPassword) {
        return toast.error('All fields are required')
      }
      if (password !== confirmPassword) {
        return toast.error('Passwords do not match')
      }

      const response = await api.post('/register', {
        fullName, email, password, confirmPassword
      })

      console.log(response.data)
      // if (!response.data.success) {
      //   setErrorMessage(error.response.data.message)
      //   toast.error(error.response.data.message)
      // }

      if (response.data.success) {
        toast.success(response.data.message)
        navigate('/dashboard')
      }
    } catch (error) {
      setErrorMessage(error.response.data.message) || 'Something went wrong'
      console.log(error)
      toast.error(error.response.data.message)
    }


  }


  return (
    <div>
      <AuthStructure>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-[#3690cc] mb-6 text-center">Register</h2>
          <div className='text-red-500 text-center'>
            {errorMessage ? errorMessage : null}
          </div>
          <form className="space-y-4" onSubmit={register}>
            <div>
              <label htmlFor="">Fullname</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="E-mail"
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label htmlFor="">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {password ? (<div className='text-sm'>
              <p className="mt-2 text-sm text-gray-600">
                Passwords must be include at least:
              </p>
              <ul className="text-sm mt-1 flex flex-wrap flex-row gap-2">
                <li className={`flex items-center  px-3 py-1 rounded-full ${passwordRules.length ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                  {passwordRules.length ? <IoIosCheckmark size={17} /> : <IoIosClose size={16} />}  8 characters
                </li>
                <li className={`flex items-center  px-3 py-1 rounded-full ${passwordRules.lowerCase ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                  {passwordRules.lowerCase ? <IoIosCheckmark  size={17} /> : <IoIosClose size={16} />} One lowercase
                </li>
                <li className={`flex items-center px-3 py-1 rounded-full ${passwordRules.upperCase ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                  {passwordRules.upperCase ? <IoIosCheckmark  size={17} /> : <IoIosClose size={16} />} One uppercase
                </li>
                <li className={`flex items-center px-3 py-1 rounded-full ${passwordRules.specialCharacter ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                  {passwordRules.specialCharacter ? <IoIosCheckmark  size={17} /> : <IoIosClose size={16} />} One special character
                </li>
              </ul>
            </div>) : null}

            <div>
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                placeholder="Enter password again"
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>


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
