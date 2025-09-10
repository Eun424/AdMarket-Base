import React, { useContext, useState } from 'react';
import logo from '../../assets/images/1.png';
import { NavLink, useNavigate } from 'react-router';
import { MdAddShoppingCart, MdDashboard } from 'react-icons/md';
import { FaRectangleList } from 'react-icons/fa6';
import { TbMessageReportFilled } from "react-icons/tb";
import { CgProfile } from 'react-icons/cg';
import bg from '../../assets/images/bg1.jpg';
import { IoIosLogOut } from 'react-icons/io';
import { HiMenu } from 'react-icons/hi';
import api from '../../Axios/axios';
import { AuthContext } from '../../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/features/authSlice';

const Sidebar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false)
  }
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  

  const handleLogout = async () => {
    dispatch(logout())
      navigate('/login', { replace: true }) 
  }

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-[#496ABF] p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiMenu size={24} />
      </button>
      {
        isOpen && (
          <div className="fixed inset-0 z-30 md:hidden"
            onClick={handleClose}
          />
        )}

      <div

        className={`fixed top-0 left-0 z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 md:relative md:flex`}
      >
        <div
          className='relative flex flex-col justify-between px-10 min-h-screen py-8 w-72 md:w-75 text-white'
          style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-[#182B3E]/85 z-0"></div>

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className='border-b border-[#496ABF] w-full flex'>
              <img src={logo} alt="Logo" className='w-full h-20 object-contain mb-8' />
            </div>

            <ul className='flex flex-col space-y-2 font-semibold text-lg'>
              <li>
                <NavLink
                  to="/dashboard"
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded transition ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-white/10'
                    }`
                  }
                >
                  <MdDashboard className='text-yellow-300' />
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/listings"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded transition ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-white/10'
                    }`
                  }
                >
                  <FaRectangleList className='text-orange-400' />
                  My Listings
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/add"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded transition ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-white/10'
                    }`
                  }
                >
                  <MdAddShoppingCart className='text-[#f7a1f1]' />
                  Add New Listings
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/report"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded transition ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-white/10'
                    }`
                  }
                >
                  <TbMessageReportFilled className='text-blue-400' />
                  Complaints
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/profile"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded transition ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-white/10'
                    }`
                  }
                >
                  <CgProfile className='text-rose-500' />
                  Profile Settings
                </NavLink>
              </li>
            </ul>

            <div className="mt-10">
              <div>
                <button
                  onClick={() => setShowModal(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
};

export default Sidebar;
