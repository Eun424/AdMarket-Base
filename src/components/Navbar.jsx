import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import { Link } from 'react-router'
import logo from '../assets/images/logo3.png'

const Navbar = () => {
    return (
        <div className='bg-[#024658] w-full'>
            {/* Top Bar */}
            <div className='flex justify-between items-center px-6 py-4 border-b border-[#9CD2F6]'>
                <div>
                    <img src={logo} alt="Logo" className='h-20 w-auto object-contain' />
                </div>

                <div>
                    <Link to='/signup' className='bg-[#9CD2F6] text-black font-bold py-3 px-10  rounded hover:bg-[#82c9f2] transition duration-200 text-lg'>
                        SELL
                    </Link>
                </div>
            </div>

            {/* Search Bar */}
            <section className='flex flex-wrap justify-center items-center gap-4 px-4 py-4'>
                {/* Dropdown */}
                <div className="bg-white rounded-lg shadow-sm w-48">
                    <select
                        id="university"
                        name="university"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">LEGON</option>
                        <option value="">UCC</option>
                        <option value="">KNUST</option>
                        <option value="">UHAS</option>
                        <option value="">UEW</option>
                    </select>
                </div>

                {/* Search Field */}
                <div className="flex w-full max-w-xl">
                    {/* Input Field */}
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-l-lg shadow-sm border border-r-0 border-gray-300 w-full focus-within:ring-2 focus-within:ring-blue-400">
                        <IoIosSearch className="text-[#8B8B8C] text-xl" />
                        <input
                            type="search"
                            placeholder="Search..."
                            className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
                        />
                    </div>

                    {/* Search Button */}
                    <button className="bg-[#9CD2F6] px-5 py-2 rounded-r-lg text-[#0C1C3D] font-semibold hover:bg-[#7cc4f1] transition duration-200">
                        Search
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Navbar
