import React, { useState, useContext, useEffect } from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { Link, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { themeContext } from "../context/ThemeContext"; 
import { getProductById } from "../store/features/productsSlice";
import ProductImageCarousel from "../helpers/ProductImageCarousel";

const ProductDetail = () => {
  const { theme } = useContext(themeContext); 
  const {sellerId} = useParams()
  const { productId } = useParams();
  const dispatch = useDispatch()
  const {products} = useSelector((state) => state.products);

  

  useEffect(() => {
    dispatch(getProductById(productId))
  }, [dispatch, productId])



  return (
    <div className={`min-h-screen flex items-center justify-center p-6 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className={`max-w-3xl w-full overflow-hidden flex flex-col shadow-lg ${theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"}`}>
        <div className={`flex items-center justify-center p-8 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`}>
          <ProductImageCarousel images={products.productImage} />
        </div>

        <div className="p-8 space-y-3">
          <div>
            <p className="text-3xl font-bold">
              {products.productName}
            </p>
            <p className={` text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              {products.description || "A rich, non-greasy, fast-absorbing moisturizing cream with essential ceramides and hyaluronic acid."}
            </p>
            <h3 className={`text-sm mt-1 font-normal flex gap-1 ${theme === "dark" ? "text-gray-400" : "text-blue-400"}`}>
              <h4 className="text-gray-500">Brand:</h4> {products.brand}
            </h3>
          </div>

          <div className={`text-xl font-semibold ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}>
            GH₵ {products.price}
          </div>

          {/* Key Features */}
          <div>
            <h4 className={`text-sm font-medium uppercase mb-1 mt-2 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
              Key Features
            </h4>
            <h3 className="flex gap-1 text-sm text-blue-400">
              <h4 className="text-gray-500">Location/Campus:</h4>{products?.university?.name}
            </h3>
            <div className="flex gap-1 text-sm text-blue-400">
              <h4 className="text-gray-500">Gender:</h4> {products?.gender?.name}
            </div>
          </div>

          {/* Buttons + WhatsApp/Phone icons */}
          <div className="flex items-center gap-4 pt-4">
            <Link 
              to={`/sellerProfile/${products.Seller}`}
              className={`px-6 py-2 rounded-md transition ${theme === "dark" ? "bg-gray-600 hover:bg-gray-500 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"}`}
            >
              View Seller's Profile
            </Link>

            <a
              href={`https://wa.me/${products.whatsapp}?text=${encodeURIComponent(
      `Hello, I'm interested in the "${products.productName}" listed. Could you provide more details?`
    )}`}
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
              href={`tel: ${products.phone}`}
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
