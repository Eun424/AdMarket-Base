import React from 'react'
import { FaEye } from 'react-icons/fa6'
import { MdEditDocument } from 'react-icons/md'
import { TiPin } from 'react-icons/ti'
import {Link} from 'react-router'

const Dashboard = () => {
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
    <Link to= "/dashboard/add" className="bg-blue-600 text-white px-4 py-2 rounded">+ Add New Listing</Link>
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
</div>

  )
}

export default Dashboard