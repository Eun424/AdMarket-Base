import  { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch} from "react-redux";
import { themeContext } from "../../context/ThemeContext";
import { changePassword,  logout } from "../../store/features/authSlice";
import AuthStructure from "../../auth/AuthStructure";

const Security = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useContext(themeContext);
  

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    if (!oldPassword || !newPassword || !confirmNewPassword) {
      return alert("All the fields are required");
    }

    if (newPassword !== confirmNewPassword) {
      return alert("The new password and confirm password should match");
    }

    dispatch(changePassword({ previousPassword: oldPassword, newPassword, confirmNewPassword }));
    alert('Password changed successfully')
      dispatch(logout());
      navigate("/login", { replace: true });
   

  };

  return (
      <div className="space-y-10 p-6">
        {/* Change Password Section */}
        <div className="border-b border-gray-100 pb-6">
          <h2 className="text-xl font-semibold mb-2">Change Password</h2>
          <form className="space-y-4 max-w-md" onSubmit={handleChange}>
            <input
              type="password"
              placeholder="Old Password"
              className="w-full border border-gray-100 rounded-lg p-2 outline-blue-950"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full border border-gray-100 rounded-lg p-2 outline-blue-950"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full border border-gray-100 rounded-lg p-2 outline-blue-950"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Update Password
            </button>
          </form>
        </div>

        {/* Security Questions Section */}
        <div className="border-b border-gray-100 pb-6">
          <h2 className="text-xl font-semibold mb-2">Security Questions</h2>
          <form className="space-y-4 max-w-md">
            <select className="w-full border border-gray-100 rounded-lg p-2">
              <option>What was your childhood nickname?</option>
              <option>What is the name of your favorite teacher?</option>
              <option>Where were you born?</option>
            </select>
            <input
              type="text"
              placeholder="Your Answer"
              className="w-full border border-gray-100 rounded-lg p-2 outline-blue-950"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Save Security Question
            </button>
          </form>
        </div>
      </div>
  );
};

export default Security;
