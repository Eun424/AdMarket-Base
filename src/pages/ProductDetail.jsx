import React, { useState } from 'react';
import ceraveImg from "../assets/images/cerave-2.jpg";
import { useParams } from 'react-router';
import {FaWhatsapp, FaPhone} from 'react-icons/fa';

const ProductDetail = () => {
    // const {id} = useParams();
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    alert(`Cerave Moisturizing Cream added to cart`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
      <div className="bg-white shadow-lg max-w-3xl w-full overflow-hidden flex flex-col">

        
        <div className="bg-blue-100 flex items-center justify-center p-8">
          <img
            src={ceraveImg}
            alt="CeraVe Moisturizing Cream"
            className="w-72 object-contain"
          />
        </div>

        
        <div className="p-8 space-y-6">
          <div>
            <h3 className="text-sm uppercase text-gray-500 font-medium">CeraVe Skincare</h3>
            <h1 className="text-3xl font-bold text-gray-800">CeraVe Moisturizing Cream</h1>
            <p className="mt-2 text-gray-600 text-sm">
              A rich, non-greasy, fast-absorbing moisturizing cream with 3 essential ceramides and hyaluronic acid to help restore the skin’s protective barrier.
            </p>
          </div>

          <div className="text-xl font-semibold text-blue-900">$17.99</div>

          <div>
            <h4 className="text-sm font-medium text-gray-500 uppercase mb-2">Key Features</h4>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              <li>Fragrance-free, non-comedogenic</li>
              <li>Suitable for dry to very dry skin</li>
              <li>Developed with dermatologists</li>
              <li>16 oz (453 g) tub</li>
            </ul>
          </div>

          
          <div className="flex gap-4 pt-4">
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
            >
              View seller's profile
            </button>
            <a
    href="https://wa.me/233XXXXXXXXX" // Replace with real number
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-600 hover:text-green-700 text-2xl"
    title="Chat on WhatsApp"
  >
    <FaWhatsapp />
  </a>
<a
    href="tel:+233XXXXXXXXX" // Replace with real phone number
    className="text-blue-600 hover:text-blue-700 text-2xl"
    title="Call Seller"
  >
    <FaPhone />
  </a>
            {/* <span className="text-sm text-gray-600 pt-2">In Cart: {cartCount}</span> */}
          </div>
        </div>

        
        <div className="w-full bg-blue-50 p-6 space-y-4"> 
          
          <div>
            <h4 className="bg-blue-200 text-black px-4 py-2 font-semibold rounded-t">Skin Type</h4>
            <p className="bg-white text-gray-600 px-4 py-2 rounded-b border border-blue-200 border-t-0">
              Normal to Dry Skin
            </p>
          </div>

          
          <div>
            <h4 className="bg-blue-200 text-black px-4 py-2 font-semibold rounded-t">Concern</h4>
            <p className="bg-white text-gray-600 px-4 py-2 rounded-b border border-blue-200 border-t-0">
              Hydration 
            </p>
          </div>

          
          <div>
            <h4 className="bg-blue-200 text-black px-4 py-2 font-semibold rounded-t">Key Benefits</h4>
            <p className="bg-white text-gray-600 px-4 py-2 rounded-b border border-blue-200 border-t-0">
              Helps restore skin’s natural barrier, provides 24-hour hydration, and contains essential ceramides.
            </p>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default ProductDetail;
