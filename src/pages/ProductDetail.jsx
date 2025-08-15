import React, { useState } from "react";
import ceraveImg from "../assets/images/cerave-2.jpg";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  const {productId} = useParams()
const dispatch = useDispatch()
const products =  useSelector ((state ) => state.products.items)
console.log(products)

const product = products.find((p) => p.id === parseInt(productId))
console.log(product)

if(!product) {
  return <div>Product not found</div>
}
  

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
            src={product.image}
            alt="CeraVe Moisturizing Cream"
            className="w-72 object-contain"
          />
        </div>

        <div className="p-8 space-y-6">
          <div>
            <h3 className="text-sm uppercase text-gray-500 font-medium">
             {product.name}
            </h3>
            <h1 className="text-3xl font-bold text-gray-800">
              CeraVe Moisturizing Cream
            </h1>
            <p className="mt-2 text-gray-600 text-sm">
              A rich, non-greasy, fast-absorbing moisturizing cream with 3
              essential ceramides and hyaluronic acid to help restore the skin’s
              protective barrier.
            </p>
          </div>

          <div className="text-xl font-semibold text-gray-800">$17.99</div>

          <div>
            <h4 className="text-sm font-medium text-gray-500 uppercase mb-2">
              Key Features
            </h4>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              <li>Fragrance-free, non-comedogenic</li>
              <li>Suitable for dry to very dry skin</li>
              <li>Developed with dermatologists</li>
              <li>16 oz (453 g) tub</li>
            </ul>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
            >
              View Seller's Profile
            </button>

            <a
              href="https://wa.me/233XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 text-2xl"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp size={30} />
            </a>

            <a
              href="tel:+233XXXXXXXXX"
              className="text-gray-600 hover:text-gray-700 text-2xl"
              title="Call Seller"
            >
              <FaPhone size={30} />
            </a>
          </div>
        </div>

        <div className="w-full bg-gray-50 p-6 space-y-4">
          <div>
            <h4 className="text-black px-4 py-2 font-semibold">Skin Type</h4>
            <p className="bg-white text-gray-700 px-4 py-2 border rounded">
              Normal to Dry Skin
            </p>
          </div>

          <div>
            <h4 className="text-black px-4 py-2 font-semibold">Concern</h4>
            <p className="bg-white text-gray-700 px-4 py-2 border rounded">
              Hydration
            </p>
          </div>

          <div>
            <h4 className="text-black px-4 py-2 font-semibold">Key Benefits</h4>
            <p className="bg-white text-gray-700 px-4 py-2 border rounded">
              Helps restore skin's natural barrier, provides 24-hour hydration,
              and contains essential ceramides.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
