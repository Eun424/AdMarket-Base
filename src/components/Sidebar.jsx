import React, { useState } from 'react';
import logo from '../assets/images/logo3.png';
import { NavLink } from 'react-router';
import { MdAddShoppingCart, MdDashboard } from 'react-icons/md';
import { FaRectangleList } from 'react-icons/fa6';
import { TbMessageReportFilled } from "react-icons/tb";
import { CgProfile } from 'react-icons/cg';
import bg from '../assets/images/bg1.jpg';
import { IoIosLogOut } from 'react-icons/io';
import { HiMenu } from 'react-icons/hi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-[#496ABF] p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiMenu size={24} />
      </button>


      <div
        className={`fixed top-0 left-0 z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 md:relative md:flex`}
      >
        <div
          className='relative flex flex-col justify-between px-10 min-h-screen py-8 w-64 text-white'
          style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-[#182B3E]/85 z-0"></div>

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className='border-b border-[#496ABF] w-full flex'>
              <img src={logo} alt="Logo" className='w-full h-20 object-contain mb-8' />
            </div>

            <ul className='flex flex-col space-y-2 font-semibold text-md'>
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
                  <MdAddShoppingCart className='text-purple-500' />
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
              <button className='text-sm bg-[#496ABF] px-4 py-2 rounded hover:bg-blue-700 transition flex items-center gap-1.5'>
                Logout <span><IoIosLogOut className='font-semibold' /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
