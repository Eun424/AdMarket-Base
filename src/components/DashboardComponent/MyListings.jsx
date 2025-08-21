import React, { useState, useContext } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

import beauty from '../../assets/images/cerave.jpg';
import fragrance from '../../assets/images/fragrance.jpg';
import cleanser from '../../assets/images/simple.jpg';
import oil from '../../assets/images/Bio oli.jpg';
import body from '../../assets/images/body.jpg';
import hair from '../../assets/images/hair.jpg';
import AddProduct from '../DashboardComponent/AddProduct';
import { themeContext } from '../../context/ThemeContext';

const lists = [
  {
    id: 1,
    productImage: beauty,
    productName: 'Cerave Facial Moisturizer',
    category: 'Beauty and Personal Care',
    subCategory: 'Skincare',
    price: 'Gh160',
  },
  {
    id: 2,
    productImage: fragrance,
    productName: 'Touch perfume oil',
    category: 'Beauty and Personal Care',
    subCategory: 'Fragrances',
    price: 'Gh15',
  },
  {
    id: 3,
    productImage: cleanser,
    productName: 'Simple acne cleanser',
    category: 'Beauty and Personal Care',
    subCategory: 'Skincare',
    price: 'Gh200',
  },
  {
    id: 4,
    productImage: oil,
    productName: 'Bio-oil',
    category: 'Beauty and Personal Care',
    subCategory: 'Skincare',
    price: 'Gh30',
  },
  {
    id: 5,
    productImage: body,
    productName: 'Carrot shower gel',
    category: 'Beauty and Personal Care',
    subCategory: 'Bath and body',
    price: 'Gh60',
  },
  {
    id: 6,
    productImage: hair,
    productName: '12-inches wet curls',
    category: 'Beauty and Personal Care',
    subCategory: 'Hair Beauty',
    price: 'Gh600',
  },
];

const MyListings = () => {
  const [showModal, setShowModal] = useState(false);
  const { theme } = useContext(themeContext);

  return (
    <div className={`p-2 min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className={`text-xl font-bold ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-900'}`}>
          My Listings
        </h1>
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setShowModal(true)}
        >
          + Add New Listing
        </button>
      </div>

      {/* Table wrapper */}
         <div className={`rounded-md border w-full ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}>
      <div className='overflow-x-auto w-full'>
        <table className={`w-full min-w-[600px] table-auto border-collapse ${theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"}`}>
          <thead className={`${theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-600" } text-sm text-left`}>
            <tr>
              <th className="p-3">Product Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Sub Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Edit</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((item) => (
              <tr
                key={item.id}
                className={`${theme === "dark" ? "border-gray-700 hover:bg-gray-700" : "border-t border-gray-200 hover:bg-gray-50"}`}
              >
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <span>{item.productName}</span>
                </td>
                <td className="p-3">{item.category}</td>
                <td className="p-3">{item.subCategory}</td>
                <td className="p-3">{item.price}</td>
                <td className="p-3">
                  <FaEdit className="text-blue-500 cursor-pointer" />
                </td>
                <td className="p-3">
                  <FaTrash className="text-red-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
            <div className={`${theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'} relative bg-white p-4 rounded-lg shadow-[0_-4px_15px_rgba(0,0,0,0.1),0_4px_15px_rgba(0,0,0,0.1)] max-h-screen overflow-auto`}>
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-700 hover:text-black text-3xl"
              >
                &times;
              </button>
              <AddProduct />
            </div>
          </div>
        )}
</div>

  );
};

export default MyListings;
