import { useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import api from "../Axios/axios";
import { Link, useNavigate } from "react-router";
import AuthStructure from './AuthStructure'
import { FaEye } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { themeContext } from "../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/features/authSlice";
import { user } from "@heroui/react";

const Login = () => {
  const { users, error } = useSelector((store) => store.auth)
  console.log(users)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { theme } = useContext(themeContext)
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false)
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });


  async function handleLogin(e) {
    e.preventDefault();
    setErrorMessage(null);

    const { email, password } = userData
    if (!userData.email || !userData.password) {
      return toast.error("Email and password are required");
    }

    dispatch(login(userData))


  }
  useEffect(() => {
    if (users?.success ) {
      toast.success(users?.message);
      navigate("/dashboard", { replace: true });

    }
  }, [users])

  useEffect(() => {
    if (error) {
      toast.error(error);
      setErrorMessage(error)
    }
  }, [error])


  // put this inside Login component, above return




  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,   // updates email or password based on input's name
    })
  };

  return (
    <div>
      <AuthStructure>
        <div className={`w-full md:w-1/2 p-8  rounded-lg shadow-lg 
  ${theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'}`}>
          <h2 className="text-3xl font-semibold text-[#3690cc] mb-6 text-center">Login</h2>
          <div className='text-red-500 text-center'>
            {errorMessage ? errorMessage : null}
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>

            <label htmlFor="" className={`block mb-1 font-medium 
        ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Please enter your email"
              value={userData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 
          ${theme === 'dark'
                  ? 'bg-gray-800 border border-gray-700 text-gray-200 focus:ring-blue-400'
                  : 'bg-white border border-gray-200 text-gray-800 focus:ring-blue-300'}`}
            />


            <label htmlFor="" className={`block mb-1 font-medium 
        ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Password</label>
            <div className="relative w-full max-w-sm">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Please enter your password"
                value={userData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 
          ${theme === 'dark'
                    ? 'bg-gray-800 border border-gray-700 text-gray-200 focus:ring-blue-400'
                    : 'bg-white border border-gray-200 text-gray-800 focus:ring-blue-300'}`}
              />


              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="flex items-center absolute inset-y-0 right-0 px-2 text-gray-500">
                {showPassword ? (<FiEye />) : (<FiEyeOff />)}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#3690cc] hover:bg-blue-900 text-white font-semibold rounded-md transition duration-200"
            >
              LOGIN
            </button>
            <div className="text-blue-800 underline -mt-3">
              <Link to="/forgotPassword">Forgot Password?</Link>
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
