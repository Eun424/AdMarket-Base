import React, { useContext, useEffect, useState } from 'react';
import AuthStructure from './AuthStructure';
import { AuthContext } from '../context/AuthContext';
import api from '../Axios/axios';
import toast from 'react-hot-toast'
import { LuDot } from 'react-icons/lu';
import { IoIosCheckmark, IoIosCheckmarkCircle, IoIosClose } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { themeContext } from '../context/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../store/features/authSlice';


const Signup = () => {
  const {users, error} = useSelector((store) => store.auth)

  
  const dispatch = useDispatch()
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { theme } = useContext(themeContext)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })


  const { password, confirmPassword } = formData
  const passwordRules = {
    length: password.length >= 8,
    upperCase: /[A-Z]/.test(password, confirmPassword),
    lowerCase: /[a-z]/.test(password, confirmPassword),
    specialCharacter: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password, confirmPassword)
  }


  const handleregister = (e) => {
    setErrorMessage(null)
    e.preventDefault()

    const { fullName, email, password, confirmPassword } = formData
    if (!fullName || !email || !password || !confirmPassword) {
      return toast.error('All fields are required')
    }

    if (password !== confirmPassword) {
      return toast.error('Passwords do not match')
    }


     dispatch(register(formData))
      
    }
    
   useEffect(() => {
  if (users?.success) {
    toast.success(users.message)
    navigate('/login', { replace: true })
  }
}, [users, navigate])

useEffect(() => {
  if (error) {
    setErrorMessage(error)
    toast.error(error)
  }
}, [error])

  return (
    <div>
      <AuthStructure>
        <div className={`w-full md:w-1/2 p-8 rounded-lg shadow-lg 
  ${theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'}`}>
          <h2 className="text-3xl font-semibold text-[#3690cc] mb-6 text-center">Register</h2>

          <div className='text-red-500 text-center'>
            {errorMessage ? errorMessage : null}
          </div>
          <form className="space-y-4" onSubmit={handleregister}>
            <div>
              <label className={`block mb-1 font-medium 
        ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Fullname
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="John Doe"
                className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 
          ${theme === 'dark'
                    ? 'bg-gray-800 border border-gray-700 text-gray-200 focus:ring-blue-400'
                    : 'bg-white border border-gray-200 text-gray-800 focus:ring-blue-300'}`}
              />
            </div>
            <div>
              <label className={`block mb-1 font-medium 
        ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="E-mail"
                className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 
          ${theme === 'dark'
                    ? 'bg-gray-800 border border-gray-700 text-gray-200 focus:ring-blue-400'
                    : 'bg-white border border-gray-200 text-gray-800 focus:ring-blue-300'}`}
              />
            </div>

            <div>
              <label className={`block mb-1 font-medium 
        ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="">Password</label>
              <div className='relative w-full max-w-sm'>
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Password"
                  className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 
          ${theme === 'dark'
                      ? 'bg-gray-800 border border-gray-700 text-gray-200 focus:ring-blue-400'
                      : 'bg-white border border-gray-200 text-gray-800 focus:ring-blue-300'}`}
                />
                <button type='button' className='absolute inset-y-0 right-0 flex items-center px-2 text-gray-500'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (<FiEye />) : (<FiEyeOff />)}
                </button>
              </div>
            </div>

            {password ? (<div className='text-sm'>
              <p className="mt-2 text-sm text-gray-600">
                Passwords must include at least:
              </p>
              <ul className="text-sm mt-1 flex flex-wrap flex-row gap-2">
                <li className={`flex items-center px-3 py-1 rounded-full ${passwordRules.length ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                  {passwordRules.length ? <IoIosCheckmark size={17} /> : <IoIosClose size={16} />}  8 characters
                </li>
                <li className={`flex items-center  px-3 py-1 rounded-full ${passwordRules.lowerCase ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                  {passwordRules.lowerCase ? <IoIosCheckmark size={17} /> : <IoIosClose size={16} />} One lowercase
                </li>
                <li className={`flex items-center px-3 py-1 rounded-full ${passwordRules.upperCase ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                  {passwordRules.upperCase ? <IoIosCheckmark size={17} /> : <IoIosClose size={16} />} One uppercase
                </li>
                <li className={`flex items-center px-3 py-1 rounded-full ${passwordRules.specialCharacter ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                  {passwordRules.specialCharacter ? <IoIosCheckmark size={17} /> : <IoIosClose size={16} />} One special character
                </li>
              </ul>
            </div>) : null}

            <div>
              <label className={`block mb-1 font-medium 
        ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="">Confirm Password</label>
              <div className='relative w-full max-w-sm'>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="Password"
                  className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 
          ${theme === 'dark'
                      ? 'bg-gray-800 border border-gray-700 text-gray-200 focus:ring-blue-400'
                      : 'bg-white border border-gray-200 text-gray-800 focus:ring-blue-300'}`}
                />
                <button type='button' className='absolute inset-y-0 right-0 flex items-center px-2 text-gray-500'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (<FiEye />) : (<FiEyeOff />)}
                </button>
              </div>
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
