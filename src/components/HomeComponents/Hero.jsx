import React from 'react'
import electronics from '../assets/images/electronics.jpg'

const Hero = () => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-md p-8 mt-4">
      <div className="flex-1">
        <p className="text-green-700 font-semibold text-sm tracking-wide">FRUIT FRESH</p>
        <h2 className="text-4xl font-bold text-gray-800 mt-2">
          Vegetable <br />
          <span className="text-green-700">100% Organic</span>
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Free Pickup and Delivery Available
        </p>
        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded">
          SHOP NOW
        </button>
      </div>
      <div className="flex-1">
        <img src={electronics} alt="Vegetables" className="w-full max-w-sm" />
      </div>
    </div>
  )
}

export default Hero