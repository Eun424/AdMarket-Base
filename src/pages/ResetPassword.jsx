import React, { useContext, useEffect, useState } from "react";
import { themeContext } from "../context/ThemeContext";
import { useDispatch } from "react-redux";
import api from "../Axios/axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { resetPassword } from "../store/features/authSlice";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { resetPasswordToken } = useParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { theme } = useContext(themeContext);
   const [valid, setValid] = useState(false);
  const [error, setError] = useState(null);

  function handleReset(e) {
    e.preventDefault();

    if (!password) {
      return alert("password cannot be empty");
    }

    if (!confirmPassword) {
      return alert("confirm password cannot be empty");
    }

    if (password !== confirmPassword) {
      return alert("password and confirm password must match");
    }
    dispatch(resetPassword({ resetPasswordToken, password }));
    toast.success('Password reset successfully');
    
  }

  // useEffect(() => {
  //   async function checkToken() {
  //     try {
  //       const res = await api.get(`/checkLink/${resetPasswordToken}`);
  //       if (res.data.success) {
  //         setValid(true);
  //       }
  //       console.log(res.data)
  //     } catch (error) {
  //       setValid(false);
  //       setError(error.response.data.message);
  //     }
  //   }

  //   checkToken();
  // }, [resetPasswordToken]);

  // if (!valid) {
  //   return (
  //     <>
  //      <div>{error || "Something is wrong about the link"}</div>
  //     <button onClick={() => navigate("/login")}>Go back to login</button>
  //     </>
  //  );
  
  return (
    <div>
      <div>
        <div
          className={`flex flex-col justify-center items-center min-h-screen ${
            theme === "dark" ? "bg-black/90" : "bg-blue-50"
          }`}
        >
          <form
            id="login-form" onSubmit={handleReset}
            className="relative flex flex-col gap-5 p-8 w-full  max-w-lg rounded-xl bg-white  border border-white/20 shadow-lg "
          >
            <div>
              <h4
                className={`text-3xl sm:text-4xl text-blue-800 font-bold text-center ${
                  theme === "dark" ? "text-yellow-500" : "text-blue-900"
                }`}
              >
                Enter new password!
              </h4>
            </div>
            <div className="text-red-400 text-center"></div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor=""
                className={`font-bold ${
                  theme === "dark" ? "text-blue-500" : "text-blue-800"
                }`}
              >
                Password
              </label>
              <input
                className="bg-white p-3 rounded text-gray-800 border border-gray-100"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="Enter password"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor=""
                className={`font-bold ${
                  theme === "dark" ? "text-blue-500" : "text-blue-800"
                }`}
              >
                Confirm Password
              </label>
              <input
                className="bg-white p-3 rounded text-gray-800 border border-gray-100"
                name="password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                id="confirmPassword"
                placeholder="Enter password again"
              />
            </div>

            <button
              type="Submit"
              className={` text-white font-bold py-3 px-6 rounded transition ${
                theme === "dark"
                  ? "bg-blue-600"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
