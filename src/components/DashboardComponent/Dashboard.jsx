import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa6'
import { MdEditDocument } from 'react-icons/md'
import { TiPin } from 'react-icons/ti'
import {Link} from 'react-router'
import AddProduct from '../DashboardComponent/AddProduct'
import { IoCloseCircleSharp } from 'react-icons/io5'

const Dashboard = () => {
  const [modal, setModal] = useState(false)

  return (
  <div className="p-6">
  <h2 className="text-2xl font-bold mb-4">Welcome, Eunice!</h2> 

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
    <div className="bg-white p-4 rounded shadow">
      <p className="text-gray-600 text-sm">Active Listings</p>
      <h3 className="text-xl font-semibold">8 Products</h3>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <p className="text-gray-600 text-sm">Pending Listings</p>
      <h3 className="text-xl font-semibold">2 Products</h3>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <p className="text-gray-600 text-sm">Total Views</p>
      <h3 className="text-xl font-semibold">143 Views</h3>
    </div>
  </div>

  
  <div className="flex gap-4 mb-6"> 
    <button  className="bg-blue-600 text-white px-4 py-2 rounded"
    onClick={() => setModal(true)}>+ Add New Listing</button>
    <button className="border px-4 py-2 rounded">View My Store</button>
  </div>

 
  <div className="bg-white p-4 rounded shadow">
    <h3 className="text-lg font-semibold mb-3">Recent Activity</h3>
    <ul className="text-sm space-y-2 text-gray-700">
      <li className='flex items-center gap-1'><TiPin className='text-red-500'/> You posted 'Red Heels' - 3 hours ago</li>
      <li className='flex items-center gap-1'><FaEye /> 'Wrist Watch' viewed 17 times today</li>
      <li className='flex items-center gap-1'><MdEditDocument className='text-purple-300' /> Profile updated - Yesterday</li>
    </ul>
  </div>
     {modal && (
        <div className="fixed inset-0 z-50 bg-black/40 bg-opacity-40 flex items-center justify-center">
          <div className="relative bg-white p-4 rounded-lg shadow-xl max-h-screen overflow-auto">
           
            <button
              onClick={() => setModal(false)}
              className="absolute top-2 right-2 text-white bg-red-500 px-2 py-2 rounded-full hover:bg-red-600"
            >
              <IoCloseCircleSharp />
            </button>

           
            <AddProduct />
          </div>
        </div>
      )}
</div>

  )
}

export default Dashboard