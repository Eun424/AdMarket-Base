import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/logo3.png'

const Footer = () => {
  return (
    <footer className="bg-[#9cd2f693] text-gray-800 pt-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4 grid-cols-1   pb-10">
        <div className="space-y-4">
          <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
          <p className="text-sm">
            <span className="font-semibold text-lg">Campus Mart</span><br />
            Your Trusted Campus Marketplace!!
          </p>
        </div>

        <div className="space-y-2">
          <h6 className="text-lg font-bold mb-2 text-blue-900">Quick Links</h6>
          <Link to='/' className="block text-sm hover:text-blue-700 transition">Home</Link>
          <Link to='/aboutus' className="block text-sm hover:text-blue-700 transition">About CampusMart</Link>
        </div>

        <div className="space-y-2">
          <h6 className="text-lg font-bold mb-2 text-blue-900">Support</h6>
          <a className="block text-sm hover:text-blue-700 transition" href="#">Contact Us</a>
          <a className="block text-sm hover:text-blue-700 transition" href="#">Instagram</a>
          <a className="block text-sm hover:text-blue-700 transition" href="#">LinkedIn</a>
          <a className="block text-sm hover:text-blue-700 transition" href="#">Facebook</a>
        </div>

        <div className="space-y-2">
          <h6 className="text-lg font-bold mb-2 text-blue-900">Resources</h6>
          <Link to='/terms' className="block text-sm hover:text-blue-700 transition">Terms and Conditions</Link>
          <Link to='/tips' className="block text-sm hover:text-blue-700 transition">Safety Tips</Link>
          <Link to='/Faqs' className="block text-sm hover:text-blue-700 transition">FAQs</Link>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 mt-6 py-4  border-gray-300 border-t ">
        <p className="mb-1">Your Trusted Campus Marketplace!!</p>
        <p>&copy; 2025 <span className="font-semibold text-blue-800">Campus Mart</span>. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
