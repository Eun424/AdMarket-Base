import React, { useState, useContext, useEffect } from 'react';
import avatar from '../../assets/images/avatar.jpg';
import prof from '../../assets/images/download.jpg';
import { IoIosSearch } from 'react-icons/io';
import { Link, useNavigate } from 'react-router';
import { FaMoon, FaSun } from 'react-icons/fa'
import { themeContext } from '../../context/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { logout, sellerProfile } from '../../store/features/authSlice';

const Navbar2 = () => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const { theme, toggleTheme } = useContext(themeContext);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { profile} = useSelector((store) => store.auth)


  const toggleDropdown = () => setOpen(!open);

  const handleLogout = async () => {
    dispatch(logout())
    navigate('/login', { replace: true })
  }

  useEffect(() => {
      if(!profile) {
      dispatch(sellerProfile());
      }
    }, [dispatch, profile]);

  return (
    <div
      className={`w-full shadow px-4 md:px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative rounded-lg
        ${theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'}
      `}
    >
      {/* Title */}
      <div className='flex items-center gap-4'>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full shadow hover:scale-105 transition ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'
            }`}
        >
          {theme === 'light' ? (
            <FaMoon className="text-gray-800" />
          ) : (
            <FaSun className="text-yellow-400" />
          )}
        </button>
        <Link to='/' className="text-md bg-violet-300 p-2 font-semibold ml-12 md:ml-0 rounded-md text-white">Browse Products</Link>
      </div>


      <div className="flex md:flex-row gap-2 md:gap-4 w-full md:w-auto">
        {/* Search bar */}
        <div
          className={`flex items-center gap-2 px-4 md:py-0.5 rounded-md shadow-sm border border-r-0 w-full md:w-auto
            ${theme === 'dark'
              ? 'bg-gray-800 border-gray-700 focus-within:ring-cyan-500'
              : 'bg-white border-gray-300 focus-within:ring-black'}
          `}
        >
          <IoIosSearch className="text-[#8B8B8C] text-xl" />
          <input
            type="search"
            placeholder="Search listings"
            className={`bg-transparent outline-none w-full placeholder:text-gray-400
              ${theme === 'dark' ? 'text-gray-200 placeholder:text-gray-500' : 'text-gray-700'}
            `}
          />
        </div>

        {/* Avatar */}
        <div className="relative">
          <div
            className={`flex flex-col md:flex-row items-center gap-2 cursor-pointer px-3 py-1 rounded-full md:rounded-lg
              ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'md:bg-blue-100'}
            `}
            onClick={toggleDropdown}
          >
            <img
              src={profile?.profilePic || prof}
              alt="User Avatar"
              className="w-16 h-12 md:w-9 md:h-9 object-cover rounded-full"
            />
            {profile && (
              <p
                className={`font-medium hidden md:block whitespace-nowrap
      ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}
    `}
              >
                {profile.firstName} {profile.lastName}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Dropdown */}
      {open && (
        <ul
          className={`absolute right-4 top-[130px] md:top-[70px] w-48 rounded shadow-lg z-50
            ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}
          `}
        >
          <Link to="/dashboard/profile">
            <li
              className={`px-4 py-2 cursor-pointer
                ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}
              `}
            >
              Settings
            </li>
          </Link>
          <li onClick={() => setShowModal(true)}
            className={`px-4 py-2 cursor-pointer text-red-500
              ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}
            `}
          >
            Logout
          </li>
        </ul>
      )}


      {showModal && (
        <div
          id="logoutModal"
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4 text-black">Confirm Logout</h2>
            <p className="mb-4 text-black">Are you sure you want to log out?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Yes
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar2;
