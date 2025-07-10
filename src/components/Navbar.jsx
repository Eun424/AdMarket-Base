import React from 'react'
import { IoIosSearch } from 'react-icons/io'

const Navbar = () => {
    return (
        <div className='bg-[#024658]'>
            <div className='flex justify-between py-2 px-6 border-b-[#9CD2F6] border-b  items-center'>
                <div>
                    <h1 className='text-white'>LOGO</h1>
                </div>

                <div>
                    <button className='text-black bg-[#9CD2F6] py-1 px-4 font-bold rounded'>SELL</button>
                </div>
            </div>

            <section className='flex justify-center gap-4 mt-3 pb-3 items-center mx-2 '>
                <div className="bg-white  rounded shadow-md  max-w-sm">
                    <select
                        id="university"
                        name="university"
                        className="w-full px-4 py-2  border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">LEGON</option>
                        <option value="">UCC</option>
                        <option value="">KNUST</option>
                        <option value="">UHAS</option>
                        <option value="">UEW</option>
                    </select>
                </div>


  <div className="flex  max-w-xl">
      {/* Search Input + Icon */}
      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-l shadow-sm border border-r-0 border-gray-300 w-full focus-within:ring-2 focus-within:ring-blue-400">
        <IoIosSearch className="text-[#8B8B8C] text-xl" />
        <input
          type="search"
          placeholder="Search..."
          className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
        />
      </div>

      {/* Search Button */}
      <button className="bg-[#9CD2F6] px-5 py-2 rounded-r text-[#0C1C3D] font-semibold hover:bg-[#7cc4f1] transition">
        Search
      </button>
    </div>
            </section>
        </div>
    )
}

export default Navbar