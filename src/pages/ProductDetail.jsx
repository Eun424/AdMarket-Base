import React, { useState } from "react";
import ceraveImg from "../assets/images/cerave-2.jpg";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { Link } from "react-router";

const ProductDetail = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    alert(`CeraVe Moisturizing Cream added to cart`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg max-w-3xl w-full overflow-hidden flex flex-col">
        <div className="bg-gray-200 flex items-center justify-center p-8">
          <img
            src={ceraveImg}
            alt="CeraVe Moisturizing Cream"
            className="w-72 object-contain"
          />
        </div>

        <div className="p-8 space-y-6">
          <div>
            <h3 className="text-sm uppercase text-gray-500 font-medium">
              CeraVe Skincare
            </h3>
            <h1 className="text-3xl font-bold text-gray-800">
              {product.name}
            </h1>
            <p className="mt-2 text-gray-600 text-sm">
              A rich, non-greasy, fast-absorbing moisturizing cream with 3
              essential ceramides and hyaluronic acid to help restore the skin’s
              protective barrier.
            </p>
          </div>

          <div className="text-xl font-semibold text-gray-800">$17.99</div>

          {/* Key Features in 50/50 bullet grid including Skin Type, Concern, and Key Benefits */}
          <div>
            <h4 className="text-sm font-medium text-gray-500 uppercase mb-2">
              Key Features
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <p>Fragrance-free, non-comedogenic</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <p>Suitable for dry to very dry skin</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <p>Developed with dermatologists</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <p>16 oz (453 g) tub</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <p>Normal to Dry Skin</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <p>Hydration</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <p>Helps restore skin's natural barrier</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <p>Provides 24-hour hydration</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <p>Contains essential ceramides</p>
              </div>
            </div>
          </div>

          {/* Buttons + WhatsApp/Phone icons */}
          <div className="flex items-center gap-4 pt-4">
            <Link to= '/sellerprofile'
              
              className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
            >
              View Seller's Profile
            </Link>

            <a
              href="https://wa.me/233XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 border-2 border-green-700 hover:bg-green-600 transition"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp size={20} className="text-white" />
            </a>

            <a
              href="tel:+233XXXXXXXXX"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 border-2 border-blue-600 hover:bg-blue-500 transition"
              title="Call Seller"
            >
              <FaPhone size={20} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
