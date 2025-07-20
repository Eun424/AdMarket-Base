import React, { useState } from 'react';
import avatar from '../../assets/images/avatar.jpg';
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router';

const Navbar2 = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  return (
    <div className="w-full shadow bg-white px-4 md:px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative">

      <div className="text-xl font-bold text-gray-800 ml-12 md:ml-0">
        Dashboard
      </div>

      <div className='flex md:flex-row gap-2 md:gap-4 w-full md:w-auto'>

        <div className="flex items-center gap-2 bg-white px-4 md:py-2 rounded-md shadow-sm border border-r-0 border-gray-300 focus-within:ring-2 focus-within:ring-blue-400 w-full md:w-auto">
          <IoIosSearch className="text-[#8B8B8C] text-xl" />
          <input
            type="search"
            placeholder="Search listings"
            className="bg-transparent outline-none text-gray-700 placeholder:text-gray-400 w-full"
          />
        </div>

        <div className="relative">
          <div
            className="flex flex-col md:flex-row items-center gap-2 cursor-pointer md:bg-blue-100  px-3 py-2 rounded-full md:rounded-lg"
            onClick={toggleDropdown}
          >
            <img
              src={avatar}
              alt="User Avatar"
              className="w-16 h-12 md:w-9 md:h-9 object-cover rounded-full"
            />
            <p className="font-medium hidden md:block  text-gray-800 whitespace-nowrap ">Eunice Asamoah</p>
          </div>
        </div>
      </div>

      {open && (
        <ul className="absolute right-4 top-[130px] md:top-[70px] w-48 bg-white rounded shadow-lg z-50">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            My Profile
          </li>
          <Link to= '/dashboard/profile'><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Settings
          </li></Link>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
            Logout
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar2;
