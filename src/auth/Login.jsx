import { useState, useContext } from "react";
import toast from "react-hot-toast";
import api from "../Axios/axios";
import { useNavigate } from "react-router";
import { AuthContext } from '../context/AuthContext';
import AuthStructure from './AuthStructure'

const Login = () => {
  const navigate = useNavigate()
  

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();
    setErrorMessage(null);

    if (!userData.email || !userData.password) {
      return toast.error("Email and password are required");
    }

    try {
      const res = await api.post("/login", {
        email: userData.email,
        password: userData.password,
      });

      if (res.data.message === "success") {
        toast.success("Logged in successfully");

      console.log(res.data) 

        navigate("/dashboard", { replace: true });
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error(error.res?.data?.message || "Login failed");
      setErrorMessage(error.res?.data?.message);
    }
  }


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
    <div className="w-full md:w-1/2 p-8 mt-3">
          <h2 className="text-3xl font-semibold text-[#3690cc] mb-6 text-center">Login</h2>
          <div className='text-red-500 text-center'>
            {errorMessage ? errorMessage : null}
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
           
           <label htmlFor="" className='text-sky-900'>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Please enter your email"
              value={userData.email}          
              onChange={handleChange}
              className="w-full px-4 py-3 mt-1 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
             <label htmlFor="" className='text-sky-900'>Password</label>
            <input
              type="password"
              name="password" 
              placeholder="Please enter your password"
               value={userData.password}       
              onChange={handleChange}
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
