import React, { useState, useContext, useEffect } from 'react'
import { IoCloseCircleSharp } from 'react-icons/io5'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import AddProduct from '../DashboardComponent/AddProduct'
import { themeContext } from '../../context/ThemeContext'
import { useDispatch, useSelector } from 'react-redux'
import { sellerProfile } from '../../store/features/authSlice'

const data = [
  { name: "Posts", count: 1 },
  { name: "Views", count: 17 },
  { name: "Profile Updates", count: 1 },
];

const Dashboard = () => {
  const [modal, setModal] = useState(false)
  const dispatch = useDispatch();
  const { theme } = useContext(themeContext)
  const { profile} = useSelector((store) => store.auth);


   useEffect(() => {
      if(!profile) {
      dispatch(sellerProfile());
      }
    }, [dispatch, profile]);

  return (
    <div className={`p-6 min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <h2 className="text-2xl font-bold mb-4">Welcome, {profile?.firstName}</h2> 

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {[
          { label: "Active Listings", value: "8 Products" },
          { label: "Pending Listings", value: "2 Products" },
          { label: "Total Views", value: "143 Views" },
        ].map((card, idx) => (
          <div 
            key={idx}
            className={`${theme === 'dark' 
              ? 'bg-gray-800 text-gray-200' 
              : 'bg-white text-gray-800'} p-4 rounded shadow`}
          >
            <p className="text-sm">{card.label}</p>
            <h3 className="text-xl font-semibold">{card.value}</h3>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-6"> 
        <button  
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setModal(true)}
        >
          + Add New Listing
        </button>
        <button 
          className={`${theme === 'dark' 
            ? 'border border-gray-400 text-gray-200' 
            : 'border text-gray-800'} px-4 py-2 rounded`}
        >
          View My Store
        </button>
      </div>

      {/* Chart */}
      <div className={`${theme === 'dark' 
        ? 'bg-gray-800 text-gray-200' 
        : 'bg-white text-gray-800'} p-4 rounded shadow w-full h-64`}
      >
        <h3 className="text-lg font-semibold mb-3">Recent Activity</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#555' : '#ccc'} />
            <XAxis dataKey="name" stroke={theme === 'dark' ? '#ddd' : '#333'} />
            <YAxis allowDecimals={false} stroke={theme === 'dark' ? '#ddd' : '#333'} />
            <Tooltip 
              contentStyle={{
                backgroundColor: theme === 'dark' ? '#1f2937' : '#fff',
                color: theme === 'dark' ? '#f9fafb' : '#111'
              }}
            />
            <Bar dataKey="count" fill="#6366F1" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 bg-opacity-50">
          <div 
            className={`${theme === 'dark' 
              ? 'bg-gray-900 text-gray-200' 
              : 'bg-white text-gray-800'} relative p-4 rounded-lg shadow-xl max-h-screen overflow-auto w-full max-w-2xl`}
          >
            <button
              onClick={() => setModal(false)}
              className={`${theme === 'dark' 
                ? 'text-gray-300 hover:text-white' 
                : 'text-gray-700 hover:text-black'} absolute top-2 right-2`}
            >
              <IoCloseCircleSharp size={24} />
            </button>
            <AddProduct/>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
