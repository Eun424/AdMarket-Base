import React, { useState, useContext } from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { Link, useParams } from "react-router";
import { useSelector } from "react-redux";
import { themeContext } from "../context/ThemeContext"; // adjust path to your context

const ProductDetail = () => {
  const { theme } = useContext(themeContext); // get the current theme
  const { productId } = useParams();
  const [cartCount, setCartCount] = useState(0);
  const products = useSelector((state) => state.products.items);

  const product = products.find((p) => p.id === parseInt(productId));

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    alert(`${product.name} added to cart`);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className={`max-w-3xl w-full overflow-hidden flex flex-col shadow-lg ${theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"}`}>
        <div className={`flex items-center justify-center p-8 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-72 object-contain"
          />
        </div>

        <div className="p-8 space-y-6">
          <div>
            <h3 className={`text-sm uppercase font-medium ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
              {product.brand || "CeraVe Skincare"}
            </h3>
            <h1 className="text-3xl font-bold">
              {product.name}
            </h1>
            <p className={`mt-2 text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              {product.description || "A rich, non-greasy, fast-absorbing moisturizing cream with essential ceramides and hyaluronic acid."}
            </p>
          </div>

          <div className={`text-xl font-semibold ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}>
            ${product.price || "17.99"}
          </div>

          {/* Key Features */}
          <div>
            <h4 className={`text-sm font-medium uppercase mb-2 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
              Key Features
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {product.features?.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <p className={`${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons + WhatsApp/Phone icons */}
          <div className="flex items-center gap-4 pt-4">
            <Link 
              to='/buyer'
              className={`px-6 py-2 rounded-md transition ${theme === "dark" ? "bg-gray-600 hover:bg-gray-500 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"}`}
            >
              View Seller's Profile
            </Link>

            <a
              href="https://wa.me/233XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full border-2 hover:opacity-90 transition"
              style={{
                backgroundColor: "#25D366",
                borderColor: "#128C7E",
              }}
              title="Chat on WhatsApp"
            >
              <FaWhatsapp size={20} className="text-white" />
            </a>

            <a
              href="tel:+233XXXXXXXXX"
              className="flex items-center justify-center w-10 h-10 rounded-full border-2 hover:opacity-90 transition"
              style={{
                backgroundColor: "#3b82f6",
                borderColor: "#1e40af",
              }}
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
