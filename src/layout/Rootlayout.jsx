import React from 'react';
import Footer from '../components/HomeComponents/Footer'
import { Outlet } from 'react-router';
import Navbar from '../components/HomeComponents/Navbar';

const Rootlayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Rootlayout;
