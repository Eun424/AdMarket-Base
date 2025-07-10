import React from 'react';
import logo from '../assets/images/logo3.png'

const Legal = ({ children }) => {
  return (
    <div>
      <nav className="bg-[#024658] py-6 px-4 sm:px-16 text-white">
        <div className="flex items-center justify-between mb-10">
          <img src={logo} alt="Logo" className='h-20 w-auto object-contain' />
          <button className="bg-[#9CD2F6] text-[#024658] font-bold px-5 py-2 rounded hover:bg-[#7ac8f5] transition">
            DOWNLOAD
          </button>
        </div>
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-semibold">Terms, Safety and FAQs</h1>
        </div>
      </nav>

      {children}
    </div>
  );
};

export default Legal;
