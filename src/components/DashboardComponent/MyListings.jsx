import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from 'react';

import beauty from '../../assets/images/cerave.jpg';
import fragrance from '../../assets/images/fragrance.jpg';
import cleanser from '../../assets/images/simple.jpg';
import oil from '../../assets/images/Bio oli.jpg';
import body from '../../assets/images/body.jpg';
import hair from '../../assets/images/hair.jpg';
import { Link } from 'react-router';
import AddProduct from '../DashboardComponent/AddProduct';



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

  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-cyan-900">My Listings</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setShowModal(true)}>
          + Add New Listing
        </button>
      </div>

      <div className=" rounded-md border border-gray-300 w-full">
        <div className='overflow-x-auto w-full'>
        <table className="w-full min-w-[600px] table-auto border-collapse">
          <thead className="bg-gray-100  text-sm text-gray-600 text-left">
            <tr>
              <th className="p-3">Product Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Sub Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Edit</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {lists.map((item) => (
              <tr
                key={item.id}
                className="border-t border-gray-200 hover:bg-gray-50"
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
                  <FaEdit className="text-blue-600 cursor-pointer" />
                </td>
                <td className="p-3">
                  <FaTrash className="text-red-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

       {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 bg-opacity-40 flex items-center justify-center">
          <div className="relative bg-white p-4 rounded-lg shadow-xl max-h-screen overflow-auto">
           
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-white bg-red-500 px-2 py-1 rounded-full hover:bg-red-600"
            >
              &times;
            </button>

           
            <AddProduct />
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default MyListings;
